MASONICWORLD TEST BOILERPLATE
============================

WHAT THIS DOES
--------------

- Selects 10 questions from the chosen category.
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
questions.js   The question bank. This is where questions are added.
test.js        The reusable test program. Normally, this file is not edited.


ADDING A QUESTION
-----------------

Open questions.js and copy one complete question object. Change these fields:

id             A unique internal name, such as "world-001".
category       The subject category.
difficulty     Use "easy", "medium", or "hard".
question       The question shown to the visitor.
choices        Exactly four different possible answers.
correctAnswer  Must exactly match the correct choice above.
source         A private maintenance note identifying the source.
sourceUrl      A private maintenance link.
verified       The date the answer was last checked, written YYYY-MM-DD.

The source information stays in questions.js and is not displayed to visitors.


CHANGING THE TEST LENGTH
------------------------

Open test.js and change:

questionsPerTest: 10

For example, change 10 to 25 to give visitors 25 questions per test.

If you change the test length, also change the three numbers under
difficultyMix so they add up to the new test length.


CHANGING THE CATEGORY
---------------------

Open test.js and change:

category: "Freemasonry Around the World"

The text must exactly match the category used in questions.js. Later category
pages can all use the same program with a different category setting.


SHOWING ALL ANSWERS IN THE REVIEW
---------------------------------

The normal setting reviews only missed questions. To review every answer, open
test.js and change:

reviewCorrectAnswers: false

to:

reviewCorrectAnswers: true


USING IT ON MASONICWORLD
------------------------

Keep all four files together in the same website folder. Open index.html in a
browser to test it. The header and footer are intentionally simple so they can
be replaced with the normal MasonicWorld navigation and footer later.


CURRENT QUESTION BANK
---------------------

The included 50 questions form the complete Freemasonry Around the World bank:

- 25 easy
- 15 medium
- 10 hard

They should still receive John's final editorial review before publication.
