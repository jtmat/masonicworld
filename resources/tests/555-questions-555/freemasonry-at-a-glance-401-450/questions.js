/*
  FREEMASONRY AT A GLANCE - QUESTIONS 401-450

  Source: Reynold E. Blight, Freemasonry at a Glance: Answers to 555 Questions.
  The sourceQuestionNumber and sourcePage fields are private maintenance notes.
  Wording has been modernized, and disputed, legendary, subjective, or dated
  statements are attributed or corrected where appropriate.
*/

const QUESTION_BANK = [
  {
    id: "book-401", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Who delivered the recorded Masonic sermon 'Brotherly Love Recommended' in Boston in December 1749?",
    choices: ["The Rev. Charles Brockwell", "John Theophilus Desaguliers", "William Preston", "Joseph Fort Newton"], correctAnswer: "The Rev. Charles Brockwell",
    sourceQuestionNumber: 401, sourcePage: 49, source: "Freemasonry at a Glance, question 401, printed page 49; claim of absolute priority avoided"
  },
  {
    id: "book-402", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Whom did older Masonic writers identify as the earliest Masonic poet?",
    choices: ["George Wither", "Robert Burns", "Edwin Markham", "Johann Wolfgang von Goethe"], correctAnswer: "George Wither",
    sourceQuestionNumber: 402, sourcePage: 49, source: "Freemasonry at a Glance, question 402, printed page 49; subjective historical claim attributed"
  },
  {
    id: "book-403", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "When was the first Freemasons' Hall in London dedicated?",
    choices: ["May 23, 1776", "June 24, 1717", "December 27, 1813", "April 13, 1733"], correctAnswer: "May 23, 1776",
    sourceQuestionNumber: 403, sourcePage: 49, source: "Freemasonry at a Glance, question 403, printed page 49; location clarified"
  },
  {
    id: "book-404", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "In what year was the first general Masonic charity fund established in England?",
    choices: ["1724", "1717", "1751", "1776"], correctAnswer: "1724",
    sourceQuestionNumber: 404, sourcePage: 49, source: "Freemasonry at a Glance, question 404, printed page 49; scope clarified"
  },
  {
    id: "book-405", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Who is traditionally credited as the first Provincial Grand Master to serve in New England?",
    choices: ["Henry Price", "Daniel Coxe", "Benjamin Franklin", "John Theophilus Desaguliers"], correctAnswer: "Henry Price",
    sourceQuestionNumber: 405, sourcePage: 49, source: "Freemasonry at a Glance, question 405, printed page 49; Daniel Coxe's earlier appointment distinguished from Price's service"
  },
  {
    id: "book-406", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "In which American city was an early purpose-built Masonic hall erected in 1734?",
    choices: ["Philadelphia", "Boston", "New York", "Charleston"], correctAnswer: "Philadelphia",
    sourceQuestionNumber: 406, sourcePage: 49, source: "Freemasonry at a Glance, question 406, printed page 49; broad priority claim softened"
  },
  {
    id: "book-407", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Which title did an older account identify as an early American Masonic magazine?",
    choices: ["The Freemason's Magazine & General Miscellany", "The Builder", "The Philalethes", "The Short Talk Bulletin"], correctAnswer: "The Freemason's Magazine & General Miscellany",
    sourceQuestionNumber: 407, sourcePage: 49, source: "Freemasonry at a Glance, question 407, printed page 49; source gives 1811, but the priority and date are historically problematic, so the title is tested without repeating the claim"
  },
  {
    id: "book-408", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "In what year was the early Masonic hall in Philadelphia erected?",
    choices: ["1734", "1717", "1776", "1811"], correctAnswer: "1734",
    sourceQuestionNumber: 408, sourcePage: 49, source: "Freemasonry at a Glance, question 408, printed page 49; duplicate subject retained"
  },
  {
    id: "book-409", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Who delivered a recorded address before the Grand Lodge of England in June 1719?",
    choices: ["John Theophilus Desaguliers", "James Anderson", "Laurence Dermott", "William Preston"], correctAnswer: "John Theophilus Desaguliers",
    sourceQuestionNumber: 409, sourcePage: 49, source: "Freemasonry at a Glance, question 409, printed page 49; claim of absolute priority avoided"
  },
  {
    id: "book-410", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which Prussian king became a Freemason in 1738?",
    choices: ["Frederick the Great", "George III", "Louis XVI", "Joseph II"], correctAnswer: "Frederick the Great",
    sourceQuestionNumber: 410, sourcePage: 50, source: "Freemasonry at a Glance, question 410, printed page 50; kingdom identified accurately as Prussia"
  },
  {
    id: "book-411", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Which Methodist brothers did some older Masonic accounts claim were Freemasons?",
    choices: ["John and Samuel Wesley", "Charles and John Brockwell", "George and Robert Burns", "William and James Preston"], correctAnswer: "John and Samuel Wesley",
    sourceQuestionNumber: 411, sourcePage: 50, source: "Freemasonry at a Glance, question 411, printed page 50; membership claims are disputed and therefore attributed"
  },
  {
    id: "book-412", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which Scottish poet is often called the poet laureate of Freemasonry?",
    choices: ["Robert Burns", "Walter Scott", "Robert Louis Stevenson", "Thomas Campbell"], correctAnswer: "Robert Burns",
    sourceQuestionNumber: 412, sourcePage: 50, source: "Freemasonry at a Glance, question 412, printed page 50"
  },
  {
    id: "book-413", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Which statement accurately summarizes Robert Burns's Masonic life?",
    choices: ["He was initiated in 1781, served as a lodge Master, and wrote Masonic songs", "He founded the first Grand Lodge in Scotland in 1717", "He wrote Morals and Dogma and led the Scottish Rite", "He designed Freemasons' Hall in London"], correctAnswer: "He was initiated in 1781, served as a lodge Master, and wrote Masonic songs",
    sourceQuestionNumber: 413, sourcePage: 50, source: "Freemasonry at a Glance, question 413, printed page 50; death date error omitted and biographical wording condensed"
  },
  {
    id: "book-414", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Who was Albert Pike?",
    choices: ["A Masonic scholar, author, and longtime Scottish Rite leader", "A French founder of Co-Masonry", "A German poet who wrote Faust", "An Arctic explorer and naval officer"], correctAnswer: "A Masonic scholar, author, and longtime Scottish Rite leader",
    sourceQuestionNumber: 414, sourcePage: 50, source: "Freemasonry at a Glance, question 414, printed page 50"
  },
  {
    id: "book-415", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which Masonic work is most closely associated with Albert Pike?",
    choices: ["Morals and Dogma", "The Builders", "Ahiman Rezon", "Freemasonry at a Glance"], correctAnswer: "Morals and Dogma",
    sourceQuestionNumber: 415, sourcePage: 50, source: "Freemasonry at a Glance, question 415, printed page 50; avoided describing the work as the universal Scottish Rite textbook"
  },
  {
    id: "book-416", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Who was William Preston?",
    choices: ["An influential Masonic lecturer and ritualist born in Edinburgh", "The first Grand Master to serve in New England", "The founder of Le Droit Humain", "A Prussian king initiated in 1738"], correctAnswer: "An influential Masonic lecturer and ritualist born in Edinburgh",
    sourceQuestionNumber: 416, sourcePage: 50, source: "Freemasonry at a Glance, question 416, printed page 50"
  },
  {
    id: "book-417", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which German author of Faust became a Freemason in 1780?",
    choices: ["Johann Wolfgang von Goethe", "Friedrich Schiller", "Gotthold Ephraim Lessing", "Joseph Findel"], correctAnswer: "Johann Wolfgang von Goethe",
    sourceQuestionNumber: 417, sourcePage: 50, source: "Freemasonry at a Glance, question 417, printed page 50; full name supplied"
  },
  {
    id: "book-418", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which other German poet was sometimes included in older lists of famous Freemasons?",
    choices: ["Friedrich Schiller", "Heinrich Heine", "Rainer Maria Rilke", "Bertolt Brecht"], correctAnswer: "Friedrich Schiller",
    sourceQuestionNumber: 418, sourcePage: 51, source: "Freemasonry at a Glance, question 418, printed page 51; Schiller's membership is not securely established, so the claim is attributed"
  },
  {
    id: "book-419", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "On whose funeral car reportedly appeared statements about self-government and dethroning tyrants?",
    choices: ["Voltaire", "Goethe", "Frederick the Great", "Victor Hugo"], correctAnswer: "Voltaire",
    sourceQuestionNumber: 419, sourcePage: 51, source: "Freemasonry at a Glance, question 419, printed page 51; anecdote qualified"
  },
  {
    id: "book-420", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Who was Joseph Findel?",
    choices: ["A nineteenth-century German Masonic historian", "A French senator who founded Co-Masonry", "A Scottish poet and lodge Master", "An American Arctic explorer"], correctAnswer: "A nineteenth-century German Masonic historian",
    sourceQuestionNumber: 420, sourcePage: 51, source: "Freemasonry at a Glance, question 420, printed page 51; surname spelling corrected from Findell"
  },
  {
    id: "book-421", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Which group consists of Arctic explorers identified in Masonic records as Freemasons?",
    choices: ["Elisha Kent Kane, Robert E. Peary, and Donald B. MacMillan", "Roald Amundsen, Robert Scott, and Ernest Shackleton", "Fridtjof Nansen, James Cook, and Henry Hudson", "Matthew Henson, John Franklin, and Vitus Bering"], correctAnswer: "Elisha Kent Kane, Robert E. Peary, and Donald B. MacMillan",
    sourceQuestionNumber: 421, sourcePage: 51, source: "Freemasonry at a Glance, question 421, printed page 51; lodge-number details omitted"
  },
  {
    id: "book-422", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Which group is composed of American naval figures traditionally listed as Freemasons?",
    choices: ["David Farragut, Stephen Decatur, John Paul Jones, and James Lawrence", "Robert Peary, Donald MacMillan, Elisha Kane, and William Cody", "George Washington, Andrew Jackson, James Monroe, and Mark Twain", "John Wesley, Samuel Wesley, Robert Burns, and Goethe"], correctAnswer: "David Farragut, Stephen Decatur, John Paul Jones, and James Lawrence",
    sourceQuestionNumber: 422, sourcePage: 51, source: "Freemasonry at a Glance, question 422, printed page 51; list shortened while retaining the subject"
  },
  {
    id: "book-423", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which group contains American authors and poets who were Freemasons?",
    choices: ["Lew Wallace, Edwin Markham, and Mark Twain", "Victor Hugo, Tolstoy, and Goethe", "Robert Burns, Schiller, and Voltaire", "William Preston, Albert Pike, and Henry Price"], correctAnswer: "Lew Wallace, Edwin Markham, and Mark Twain",
    sourceQuestionNumber: 423, sourcePage: 51, source: "Freemasonry at a Glance, question 423, printed page 51"
  },
  {
    id: "book-424", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which famous scout known as Buffalo Bill was a Freemason?",
    choices: ["William F. Cody", "Kit Carson", "Wild Bill Hickok", "Daniel Boone"], correctAnswer: "William F. Cody",
    sourceQuestionNumber: 424, sourcePage: 51, source: "Freemasonry at a Glance, question 424, printed page 51; incomplete lodge citation omitted"
  },
  {
    id: "book-425", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which American actor associated with Rip Van Winkle was a Freemason?",
    choices: ["Joseph Jefferson", "Edwin Booth", "John Wilkes Booth", "Douglas Fairbanks"], correctAnswer: "Joseph Jefferson",
    sourceQuestionNumber: 425, sourcePage: 51, source: "Freemasonry at a Glance, question 425, printed page 51; corrected occupation from author to actor"
  },
  {
    id: "book-426", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Who was Edwin Booth?",
    choices: ["A celebrated American Shakespearean actor and Freemason", "A German Masonic historian", "A French writer and senator", "An American naval officer and explorer"], correctAnswer: "A celebrated American Shakespearean actor and Freemason",
    sourceQuestionNumber: 426, sourcePage: 51, source: "Freemasonry at a Glance, question 426, printed page 51; corrected nationality from English to American"
  },
  {
    id: "book-427", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "For what is Albert G. Mackey best known in Masonic literature?",
    choices: ["Writing an influential Encyclopedia of Freemasonry", "Composing The Magic Flute", "Founding Le Droit Humain", "Delivering the 1749 Boston sermon"], correctAnswer: "Writing an influential Encyclopedia of Freemasonry",
    sourceQuestionNumber: 427, sourcePage: 51, source: "Freemasonry at a Glance, question 427, printed page 51"
  },
  {
    id: "book-428", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which Russian novelist described a Masonic initiation in War and Peace?",
    choices: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"], correctAnswer: "Leo Tolstoy",
    sourceQuestionNumber: 428, sourcePage: 52, source: "Freemasonry at a Glance, question 428, printed page 52; OCR corrected"
  },
  {
    id: "book-429", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Which British military leader held senior Masonic office in Egypt and the Sudan and earlier in the Punjab?",
    choices: ["Lord Kitchener", "Lord Nelson", "the Duke of Wellington", "Field Marshal Montgomery"], correctAnswer: "Lord Kitchener",
    sourceQuestionNumber: 429, sourcePage: 52, source: "Freemasonry at a Glance, question 429, printed page 52; title of office generalized because exact jurisdictional wording varies"
  },
  {
    id: "book-430", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Which French writer was sometimes included in older lists of famous Freemasons?",
    choices: ["Victor Hugo", "Alexandre Dumas", "Émile Zola", "Honoré de Balzac"], correctAnswer: "Victor Hugo",
    sourceQuestionNumber: 430, sourcePage: 52, source: "Freemasonry at a Glance, question 430, printed page 52; Hugo's membership is disputed, so the claim is attributed"
  },
  {
    id: "book-431", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Which Freemason is commonly credited with the observation that talent develops in solitude but character is created in society?",
    choices: ["Goethe", "Albert Pike", "Robert Burns", "Voltaire"], correctAnswer: "Goethe",
    sourceQuestionNumber: 431, sourcePage: 52, source: "Freemasonry at a Glance, question 431, printed page 52; quotation paraphrased and attribution qualified"
  },
  {
    id: "book-432", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Who wrote the Masonic classic The Builders?",
    choices: ["Joseph Fort Newton", "Albert Pike", "William Preston", "Albert G. Mackey"], correctAnswer: "Joseph Fort Newton",
    sourceQuestionNumber: 432, sourcePage: 52, source: "Freemasonry at a Glance, question 432, printed page 52"
  },
  {
    id: "book-433", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "hard",
    question: "Whom did many older Masonic writers praise as the greatest Masonic scholar of all time?",
    choices: ["Albert Pike", "William Preston", "Albert G. Mackey", "Joseph Findel"], correctAnswer: "Albert Pike",
    sourceQuestionNumber: 433, sourcePage: 52, source: "Freemasonry at a Glance, question 433, printed page 52; subjective judgment attributed"
  },
  {
    id: "book-434", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which world-renowned American humorist belonged to Polar Star Lodge No. 79 in Missouri?",
    choices: ["Mark Twain", "Will Rogers", "Artemus Ward", "James Thurber"], correctAnswer: "Mark Twain",
    sourceQuestionNumber: 434, sourcePage: 52, source: "Freemasonry at a Glance, question 434, printed page 52"
  },
  {
    id: "book-435", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which well-known opera with Masonic themes was composed by Mozart?",
    choices: ["The Magic Flute", "Don Giovanni", "The Marriage of Figaro", "Così fan tutte"], correctAnswer: "The Magic Flute",
    sourceQuestionNumber: 435, sourcePage: 52, source: "Freemasonry at a Glance, question 435, printed page 52; wording refined"
  },
  {
    id: "book-436", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Which American poet, though not known for a specifically Masonic poem, is often quoted by Masonic speakers and writers?",
    choices: ["Edwin Markham", "Henry Wadsworth Longfellow", "Walt Whitman", "Robert Frost"], correctAnswer: "Edwin Markham",
    sourceQuestionNumber: 436, sourcePage: 52, source: "Freemasonry at a Glance, question 436, printed page 52"
  },
  {
    id: "book-437", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "hard",
    question: "Who wrote the line 'The Masons' ways are a type of existence'?",
    choices: ["Goethe", "Robert Burns", "Albert Pike", "Joseph Fort Newton"], correctAnswer: "Goethe",
    sourceQuestionNumber: 437, sourcePage: 52, source: "Freemasonry at a Glance, question 437, printed page 52"
  },
  {
    id: "book-438", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Which noted horticulturist was raised in Santa Rosa Lodge No. 57 in California in 1921?",
    choices: ["Luther Burbank", "George Washington Carver", "Gregor Mendel", "John Muir"], correctAnswer: "Luther Burbank",
    sourceQuestionNumber: 438, sourcePage: 52, source: "Freemasonry at a Glance, question 438, printed page 52"
  },
  {
    id: "book-439", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Were women traditionally admitted to regular, male Craft Freemasonry?",
    choices: ["No, although a few exceptional or disputed historical cases are recorded", "Yes, from the founding of the first Grand Lodge", "Yes, but only as lodge officers", "No, and no historical exceptions have ever been claimed"], correctAnswer: "No, although a few exceptional or disputed historical cases are recorded",
    sourceQuestionNumber: 439, sourcePage: 53, source: "Freemasonry at a Glance, question 439, printed page 53; absolute denial corrected to acknowledge exceptional historical accounts"
  },
  {
    id: "book-440", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "hard",
    question: "Why do traditional regular male Grand Lodges not admit women?",
    choices: ["Their constitutions, landmarks, and inherited Craft tradition define membership as male", "Women are barred by civil law in every country", "The first Grand Lodge issued a temporary ban that has never expired", "Co-Masonry holds exclusive authority to initiate women"], correctAnswer: "Their constitutions, landmarks, and inherited Craft tradition define membership as male",
    sourceQuestionNumber: 440, sourcePage: 53, source: "Freemasonry at a Glance, question 440, printed page 53; institutional explanation stated without endorsement"
  },
  {
    id: "book-441", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "hard",
    question: "According to the nineteenth-century writer François-Timoléon Bègue Clavel, about when did 'female Masonry' appear in France?",
    choices: ["About 1730", "About 1680", "About 1813", "About 1893"], correctAnswer: "About 1730",
    sourceQuestionNumber: 441, sourcePage: 53, source: "Freemasonry at a Glance, question 441, printed page 53; Clavel identified more precisely and claim attributed"
  },
  {
    id: "book-442", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "hard",
    question: "What was the Ordre des Félicitaires, established in France in 1743?",
    choices: ["An early mixed or 'adoptive' society using nautical degrees", "A regular English Grand Lodge", "An American order for the families of Masons", "A Scottish Rite Supreme Council"], correctAnswer: "An early mixed or 'adoptive' society using nautical degrees",
    sourceQuestionNumber: 442, sourcePage: 53, source: "Freemasonry at a Glance, question 442, printed page 53; dated terminology modernized and French accents restored"
  },
  {
    id: "book-443", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "hard",
    question: "Which French Masonic body placed Lodges of Adoption under its protection in 1774?",
    choices: ["The Grand Orient of France", "The United Grand Lodge of England", "The Grand Lodge of Ireland", "The Supreme Council, Southern Jurisdiction"], correctAnswer: "The Grand Orient of France",
    sourceQuestionNumber: 443, sourcePage: 53, source: "Freemasonry at a Glance, question 443, printed page 53; later repudiation remains in maintenance note"
  },
  {
    id: "book-444", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "hard",
    question: "How did the historical Rite of Adoption differ from regular Craft Freemasonry?",
    choices: ["It borrowed some terminology but used substantially different rituals, signs, words, and tokens", "It was identical in ritual and governance", "It admitted only ordained clergy", "It consisted solely of lectures without ceremonies"], correctAnswer: "It borrowed some terminology but used substantially different rituals, signs, words, and tokens",
    sourceQuestionNumber: 444, sourcePage: 53, source: "Freemasonry at a Glance, question 444, printed page 53; judgmental 'true Masonry' wording replaced with a factual comparison"
  },
  {
    id: "book-445", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "medium",
    question: "Which Irish woman is traditionally known as the 'Lady Freemason'?",
    choices: ["Elizabeth St. Leger Aldworth", "Maria Deraismes", "Annie Besant", "Mrs. Beaton"], correctAnswer: "Elizabeth St. Leger Aldworth",
    sourceQuestionNumber: 445, sourcePage: 53, source: "Freemasonry at a Glance, question 445, printed pages 53-54; source's date around 1735 corrected by omitting it because modern accounts generally place the event around 1710-1712"
  },
  {
    id: "book-446", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "hard",
    question: "Who was Mrs. Beaton in Masonic legend?",
    choices: ["A Norfolk woman said to have overheard lodge proceedings while hidden in wall paneling", "The co-founder of Le Droit Humain", "The first Grand Mistress of an English women's lodge", "The author of The Builders"], correctAnswer: "A Norfolk woman said to have overheard lodge proceedings while hidden in wall paneling",
    sourceQuestionNumber: 446, sourcePage: 54, source: "Freemasonry at a Glance, question 446, printed page 54; anecdote explicitly framed as legend"
  },
  {
    id: "book-447", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "hard",
    question: "In which state did a Grand Master reportedly forbid Master Masons from joining the Order of the Eastern Star?",
    choices: ["Pennsylvania", "Massachusetts", "Virginia", "California"], correctAnswer: "Pennsylvania",
    sourceQuestionNumber: 447, sourcePage: 54, source: "Freemasonry at a Glance, question 447, printed page 54; undated jurisdictional claim qualified as reported"
  },
  {
    id: "book-448", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "What is Co-Masonry?",
    choices: ["A form of Freemasonry that admits both men and women", "A system permitting two Grand Masters in one jurisdiction", "A lodge jointly chartered by England and Scotland", "A Masonic charity operated by two lodges"], correctAnswer: "A form of Freemasonry that admits both men and women",
    sourceQuestionNumber: 448, sourcePage: 54, source: "Freemasonry at a Glance, question 448, printed page 54; neutral modern definition used"
  },
  {
    id: "book-449", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "easy",
    question: "Is Co-Masonry recognized as regular by mainstream U.S. Grand Lodges?",
    choices: ["No", "Yes, by every U.S. Grand Lodge", "Yes, but only in Pennsylvania", "Only during international meetings"], correctAnswer: "No",
    sourceQuestionNumber: 449, sourcePage: 54, source: "Freemasonry at a Glance, question 449, printed page 54; recognition framework clarified"
  },
  {
    id: "book-450", category: "Masonic Firsts, Famous Masons, Women and Co-Masonry", difficulty: "hard",
    question: "What approximate worldwide total of Co-Masonic lodges was reported in an older historical estimate?",
    choices: ["About 600", "About 60", "About 6,000", "About 60,000"], correctAnswer: "About 600",
    sourceQuestionNumber: 450, sourcePage: 54, source: "Freemasonry at a Glance, question 450, printed page 54; dated count explicitly framed as an older estimate"
  }
];
