/*
  FREEMASONRY AT A GLANCE - QUESTIONS 201-250

  Source: Reynold E. Blight, Freemasonry at a Glance: Answers to 555 Questions.
  The sourceQuestionNumber and sourcePage fields are private maintenance notes.
  Wording has been lightly modernized, and historical, symbolic, religious, or
  jurisdiction-dependent statements are attributed where appropriate.
*/

const QUESTION_BANK = [
  {
    id: "book-201", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "May a Jewish candidate be obligated upon the Old Testament alone?",
    choices: ["Yes, in most jurisdictions", "No, never", "Only in an English Lodge", "Only if the King James Version is used"], correctAnswer: "Yes, in most jurisdictions",
    sourceQuestionNumber: 201, sourcePage: 25, source: "Freemasonry at a Glance, question 201, printed page 25; jurisdictional qualification retained"
  },
  {
    id: "book-202", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Is a Mason obligated to accept the Bible literally?",
    choices: ["No", "Yes, in every jurisdiction", "Only after becoming a Master Mason", "Only when serving as a Lodge officer"], correctAnswer: "No",
    sourceQuestionNumber: 202, sourcePage: 25, source: "Freemasonry at a Glance, question 202, printed page 25"
  },
  {
    id: "book-203", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "How is a Mason expected to accept the Bible?",
    choices: ["As a rule of life and a symbol of God's revelation to humanity", "As a literal history of Freemasonry", "As the only Volume of Sacred Law permitted", "As a replacement for personal conscience"], correctAnswer: "As a rule of life and a symbol of God's revelation to humanity",
    sourceQuestionNumber: 203, sourcePage: 26, source: "Freemasonry at a Glance, question 203, printed page 26"
  },
  {
    id: "book-204", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Where does the Bible traditionally rest in an English Lodge?",
    choices: ["On the Master's pedestal", "At the Senior Warden's station", "Beside the Tyler's sword", "Under the Junior Warden's column"], correctAnswer: "On the Master's pedestal",
    sourceQuestionNumber: 204, sourcePage: 26, source: "Freemasonry at a Glance, question 204, printed page 26; English Lodge practice specified"
  },
  {
    id: "book-205", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "Does Freemasonry teach that the Bible should be used as a textbook in public schools?",
    choices: ["No; Masons hold differing views on the issue", "Yes; it is an official Masonic position", "Only the King James Version should be used", "Only in schools operated by a Lodge"], correctAnswer: "No; Masons hold differing views on the issue",
    sourceQuestionNumber: 205, sourcePage: 26, source: "Freemasonry at a Glance, question 205, printed page 26"
  },
  {
    id: "book-206", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Does Freemasonry endorse the King James Version of the Bible over all other versions?",
    choices: ["No; it endorses no particular version", "Yes; it is the required version everywhere", "Only for Entered Apprentices", "Only in American Lodges"], correctAnswer: "No; it endorses no particular version",
    sourceQuestionNumber: 206, sourcePage: 26, source: "Freemasonry at a Glance, question 206, printed page 26"
  },
  {
    id: "book-207", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Is Freemasonry a religion?",
    choices: ["No; it uses religious ceremonies to teach morality but does not claim to be a religion", "Yes; it is a separate universal religion", "Yes; it is a branch of Christianity", "No; it rejects all religious ideas"], correctAnswer: "No; it uses religious ceremonies to teach morality but does not claim to be a religion",
    sourceQuestionNumber: 207, sourcePage: 26, source: "Freemasonry at a Glance, question 207, printed page 26"
  },
  {
    id: "book-208", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "What religious beliefs must a petitioner for the degrees of Freemasonry profess?",
    choices: ["Belief in God and in the immortality of the soul", "Adherence to one specified denomination", "Acceptance of the King James Version", "Belief in every doctrine of the Old Charges"], correctAnswer: "Belief in God and in the immortality of the soul",
    sourceQuestionNumber: 208, sourcePage: 26, source: "Freemasonry at a Glance, question 208, printed page 26; requirement may vary by jurisdiction"
  },
  {
    id: "book-209", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "Why does Freemasonry teach through symbols rather than only by direct instruction?",
    choices: ["To arouse curiosity, stimulate study, and express truths difficult to define in words", "To make its moral teachings deliberately impossible to understand", "To preserve operative construction secrets", "To eliminate the need for personal reflection"], correctAnswer: "To arouse curiosity, stimulate study, and express truths difficult to define in words",
    sourceQuestionNumber: 209, sourcePage: 26, source: "Freemasonry at a Glance, question 209, printed page 26"
  },
  {
    id: "book-210", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Must a Mason believe in a personal God?",
    choices: ["He must believe in Deity, but no specific theological profession is required", "Yes; he must accept one prescribed doctrine of God", "No; belief in any higher power is forbidden", "Only if he seeks a Lodge office"], correctAnswer: "He must believe in Deity, but no specific theological profession is required",
    sourceQuestionNumber: 210, sourcePage: 26, source: "Freemasonry at a Glance, question 210, printed page 26"
  },
  {
    id: "book-211", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "Does Freemasonry impose a doctrine concerning the personality of God?",
    choices: ["No; it imposes no theological doctrine, though fatherly mercy is implicit in its ritual", "Yes; it requires one precise theological definition", "No; its ritual contains no reference to Deity", "Yes; the doctrine is determined by each Worshipful Master"], correctAnswer: "No; it imposes no theological doctrine, though fatherly mercy is implicit in its ritual",
    sourceQuestionNumber: 211, sourcePage: 26, source: "Freemasonry at a Glance, question 211, printed page 26"
  },
  {
    id: "book-212", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Did early Freemasonry have distinctly Christian elements?",
    choices: ["Yes; the Old Charges commonly opened with a prayer to the Trinity", "No; Christianity was never mentioned", "Only after the twentieth century", "Only in continental European Lodges"], correctAnswer: "Yes; the Old Charges commonly opened with a prayer to the Trinity",
    sourceQuestionNumber: 212, sourcePage: 26, source: "Freemasonry at a Glance, question 212, printed page 26; historical wording clarified"
  },
  {
    id: "book-213", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "Why are distinctively Christian symbols generally absent from modern Craft Freemasonry?",
    choices: ["Because Freemasonry presents its philosophy, ethics, and religious teaching as universal", "Because all religious symbolism was abolished", "Because modern Freemasonry is based only on Greek mythology", "Because Christian Masons may not discuss their faith"], correctAnswer: "Because Freemasonry presents its philosophy, ethics, and religious teaching as universal",
    sourceQuestionNumber: 213, sourcePage: 27, source: "Freemasonry at a Glance, question 213, printed page 27; broad claim phrased in source context"
  },
  {
    id: "book-214", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Whom do the two parallel lines traditionally represent in Masonic symbolism?",
    choices: ["The Holy Saints John", "King Solomon and Hiram of Tyre", "Moses and Aaron", "The Senior and Junior Wardens"], correctAnswer: "The Holy Saints John",
    sourceQuestionNumber: 214, sourcePage: 27, source: "Freemasonry at a Glance, question 214, printed page 27"
  },
  {
    id: "book-215", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "Which meanings have been associated with the point within a circle?",
    choices: ["The universe, fertility, and Deity", "Only the four cardinal virtues", "The three principal officers", "The five orders of architecture"], correctAnswer: "The universe, fertility, and Deity",
    sourceQuestionNumber: 215, sourcePage: 27, source: "Freemasonry at a Glance, question 215, printed page 27; 'fecundity' modernized"
  },
  {
    id: "book-216", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "Which three schools of esoteric philosophy are said to have influenced Masonic thought?",
    choices: ["Hermeticism, Kabbalah, and Rosicrucianism", "Stoicism, Epicureanism, and Cynicism", "Platonism, Aristotelianism, and Skepticism", "Alchemy, astrology, and numerology"], correctAnswer: "Hermeticism, Kabbalah, and Rosicrucianism",
    sourceQuestionNumber: 216, sourcePage: 27, source: "Freemasonry at a Glance, question 216, printed page 27; spelling modernized"
  },
  {
    id: "book-217", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "What is Hermeticism in the Masonic interpretation presented here?",
    choices: ["A tradition associated with Hermes that used builders' tools as symbols of ethical truth", "A medieval guild system regulating stone prices", "A doctrine founded by the Brethren of the Rosy Cross", "A school devoted exclusively to Euclidean geometry"], correctAnswer: "A tradition associated with Hermes that used builders' tools as symbols of ethical truth",
    sourceQuestionNumber: 217, sourcePage: 27, source: "Freemasonry at a Glance, question 217, printed page 27; older historical description condensed"
  },
  {
    id: "book-218", category: "Masonic Belief, Ethics, and Origins", difficulty: "hard",
    question: "Which symbols are identified with Kabbalistic mysticism in this interpretation?",
    choices: ["The Lost Name, Solomon's Temple, and the Shekinah", "The compasses, trowel, and twenty-four-inch gauge", "The lion's paw, beehive, and anchor", "The rough ashlar, perfect ashlar, and trestleboard"], correctAnswer: "The Lost Name, Solomon's Temple, and the Shekinah",
    sourceQuestionNumber: 218, sourcePage: 27, source: "Freemasonry at a Glance, question 218, printed page 27; outdated account of Kabbalah's origin omitted"
  },
  {
    id: "book-219", category: "Masonic Belief, Ethics, and Origins", difficulty: "hard",
    question: "What is Rosicrucianism?",
    choices: ["A seventeenth-century system associated with the Brethren of the Rosy Cross that conveyed occult teachings through symbols", "An ancient Egyptian school founded by Euclid", "A medieval operative guild centered in Jerusalem", "A branch of Kabbalah founded by Plato"], correctAnswer: "A seventeenth-century system associated with the Brethren of the Rosy Cross that conveyed occult teachings through symbols",
    sourceQuestionNumber: 219, sourcePage: 27, source: "Freemasonry at a Glance, question 219, printed page 27"
  },
  {
    id: "book-220", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "What is the crux ansata?",
    choices: ["The handled cross, or ankh, an Egyptian symbol of life", "A five-pointed star used to symbolize geometry", "A cross formed by the square and compasses", "A Roman emblem of civic freedom"], correctAnswer: "The handled cross, or ankh, an Egyptian symbol of life",
    sourceQuestionNumber: 220, sourcePage: 27, source: "Freemasonry at a Glance, question 220, printed page 27; modern name added"
  },
  {
    id: "book-221", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "What do the initials G.A.O.T.U. mean?",
    choices: ["Grand Architect of the Universe", "Grand Assembly of Operative Trade Unions", "Geometry and Order Through Understanding", "General Articles of the United Temple"], correctAnswer: "Grand Architect of the Universe",
    sourceQuestionNumber: 221, sourcePage: 27, source: "Freemasonry at a Glance, question 221, printed page 27"
  },
  {
    id: "book-222", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "Why does a Mason pray?",
    choices: ["Belief in Deity naturally leads to supplication, adoration, and aspiration", "Prayer replaces the need for moral action", "Prayer is used only to open Grand Lodge", "Every Mason must recite the same creed"], correctAnswer: "Belief in Deity naturally leads to supplication, adoration, and aspiration",
    sourceQuestionNumber: 222, sourcePage: 27, source: "Freemasonry at a Glance, question 222, printed page 27"
  },
  {
    id: "book-223", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "To which three moral principles are Masons dedicated?",
    choices: ["Brotherly Love, Relief, and Truth", "Faith, Hope, and Charity", "Temperance, Fortitude, and Prudence", "Wisdom, Strength, and Beauty"], correctAnswer: "Brotherly Love, Relief, and Truth",
    sourceQuestionNumber: 223, sourcePage: 27, source: "Freemasonry at a Glance, question 223, printed page 27"
  },
  {
    id: "book-224", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "What is the fivefold duty of a Mason?",
    choices: ["Duty to God, country, family, self, and fraternity", "Duty to Lodge, Grand Lodge, church, school, and state", "Duty to wisdom, strength, beauty, faith, and hope", "Duty to work, rest, study, travel, and charity"], correctAnswer: "Duty to God, country, family, self, and fraternity",
    sourceQuestionNumber: 224, sourcePage: 28, source: "Freemasonry at a Glance, question 224, printed page 28"
  },
  {
    id: "book-225", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "How are the civic principles of Freemasonry summarized?",
    choices: ["Free thought, free schools, free speech, free religion, and a free ballot", "One church, one school, one press, and one ballot", "Private thought, restricted speech, and appointed government", "Free trade, free travel, free lodging, and free labor"], correctAnswer: "Free thought, free schools, free speech, free religion, and a free ballot",
    sourceQuestionNumber: 225, sourcePage: 28, source: "Freemasonry at a Glance, question 225, printed page 28"
  },
  {
    id: "book-226", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "If a Mason's daughter marries a non-Mason and later falls into distress, does she have a claim upon the fraternity?",
    choices: ["Yes; her marriage does not cancel that claim", "No; marriage to a non-Mason ends it", "Only if her husband later joins", "Only while her father holds Lodge office"], correctAnswer: "Yes; her marriage does not cancel that claim",
    sourceQuestionNumber: 226, sourcePage: 28, source: "Freemasonry at a Glance, question 226, printed page 28; presented as the source's general principle, with actual relief governed locally"
  },
  {
    id: "book-227", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "Which amusements were forbidden to Operative Apprentices?",
    choices: ["Cards, dice, gambling, and visits to disreputable resorts, taverns, and alehouses", "Music, dancing, reading, and athletic games", "Travel, public speaking, and attending school", "Chess, archery, hunting, and fishing"], correctAnswer: "Cards, dice, gambling, and visits to disreputable resorts, taverns, and alehouses",
    sourceQuestionNumber: 227, sourcePage: 28, source: "Freemasonry at a Glance, question 227, printed page 28; dated wording modernized"
  },
  {
    id: "book-228", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "What does a Mason mean by temperance?",
    choices: ["Self-control and keeping one's passions within proper bounds", "Avoiding every form of recreation", "Remaining silent in all disagreements", "Never changing one's opinion"], correctAnswer: "Self-control and keeping one's passions within proper bounds",
    sourceQuestionNumber: 228, sourcePage: 28, source: "Freemasonry at a Glance, question 228, printed page 28"
  },
  {
    id: "book-229", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "What does a Mason mean by fortitude?",
    choices: ["Courage, patience in adversity, calmness in trial, and faithfulness", "Physical strength alone", "Avoidance of every difficult situation", "Strict obedience without reflection"], correctAnswer: "Courage, patience in adversity, calmness in trial, and faithfulness",
    sourceQuestionNumber: 229, sourcePage: 28, source: "Freemasonry at a Glance, question 229, printed page 28"
  },
  {
    id: "book-230", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "What does a Mason mean by prudence?",
    choices: ["Common sense and reason", "Courage in adversity", "Charitable giving", "Silence under all circumstances"], correctAnswer: "Common sense and reason",
    sourceQuestionNumber: 230, sourcePage: 28, source: "Freemasonry at a Glance, question 230, printed page 28"
  },
  {
    id: "book-231", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "How is justice described?",
    choices: ["The cement and support of civil society", "The reward of private ambition", "The power of the strongest ruler", "The avoidance of civic responsibility"], correctAnswer: "The cement and support of civil society",
    sourceQuestionNumber: 231, sourcePage: 28, source: "Freemasonry at a Glance, question 231, printed page 28"
  },
  {
    id: "book-232", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "What are the four Cardinal Virtues?",
    choices: ["Temperance, Fortitude, Prudence, and Justice", "Faith, Hope, Charity, and Truth", "Wisdom, Strength, Beauty, and Harmony", "Brotherly Love, Relief, Truth, and Fidelity"], correctAnswer: "Temperance, Fortitude, Prudence, and Justice",
    sourceQuestionNumber: 232, sourcePage: 28, source: "Freemasonry at a Glance, question 232, printed page 28"
  },
  {
    id: "book-233", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Which numbers are identified as sacred numbers?",
    choices: ["3, 5, 7, and 9", "2, 4, 6, and 8", "1, 2, 3, and 4", "7, 10, 12, and 24"], correctAnswer: "3, 5, 7, and 9",
    sourceQuestionNumber: 233, sourcePage: 29, source: "Freemasonry at a Glance, question 233, printed page 29"
  },
  {
    id: "book-234", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "In an ancient symbolic interpretation, what do even and odd numbers represent?",
    choices: ["Even numbers represent earthly or human things; odd numbers represent divine truth", "Even numbers represent divine truth; odd numbers represent earthly things", "Even numbers represent wisdom; odd numbers represent strength", "Even numbers represent light; odd numbers represent darkness"], correctAnswer: "Even numbers represent earthly or human things; odd numbers represent divine truth",
    sourceQuestionNumber: 234, sourcePage: 29, source: "Freemasonry at a Glance, question 234, printed page 29; ancient belief explicitly identified"
  },
  {
    id: "book-235", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "Which ideas are included in the symbolic meaning of Geometry?",
    choices: ["Order, universal law, science, moral rectitude, spiritual harmony, and divine truth", "Secrecy, rank, wealth, political power, and conquest", "Only measurement, arithmetic, and construction", "Faith, hope, charity, and resurrection alone"], correctAnswer: "Order, universal law, science, moral rectitude, spiritual harmony, and divine truth",
    sourceQuestionNumber: 235, sourcePage: 29, source: "Freemasonry at a Glance, question 235, printed page 29"
  },
  {
    id: "book-236", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Who is credited with saying, 'God is always geometrizing'?",
    choices: ["Plato", "Pythagoras", "Euclid", "Aristotle"], correctAnswer: "Plato",
    sourceQuestionNumber: 236, sourcePage: 29, source: "Freemasonry at a Glance, question 236, printed page 29; traditional attribution retained"
  },
  {
    id: "book-237", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "What does the Forty-seventh Problem of Euclid state?",
    choices: ["In a right triangle, the squares of the two legs sum to the square of the hypotenuse", "The angles of every triangle total ninety degrees", "A circle's circumference is three times its diameter", "Every square can be divided into forty-seven equal triangles"], correctAnswer: "In a right triangle, the squares of the two legs sum to the square of the hypotenuse",
    sourceQuestionNumber: 237, sourcePage: 29, source: "Freemasonry at a Glance, question 237, printed page 29; mathematical wording corrected"
  },
  {
    id: "book-238", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Who was Euclid?",
    choices: ["An ancient Greek mathematician associated with Alexandria and called the father of geometry", "A Roman architect who built Solomon's Temple", "An Egyptian priest who founded Rosicrucianism", "A medieval Mason who created the square and compasses"], correctAnswer: "An ancient Greek mathematician associated with Alexandria and called the father of geometry",
    sourceQuestionNumber: 238, sourcePage: 29, source: "Freemasonry at a Glance, question 238, printed page 29; dates omitted because the source's 323-283 BC dates are disputed"
  },
  {
    id: "book-239", category: "Masonic Belief, Ethics, and Origins", difficulty: "hard",
    question: "What symbolic significance is assigned to the Forty-seventh Problem of Euclid?",
    choices: ["The Deity's magnificence and unknowability, the universality and simplicity of divine truths, and the wonders of creation", "The superiority of operative labor over speculative study", "The division of a Lodge into forty-seven offices", "The exact dimensions of King Solomon's Temple"], correctAnswer: "The Deity's magnificence and unknowability, the universality and simplicity of divine truths, and the wonders of creation",
    sourceQuestionNumber: 239, sourcePage: 29, source: "Freemasonry at a Glance, question 239, printed page 29"
  },
  {
    id: "book-240", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Who is credited with saying, 'Geometry rightly treated is the knowledge of the Eternal'?",
    choices: ["Plato", "Euclid", "Pythagoras", "Socrates"], correctAnswer: "Plato",
    sourceQuestionNumber: 240, sourcePage: 29, source: "Freemasonry at a Glance, question 240, printed page 29; traditional attribution retained"
  },
  {
    id: "book-241", category: "Masonic Belief, Ethics, and Origins", difficulty: "hard",
    question: "Who is credited with saying that all things are in numbers and that the world is 'a living arithmetic' and 'a realized geometry'?",
    choices: ["Pythagoras", "Plato", "Euclid", "Hermes"], correctAnswer: "Pythagoras",
    sourceQuestionNumber: 241, sourcePage: 29, source: "Freemasonry at a Glance, question 241, printed page 29; traditional attribution retained"
  },
  {
    id: "book-242", category: "Masonic Belief, Ethics, and Origins", difficulty: "hard",
    question: "Which description best identifies Pythagoras?",
    choices: ["A Greek philosopher and mathematician associated with a school at Croton", "An Alexandrian mathematician called the father of geometry", "A Jewish mystic who developed Kabbalah", "A seventeenth-century Rosicrucian writer"], correctAnswer: "A Greek philosopher and mathematician associated with a school at Croton",
    sourceQuestionNumber: 242, sourcePage: 30, source: "Freemasonry at a Glance, question 242, printed page 30; historical description modernized"
  },
  {
    id: "book-243", category: "Masonic Belief, Ethics, and Origins", difficulty: "hard",
    question: "Which group consists entirely of significant Masonic 'threes'?",
    choices: ["Three degrees, three principal officers, three Great Lights, and three lesser lights", "Three Cardinal Virtues, three orders of architecture, and three senses", "Three sacred numbers, three working tools, and three points of fellowship", "Three Wardens, three Deacons, three Stewards, and three Tylers"], correctAnswer: "Three degrees, three principal officers, three Great Lights, and three lesser lights",
    sourceQuestionNumber: 243, sourcePage: 30, source: "Freemasonry at a Glance, question 243, printed page 30; representative examples used from the source's longer list"
  },
  {
    id: "book-244", category: "Masonic Belief, Ethics, and Origins", difficulty: "hard",
    question: "Which group consists entirely of significant Masonic 'fives'?",
    choices: ["Five senses, five orders of architecture, geometry as the fifth science, and the five-pointed star", "Five Great Lights, five lesser lights, five officers, and five degrees", "Five virtues, five liberal arts, five pillars, and five gavels", "Five sacred laws, five obligations, five altars, and five columns"], correctAnswer: "Five senses, five orders of architecture, geometry as the fifth science, and the five-pointed star",
    sourceQuestionNumber: 244, sourcePage: 30, source: "Freemasonry at a Glance, question 244, printed page 30"
  },
  {
    id: "book-245", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "Why is the number seven symbolically significant?",
    choices: ["Ancient philosophies commonly treated it as a symbol of perfection", "It is the number of principal Lodge officers", "It represents the four Cardinal Virtues and three Great Lights", "It is the number of sides on a perfect ashlar"], correctAnswer: "Ancient philosophies commonly treated it as a symbol of perfection",
    sourceQuestionNumber: 245, sourcePage: 30, source: "Freemasonry at a Glance, question 245, printed page 30; broad claim moderated"
  },
  {
    id: "book-246", category: "Masonic Belief, Ethics, and Origins", difficulty: "easy",
    question: "How is Pythagoras referred to in Masonic ritual?",
    choices: ["Our ancient friend and brother", "The father of Speculative Masonry", "The first Grand Master", "The architect of Solomon's Temple"], correctAnswer: "Our ancient friend and brother",
    sourceQuestionNumber: 246, sourcePage: 30, source: "Freemasonry at a Glance, question 246, printed page 30; ritual wording may vary by jurisdiction"
  },
  {
    id: "book-247", category: "Masonic Belief, Ethics, and Origins", difficulty: "hard",
    question: "How does the traditional account describe the origin of Freemasonry?",
    choices: ["Its origins are lost to history, while its legends and symbolism are linked to the ancient mystery traditions", "It began on a precisely documented date in prehistoric Egypt", "It was founded by Pythagoras at Croton in 529 BC", "It began only when the first Grand Lodge formed in 1717"], correctAnswer: "Its origins are lost to history, while its legends and symbolism are linked to the ancient mystery traditions",
    sourceQuestionNumber: 247, sourcePage: 30, source: "Freemasonry at a Glance, question 247, printed page 30; speculative descent presented as tradition rather than established history"
  },
  {
    id: "book-248", category: "Masonic Belief, Ethics, and Origins", difficulty: "medium",
    question: "How old is Freemasonry in the traditional account?",
    choices: ["Its symbolism and teachings are described as ancient, while its ritual reached its present form in the eighteenth century", "Every part of it began in 1717", "Its modern ritual was fixed in prehistoric times", "It began with the construction of the Egyptian pyramids"], correctAnswer: "Its symbolism and teachings are described as ancient, while its ritual reached its present form in the eighteenth century",
    sourceQuestionNumber: 248, sourcePage: 30, source: "Freemasonry at a Glance, question 248, printed page 30; traditional claim qualified"
  },
  {
    id: "book-249", category: "Masonic Belief, Ethics, and Origins", difficulty: "hard",
    question: "What institution did the source compare to Freemasonry in some traditional societies?",
    choices: ["The Men's House, where boys underwent initiation into adult society", "The royal court, where rulers selected their heirs", "The temple school, where priests taught geometry", "The market guild, where merchants regulated trade"], correctAnswer: "The Men's House, where boys underwent initiation into adult society",
    sourceQuestionNumber: 249, sourcePage: 31, source: "Freemasonry at a Glance, question 249, printed page 31; 'primitive society' and sensationalized wording modernized"
  },
  {
    id: "book-250", category: "Masonic Belief, Ethics, and Origins", difficulty: "hard",
    question: "What similarities are drawn between ancient mystery ceremonies and Freemasonry?",
    choices: ["Dramatic legends conveyed divine unity, immortality, brotherhood, morality, charity, fidelity, and secrecy", "Both were primarily schools of architecture and stonecutting", "Both required allegiance to a single ancient government", "Both rejected symbolism in favor of direct lectures"], correctAnswer: "Dramatic legends conveyed divine unity, immortality, brotherhood, morality, charity, fidelity, and secrecy",
    sourceQuestionNumber: 250, sourcePage: 31, source: "Freemasonry at a Glance, question 250, printed page 31; comparison presented as an older interpretive claim"
  }
];
