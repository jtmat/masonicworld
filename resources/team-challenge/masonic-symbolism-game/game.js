"use strict";

const GAME_CONFIG = {
  degreeNames: {
    EA: "Entered Apprentice",
    FC: "Fellow Craft",
    MM: "Master Mason",
    ALL: "All Three Degrees"
  },
  questionBanks: {
    EA: EA_QUESTIONS,
    FC: FC_QUESTIONS,
    MM: MM_QUESTIONS,
    ALL: [...EA_QUESTIONS, ...FC_QUESTIONS, ...MM_QUESTIONS]
  },
  difficultyMixByLength: {
    10: { easy: 5, medium: 3, hard: 2 },
    15: { easy: 8, medium: 4, hard: 3 },
    20: { easy: 10, medium: 6, hard: 4 },
    25: { easy: 13, medium: 7, hard: 5 }
  }
};

const screens = {
  setup: document.getElementById("setup-screen"),
  question: document.getElementById("question-screen"),
  results: document.getElementById("results-screen")
};

const elements = {
  setupForm: document.getElementById("game-setup"),
  teamNameFields: document.getElementById("team-name-fields"),
  gameSizeSummary: document.getElementById("game-size-summary"),
  scoreboard: document.getElementById("scoreboard"),
  turnName: document.getElementById("turn-name"),
  progressText: document.getElementById("progress-text"),
  teamProgressText: document.getElementById("team-progress-text"),
  progressBar: document.getElementById("progress-bar"),
  questionText: document.getElementById("question-text"),
  answerList: document.getElementById("answer-list"),
  answerFeedback: document.getElementById("answer-feedback"),
  continueButton: document.getElementById("continue-button"),
  winnerMessage: document.getElementById("winner-message"),
  finalStandings: document.getElementById("final-standings"),
  playAgainButton: document.getElementById("play-again-button"),
  changeSetupButton: document.getElementById("change-setup-button")
};

let gameState = null;

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, screen]) => {
    screen.hidden = name !== screenName;
  });
}

function getSelectedNumber(name) {
  return Number(elements.setupForm.elements[name].value);
}

function renderTeamNameFields() {
  const playerCount = getSelectedNumber("player-count");
  const existingValues = [...elements.teamNameFields.querySelectorAll("input")].map(
    (input) => input.value
  );

  elements.teamNameFields.replaceChildren();

  for (let index = 0; index < playerCount; index += 1) {
    const label = document.createElement("label");
    label.className = "team-name-field";

    const labelText = document.createElement("span");
    labelText.textContent = `Team / Player ${index + 1}`;

    const input = document.createElement("input");
    input.type = "text";
    input.name = `team-name-${index + 1}`;
    input.maxLength = 40;
    input.autocomplete = "off";
    input.placeholder = `Team ${index + 1}`;
    input.value = existingValues[index] || "";

    label.append(labelText, input);
    elements.teamNameFields.append(label);
  }

  updateGameSizeSummary();
}

function updateGameSizeSummary() {
  const playerCount = getSelectedNumber("player-count");
  const questionsPerTeam = getSelectedNumber("questions-per-team");
  const label = playerCount === 1 ? "team" : "teams";
  elements.gameSizeSummary.textContent = `${playerCount} ${label} × ${questionsPerTeam} questions = ${playerCount * questionsPerTeam} questions total`;
}

function getPlayersFromSetup() {
  const playerCount = getSelectedNumber("player-count");

  return Array.from({ length: playerCount }, (_, index) => {
    const input = elements.setupForm.elements[`team-name-${index + 1}`];
    const name = input.value.trim() || `Team ${index + 1}`;
    return { id: index, name, score: 0 };
  });
}

function prepareTeamQuestionSets(bank, playerCount, questionsPerTeam) {
  const mix = GAME_CONFIG.difficultyMixByLength[questionsPerTeam];

  if (!mix) {
    throw new Error("Unsupported game length.");
  }

  const pools = {
    easy: shuffle(bank.filter((question) => question.difficulty === "easy")),
    medium: shuffle(bank.filter((question) => question.difficulty === "medium")),
    hard: shuffle(bank.filter((question) => question.difficulty === "hard"))
  };

  Object.entries(mix).forEach(([difficulty, perTeamCount]) => {
    const needed = perTeamCount * playerCount;
    if (pools[difficulty].length < needed) {
      throw new Error(`Not enough ${difficulty} questions for this game.`);
    }
  });

  return Array.from({ length: playerCount }, () => {
    const teamQuestions = [];

    Object.entries(mix).forEach(([difficulty, count]) => {
      teamQuestions.push(...pools[difficulty].splice(0, count));
    });

    return shuffle(teamQuestions).map((question) => ({
      ...question,
      shuffledChoices: shuffle(question.choices)
    }));
  });
}

function createTurnSequence(teamQuestionSets, questionsPerTeam) {
  const sequence = [];

  for (let questionIndex = 0; questionIndex < questionsPerTeam; questionIndex += 1) {
    teamQuestionSets.forEach((questions, teamIndex) => {
      sequence.push({
        teamIndex,
        teamQuestionNumber: questionIndex + 1,
        question: questions[questionIndex]
      });
    });
  }

  return sequence;
}

function buildGameState(settings) {
  const bank = GAME_CONFIG.questionBanks[settings.degree];
  const teamQuestionSets = prepareTeamQuestionSets(
    bank,
    settings.players.length,
    settings.questionsPerTeam
  );

  return {
    degree: settings.degree,
    questionsPerTeam: settings.questionsPerTeam,
    players: settings.players.map((player) => ({ ...player, score: 0 })),
    turns: createTurnSequence(teamQuestionSets, settings.questionsPerTeam),
    currentTurnIndex: 0,
    answerLocked: false
  };
}

function startGameFromSetup(event) {
  event.preventDefault();

  const degree = elements.setupForm.elements.degree.value;
  const questionsPerTeam = getSelectedNumber("questions-per-team");
  const players = getPlayersFromSetup();

  gameState = buildGameState({ degree, questionsPerTeam, players });
  showScreen("question");
  renderCurrentTurn();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartSameGame() {
  const settings = {
    degree: gameState.degree,
    questionsPerTeam: gameState.questionsPerTeam,
    players: gameState.players.map(({ id, name }) => ({ id, name, score: 0 }))
  };

  gameState = buildGameState(settings);
  showScreen("question");
  renderCurrentTurn();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderScoreboard(activeTeamIndex = null) {
  elements.scoreboard.replaceChildren();

  gameState.players.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "score-card";
    if (index === activeTeamIndex) card.classList.add("active");

    const name = document.createElement("span");
    name.className = "score-name";
    name.textContent = player.name;

    const score = document.createElement("strong");
    score.className = "score-value";
    score.textContent = String(player.score);

    card.append(name, score);
    elements.scoreboard.append(card);
  });
}

function renderCurrentTurn() {
  const turn = gameState.turns[gameState.currentTurnIndex];
  const player = gameState.players[turn.teamIndex];
  const questionNumber = gameState.currentTurnIndex + 1;
  const totalQuestions = gameState.turns.length;

  gameState.answerLocked = false;
  renderScoreboard(turn.teamIndex);

  elements.turnName.textContent = player.name;
  elements.progressText.textContent = `Question ${questionNumber} of ${totalQuestions}`;
  elements.teamProgressText.textContent = `${player.name}: ${turn.teamQuestionNumber} of ${gameState.questionsPerTeam}`;
  elements.progressBar.style.width = `${(questionNumber / totalQuestions) * 100}%`;
  elements.questionText.textContent = turn.question.question;
  elements.answerFeedback.hidden = true;
  elements.answerFeedback.className = "answer-feedback";
  elements.answerFeedback.textContent = "";
  elements.continueButton.hidden = true;
  elements.answerList.replaceChildren();

  turn.question.shuffledChoices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.choice = choice;

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = choice;

    button.append(letter, text);
    button.addEventListener("click", () => submitAnswer(choice));
    elements.answerList.append(button);
  });

  elements.questionText.focus({ preventScroll: true });
}

function submitAnswer(selectedChoice) {
  if (gameState.answerLocked) return;
  gameState.answerLocked = true;

  const turn = gameState.turns[gameState.currentTurnIndex];
  const question = turn.question;
  const player = gameState.players[turn.teamIndex];
  const isCorrect = selectedChoice === question.correctAnswer;

  if (isCorrect) {
    player.score += 1;
  }

  [...elements.answerList.querySelectorAll(".answer-button")].forEach((button) => {
    button.disabled = true;
    if (button.dataset.choice === question.correctAnswer) {
      button.classList.add("correct-answer");
    }
    if (!isCorrect && button.dataset.choice === selectedChoice) {
      button.classList.add("wrong-answer");
    }
  });

  renderScoreboard(turn.teamIndex);
  elements.answerFeedback.hidden = false;

  if (isCorrect) {
    elements.answerFeedback.classList.add("correct");
    elements.answerFeedback.textContent = `Correct! ${player.name} earns 1 point.`;
  } else {
    elements.answerFeedback.classList.add("incorrect");
    elements.answerFeedback.textContent = `Incorrect. The correct answer is: ${question.correctAnswer}`;
  }

  const isLastTurn = gameState.currentTurnIndex === gameState.turns.length - 1;
  elements.continueButton.textContent = isLastTurn
    ? "See Final Scores"
    : `Next: ${getNextPlayerName()}`;
  elements.continueButton.hidden = false;
  elements.continueButton.focus({ preventScroll: true });
}

function getNextPlayerName() {
  const nextTurn = gameState.turns[gameState.currentTurnIndex + 1];
  return gameState.players[nextTurn.teamIndex].name;
}

function continueGame() {
  if (!gameState.answerLocked) return;

  if (gameState.currentTurnIndex === gameState.turns.length - 1) {
    showResults();
    return;
  }

  gameState.currentTurnIndex += 1;
  renderCurrentTurn();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showResults() {
  const sorted = [...gameState.players].sort((a, b) => b.score - a.score || a.id - b.id);
  const topScore = sorted[0].score;
  const winners = sorted.filter((player) => player.score === topScore);

  if (winners.length === 1) {
    elements.winnerMessage.textContent = `${winners[0].name} wins with ${topScore} ${topScore === 1 ? "point" : "points"}!`;
  } else {
    const names = formatNameList(winners.map((player) => player.name));
    elements.winnerMessage.textContent = `Tie game: ${names} finished with ${topScore} ${topScore === 1 ? "point" : "points"} each.`;
  }

  renderFinalStandings(sorted);
  showScreen("results");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function formatNameList(names) {
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

function renderFinalStandings(sortedPlayers) {
  elements.finalStandings.replaceChildren();
  let previousScore = null;
  let displayedRank = 0;

  sortedPlayers.forEach((player, index) => {
    if (player.score !== previousScore) {
      displayedRank = index + 1;
      previousScore = player.score;
    }

    const row = document.createElement("div");
    row.className = "standing-row";

    const rank = document.createElement("span");
    rank.className = "standing-rank";
    rank.textContent = `#${displayedRank}`;

    const name = document.createElement("span");
    name.className = "standing-name";
    name.textContent = player.name;

    const score = document.createElement("span");
    score.className = "standing-score";
    score.textContent = `${player.score} / ${gameState.questionsPerTeam}`;

    row.append(rank, name, score);
    elements.finalStandings.append(row);
  });
}

function returnToSetup() {
  showScreen("setup");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function validateQuestionBanks() {
  Object.entries(GAME_CONFIG.questionBanks).forEach(([name, bank]) => {
    if (!Array.isArray(bank) || bank.length === 0) {
      throw new Error(`${name} question bank is unavailable.`);
    }
  });
}

validateQuestionBanks();
renderTeamNameFields();
updateGameSizeSummary();

elements.setupForm.addEventListener("change", (event) => {
  if (event.target.name === "player-count") {
    renderTeamNameFields();
  }

  if (event.target.name === "player-count" || event.target.name === "questions-per-team") {
    updateGameSizeSummary();
  }
});

elements.setupForm.addEventListener("submit", startGameFromSetup);
elements.continueButton.addEventListener("click", continueGame);
elements.playAgainButton.addEventListener("click", restartSameGame);
elements.changeSetupButton.addEventListener("click", returnToSetup);
