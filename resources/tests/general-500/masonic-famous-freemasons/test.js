"use strict";

const TEST_CONFIG = {
  questionsPerTest: 10,
  category: "Famous Freemasons",
  difficultyMix: {
    easy: 5,
    medium: 3,
    hard: 2
  },
  reviewCorrectAnswers: false
};

const screens = {
  start: document.getElementById("start-screen"),
  question: document.getElementById("question-screen"),
  results: document.getElementById("results-screen")
};

const elements = {
  questionCount: document.getElementById("question-count"),
  startButton: document.getElementById("start-button"),
  progressText: document.getElementById("progress-text"),
  answeredText: document.getElementById("answered-text"),
  progressBar: document.getElementById("progress-bar"),
  questionText: document.getElementById("question-text"),
  answerList: document.getElementById("answer-list"),
  previousButton: document.getElementById("previous-button"),
  nextButton: document.getElementById("next-button"),
  scorePercent: document.getElementById("score-percent"),
  scoreText: document.getElementById("score-text"),
  resultMessage: document.getElementById("result-message"),
  reviewSection: document.getElementById("review-section"),
  retakeButton: document.getElementById("retake-button")
};

let testQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswers = {};

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function prepareQuestions() {
  const categoryQuestions = QUESTION_BANK.filter(
    (question) => !TEST_CONFIG.category || question.category === TEST_CONFIG.category
  );
  const selectedQuestions = [];

  Object.entries(TEST_CONFIG.difficultyMix).forEach(([difficulty, count]) => {
    const matchingQuestions = categoryQuestions.filter(
      (question) => question.difficulty === difficulty
    );
    selectedQuestions.push(...shuffle(matchingQuestions).slice(0, count));
  });

  if (selectedQuestions.length < TEST_CONFIG.questionsPerTest) {
    const selectedIds = new Set(selectedQuestions.map((question) => question.id));
    const remainingQuestions = categoryQuestions.filter(
      (question) => !selectedIds.has(question.id)
    );
    const numberStillNeeded = TEST_CONFIG.questionsPerTest - selectedQuestions.length;
    selectedQuestions.push(...shuffle(remainingQuestions).slice(0, numberStillNeeded));
  }

  return shuffle(selectedQuestions)
    .slice(0, TEST_CONFIG.questionsPerTest)
    .map((question) => ({
      ...question,
      shuffledChoices: shuffle(question.choices)
    }));
}

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, screen]) => {
    screen.hidden = name !== screenName;
  });
}

function startTest() {
  testQuestions = prepareQuestions();
  currentQuestionIndex = 0;
  selectedAnswers = {};
  showScreen("question");
  renderQuestion();
  screens.question.focus?.();
}

function renderQuestion() {
  const question = testQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[question.id];
  const questionNumber = currentQuestionIndex + 1;
  const answeredCount = Object.keys(selectedAnswers).length;

  elements.progressText.textContent = `Question ${questionNumber} of ${testQuestions.length}`;
  elements.answeredText.textContent = `${answeredCount} answered`;
  elements.progressBar.style.width = `${(questionNumber / testQuestions.length) * 100}%`;
  elements.questionText.textContent = question.question;
  elements.answerList.replaceChildren();

  question.shuffledChoices.forEach((choice, choiceIndex) => {
    const label = document.createElement("label");
    label.className = "answer-option";

    if (selectedAnswer === choice) {
      label.classList.add("selected");
    }

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = choice;
    input.checked = selectedAnswer === choice;
    input.setAttribute("aria-label", `Choice ${choiceIndex + 1}: ${choice}`);
    input.addEventListener("change", () => selectAnswer(question.id, choice));

    const answerText = document.createElement("span");
    answerText.textContent = choice;

    label.append(input, answerText);
    elements.answerList.append(label);
  });

  elements.previousButton.disabled = currentQuestionIndex === 0;
  elements.nextButton.disabled = !selectedAnswer;
  elements.nextButton.textContent = currentQuestionIndex === testQuestions.length - 1
    ? "Finish Test"
    : "Next Question";
}

function selectAnswer(questionId, choice) {
  selectedAnswers[questionId] = choice;
  renderQuestion();
}

function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
}

function goToNextQuestion() {
  const currentQuestion = testQuestions[currentQuestionIndex];

  if (!selectedAnswers[currentQuestion.id]) {
    return;
  }

  if (currentQuestionIndex === testQuestions.length - 1) {
    showResults();
    return;
  }

  currentQuestionIndex += 1;
  renderQuestion();
}

function showResults() {
  const correctCount = testQuestions.filter(
    (question) => selectedAnswers[question.id] === question.correctAnswer
  ).length;
  const percentage = Math.round((correctCount / testQuestions.length) * 100);

  elements.scorePercent.textContent = `${percentage}%`;
  elements.scoreText.textContent = `${correctCount} out of ${testQuestions.length} correct`;
  elements.resultMessage.textContent = getResultMessage(percentage);
  renderReview();
  showScreen("results");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getResultMessage(percentage) {
  if (percentage === 100) return "Excellent—every answer was correct.";
  if (percentage >= 80) return "Very good. You have a strong foundation in this subject.";
  if (percentage >= 60) return "Good effort. Review the missed questions and try again.";
  return "Keep learning. Review the answers below, then take another test.";
}

function renderReview() {
  const questionsToReview = TEST_CONFIG.reviewCorrectAnswers
    ? testQuestions
    : testQuestions.filter(
      (question) => selectedAnswers[question.id] !== question.correctAnswer
    );

  elements.reviewSection.replaceChildren();

  const heading = document.createElement("h2");
  heading.className = "review-heading";
  heading.textContent = questionsToReview.length === 0
    ? "No missed questions"
    : TEST_CONFIG.reviewCorrectAnswers
      ? "Answer Review"
      : "Review Missed Questions";
  elements.reviewSection.append(heading);

  if (questionsToReview.length === 0) {
    const perfectMessage = document.createElement("p");
    perfectMessage.textContent = "You answered every question correctly.";
    elements.reviewSection.append(perfectMessage);
    return;
  }

  const reviewList = document.createElement("div");
  reviewList.className = "review-list";

  questionsToReview.forEach((question) => {
    const userAnswer = selectedAnswers[question.id];
    const isCorrect = userAnswer === question.correctAnswer;
    const item = document.createElement("article");
    item.className = `review-item ${isCorrect ? "correct" : "incorrect"}`;

    const questionHeading = document.createElement("h3");
    questionHeading.textContent = question.question;

    const yourAnswer = document.createElement("p");
    yourAnswer.textContent = `Your answer: ${userAnswer}`;

    item.append(questionHeading, yourAnswer);

    if (!isCorrect) {
      const correctAnswer = document.createElement("p");
      correctAnswer.className = "review-answer";
      correctAnswer.textContent = `Correct answer: ${question.correctAnswer}`;
      item.append(correctAnswer);
    }

    reviewList.append(item);
  });

  elements.reviewSection.append(reviewList);
}

elements.questionCount.textContent = String(
  Math.min(
    TEST_CONFIG.questionsPerTest,
    QUESTION_BANK.filter(
      (question) => !TEST_CONFIG.category || question.category === TEST_CONFIG.category
    ).length
  )
);
elements.startButton.addEventListener("click", startTest);
elements.previousButton.addEventListener("click", goToPreviousQuestion);
elements.nextButton.addEventListener("click", goToNextQuestion);
elements.retakeButton.addEventListener("click", startTest);
