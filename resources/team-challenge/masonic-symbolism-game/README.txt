MASONICWORLD - MASONIC SYMBOLISM CHALLENGE
==========================================

WHAT THIS IS
------------

A simple browser-based game for 2, 3, or 4 players or teams using the
MasonicWorld Symbolism of the Three Degrees question banks.

No database, account, server-side code, or networked player devices are needed.
Open index.html in a browser and play on one computer or projector.


GAME OPTIONS
------------

Question bank:
- Entered Apprentice only (220 questions)
- Fellow Craft only (150 questions)
- Master Mason only (200 questions)
- All Three Degrees (570 questions)

Players / teams:
- 2
- 3
- 4

Questions per team:
- 10
- 15
- 20
- 25

The largest game is 4 teams x 25 questions = 100 total questions.
No question repeats within a single game.


SCORING
-------

- Teams take turns.
- A correct answer earns 1 point.
- An incorrect answer earns 0 points.
- The correct answer is shown immediately after each response.
- The running scoreboard remains visible throughout the game.
- Final standings are shown at the end.
- If teams finish with the same top score, the game reports a tie. There is no
  sudden-death round in this first version.


DIFFICULTY BALANCE
------------------

Each team receives approximately the same 50% easy / 30% medium / 20% hard mix.

10 questions: 5 easy, 3 medium, 2 hard
15 questions: 8 easy, 4 medium, 3 hard
20 questions: 10 easy, 6 medium, 4 hard
25 questions: 13 easy, 7 medium, 5 hard

Questions are selected randomly and answer order is shuffled for every game.


FILES
-----

index.html          Game page
styles.css          Game appearance
game.js             Game logic
questions-ea.js     Consolidated Entered Apprentice question bank
questions-fc.js     Consolidated Fellow Craft question bank
questions-mm.js     Consolidated Master Mason question bank

All files should remain together in the same folder.


QUESTION SOURCES
----------------

The question objects were consolidated directly from the existing MasonicWorld
question-bank files supplied for this build. Private maintenance fields such as
source, sourcePage, sourcePrompt, sourceUrl, and verified remain in the question
files but are not displayed to players.


TESTING
-------

1. Keep all six files together.
2. Open index.html in a browser.
3. Try each degree option.
4. Try 2, 3, and 4 teams.
5. Try the 10- and 25-question game lengths.
6. Verify correct answers add one point and incorrect answers do not.
7. Finish a short game and confirm the final standings.

For website deployment, upload the complete folder and link to index.html.
