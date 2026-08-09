MASONICWORLD FELLOW CRAFT TEST - SET 3
=====================================

WHAT THIS DOES
--------------

- Selects 10 questions from a 50-question Fellow Craft bank.
- Selects 5 easy, 3 medium, and 2 hard questions for each test.
- Shuffles the order of the selected questions.
- Shuffles the four answers for every question.
- Shows one question at a time.
- Allows the visitor to move backward and change an answer.
- Shows the final score and reviews missed questions.
- Creates a different test when "Take Another Test" is selected.
- Works as ordinary static HTML, CSS, and JavaScript. No database is needed.


FILES
-----

index.html     The test page.
styles.css     The appearance of the test.
questions.js   The 50-question Fellow Craft bank (questions 101-150).
test.js        The reusable test program.


QUESTION BANK
-------------

The bank contains:

- 25 easy questions
- 15 medium questions
- 10 hard questions

The principal source is Oliver Day Street's Symbolism of the Three Degrees,
Part Two: The Fellow Craft Degree. Source content-page references are retained
in the private source fields inside questions.js. Visible questions are written
as natural standalone questions.

Historical chronologies, architectural theories, and legendary traditions are
identified as such in the visible wording or private maintenance notes. They
are not presented as settled historical facts.


CHANGING THE TEST LENGTH
------------------------

Open test.js and change:

questionsPerTest: 10

If the test length is changed, also change the three numbers under
difficultyMix so they add up to the new test length.


SHOWING ALL ANSWERS IN THE REVIEW
---------------------------------

The normal setting reviews only missed questions. To review every answer,
change reviewCorrectAnswers in test.js from false to true.


USING IT ON MASONICWORLD
------------------------

Keep all four website files together in the same folder. Open index.html in a
browser to test it. The header and footer can later be replaced with the normal
MasonicWorld navigation and footer.
