/*
  FREEMASONRY AT A GLANCE - QUESTIONS 51-100

  Source: Reynold E. Blight, Freemasonry at a Glance: Answers to 555 Questions.
  The sourceQuestionNumber and sourcePage fields are private maintenance notes.
  Wording has been lightly modernized, and historical, symbolic, or
  jurisdiction-dependent statements are attributed where appropriate.
*/

const QUESTION_BANK = [
  {
    id: "book-051",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "Are words, grips, and tokens unique to Freemasonry?",
    choices: ["No; signs and symbols have been used since ancient times", "Yes; all were created exclusively for Freemasonry", "Only grips are unique to Freemasonry", "Only words and tokens are unique to Freemasonry"],
    correctAnswer: "No; signs and symbols have been used since ancient times",
    sourceQuestionNumber: 51,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 51, printed page 10"
  },
  {
    id: "book-052",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What punishment is said to follow unfaithfulness to one's pledged word?",
    choices: ["Remorse of conscience and exile from the fellowship of true and worthy men", "A monetary fine imposed by the lodge", "Permanent loss of civil rights", "Seven years of additional apprenticeship"],
    correctAnswer: "Remorse of conscience and exile from the fellowship of true and worthy men",
    sourceQuestionNumber: 52,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 52, printed page 10"
  },
  {
    id: "book-053",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What civic virtue is inculcated in the Entered Apprentice Degree?",
    choices: ["Freedom under law", "Rule by inherited privilege", "Freedom from every obligation", "Political authority without restraint"],
    correctAnswer: "Freedom under law",
    sourceQuestionNumber: 53,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 53, printed page 10"
  },
  {
    id: "book-054",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "In a traditional Masonic explanation, \"due guard\" is said to be a corruption of which French phrase?",
    choices: ["Dieu me garde", "Devoir et garder", "Droit de guerre", "Dieu et le roi"],
    correctAnswer: "Dieu me garde",
    sourceQuestionNumber: 54,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 54, printed page 10"
  },
  {
    id: "book-055",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What does the old word \"hele\" mean?",
    choices: ["To cover or conceal", "To greet or welcome", "To promise or swear", "To listen or understand"],
    correctAnswer: "To cover or conceal",
    sourceQuestionNumber: 55,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 55, printed page 10"
  },
  {
    id: "book-056",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "Is \"the Order of the Star and Garter\" the correct name of an order of knighthood?",
    choices: ["No; that wording is incorrect", "Yes; it is England's oldest order", "Yes; it is a French chivalric order", "No; it is the name of a military regiment"],
    correctAnswer: "No; that wording is incorrect",
    sourceQuestionNumber: 56,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 56, printed page 10"
  },
  {
    id: "book-057",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "What is the Order of the Garter?",
    choices: ["England's senior order of knighthood, founded by Edward III in the fourteenth century", "A Burgundian order founded by Philip the Good", "A Roman priesthood devoted to Apollo", "A Scottish guild of operative stonemasons"],
    correctAnswer: "England's senior order of knighthood, founded by Edward III in the fourteenth century",
    sourceQuestionNumber: 57,
    sourcePage: 11,
    source: "Freemasonry at a Glance, question 57, printed page 11"
  },
  {
    id: "book-058",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "What is the Order of the Golden Fleece?",
    choices: ["An order of knighthood founded by Philip the Good, Duke of Burgundy, in 1430", "An English order founded by Edward III in 1348", "A Greek mystery religion centered on Jason", "A Roman builders' guild established under Augustus"],
    correctAnswer: "An order of knighthood founded by Philip the Good, Duke of Burgundy, in 1430",
    sourceQuestionNumber: 58,
    sourcePage: 11,
    source: "Freemasonry at a Glance, question 58, printed page 11; date corrected to 1430"
  },
  {
    id: "book-059",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "Which three meanings are associated with the Masonic apron?",
    choices: ["An inheritance from the immemorial past, the badge of a Mason, and an emblem of innocence", "A sign of rank, a record of service, and a badge of military honor", "A symbol of wealth, political authority, and hereditary privilege", "A working plan, a tracing board, and a charter of membership"],
    correctAnswer: "An inheritance from the immemorial past, the badge of a Mason, and an emblem of innocence",
    sourceQuestionNumber: 59,
    sourcePage: 11,
    source: "Freemasonry at a Glance, question 59, printed page 11"
  },
  {
    id: "book-060",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "Which traditions are cited to illustrate the apron's antiquity as a sacred emblem?",
    choices: ["The Hebrew priesthood and the ancient religions of India, Persia, and Egypt", "The Roman Senate and the medieval universities of Europe", "The Norse jarls and the military orders of Spain", "The philosophers of Athens and the magistrates of Carthage"],
    correctAnswer: "The Hebrew priesthood and the ancient religions of India, Persia, and Egypt",
    sourceQuestionNumber: 60,
    sourcePage: 11,
    source: "Freemasonry at a Glance, question 60, printed page 11"
  },
  {
    id: "book-061",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "hard",
    question: "In which ancient or mystery traditions is the apron said to have been used symbolically?",
    choices: ["Those of Mithra, the Essenes, the Druids, and the Egyptians", "Those of Apollo, the Stoics, the Vikings, and the Sumerians", "Those of Orpheus, the Pythagoreans, the Celts, and the Persians", "Those of Isis, the Pharisees, the Saxons, and the Babylonians"],
    correctAnswer: "Those of Mithra, the Essenes, the Druids, and the Egyptians",
    sourceQuestionNumber: 61,
    sourcePage: 11,
    source: "Freemasonry at a Glance, question 61, printed page 11"
  },
  {
    id: "book-062",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "According to Festus, what did Roman priests customarily wear when making sacrifices?",
    choices: ["White garments", "Purple robes", "Leather aprons", "Garlands of blue flowers"],
    correctAnswer: "White garments",
    sourceQuestionNumber: 62,
    sourcePage: 11,
    source: "Freemasonry at a Glance, question 62, printed page 11"
  },
  {
    id: "book-063",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What condition is symbolized by the candidate's preparation in the Entered Apprentice Degree?",
    choices: ["The candidate's condition regarding the new life he wishes to enter", "The candidate's former occupation and social standing", "The lodge's readiness to begin a building project", "The candidate's eligibility to hold public office"],
    correctAnswer: "The candidate's condition regarding the new life he wishes to enter",
    sourceQuestionNumber: 63,
    sourcePage: 11,
    source: "Freemasonry at a Glance, question 63, printed page 11"
  },
  {
    id: "book-064",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What lesson is taught by the Entered Apprentice ceremony involving a candidate's destitute condition?",
    choices: ["Charity", "Architecture", "Silence", "Patriotism"],
    correctAnswer: "Charity",
    sourceQuestionNumber: 64,
    sourcePage: 11,
    source: "Freemasonry at a Glance, question 64, printed page 11"
  },
  {
    id: "book-065",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "hard",
    question: "Which set correctly pairs four metals with their traditional astrological associations?",
    choices: ["Lead-Saturn; iron-Mars; copper-Venus; gold-the Sun", "Lead-Mars; iron-Venus; copper-the Sun; gold-Saturn", "Lead-Venus; iron-the Sun; copper-Saturn; gold-Mars", "Lead-the Sun; iron-Saturn; copper-Mars; gold-Venus"],
    correctAnswer: "Lead-Saturn; iron-Mars; copper-Venus; gold-the Sun",
    sourceQuestionNumber: 65,
    sourcePage: 11,
    source: "Freemasonry at a Glance, question 65, printed page 11"
  },
  {
    id: "book-066",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What are the ornaments of a lodge?",
    choices: ["The Mosaic Pavement, the Indented Tessel, and the Blazing Star", "The Holy Bible, Square and Compasses, and charter", "The Rough Ashlar, Perfect Ashlar, and Trestle Board", "The Square, Level, and Plumb"],
    correctAnswer: "The Mosaic Pavement, the Indented Tessel, and the Blazing Star",
    sourceQuestionNumber: 66,
    sourcePage: 11,
    source: "Freemasonry at a Glance, question 66, printed page 11"
  },
  {
    id: "book-067",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What are the furnishings of a lodge?",
    choices: ["The Holy Bible, Square and Compasses, and charter", "The Mosaic Pavement, Indented Tessel, and Blazing Star", "The Rough Ashlar, Perfect Ashlar, and Trestle Board", "The Square, Level, and Plumb"],
    correctAnswer: "The Holy Bible, Square and Compasses, and charter",
    sourceQuestionNumber: 67,
    sourcePage: 12,
    source: "Freemasonry at a Glance, question 67, printed page 12"
  },
  {
    id: "book-068",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What is a trestle board?",
    choices: ["A board on which the Master inscribes designs for the guidance of the Craft", "A floor cloth displaying the symbols of every degree", "A register containing the names of lodge officers", "A table on which the lodge's movable jewels rest"],
    correctAnswer: "A board on which the Master inscribes designs for the guidance of the Craft",
    sourceQuestionNumber: 68,
    sourcePage: 12,
    source: "Freemasonry at a Glance, question 68, printed page 12"
  },
  {
    id: "book-069",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "Under one traditional Masonic distinction, how does a tracing board differ from a trestle board?",
    choices: ["A tracing board depicts a degree's symbols and may be used in each degree; a trestle board bears designs for the Craft's guidance and is associated with the Entered Apprentice Degree", "A tracing board records attendance; a trestle board records lodge finances", "A tracing board belongs only to Grand Lodge; a trestle board belongs only to subordinate lodges", "A tracing board is an officer's jewel; a trestle board is a working tool"],
    correctAnswer: "A tracing board depicts a degree's symbols and may be used in each degree; a trestle board bears designs for the Craft's guidance and is associated with the Entered Apprentice Degree",
    sourceQuestionNumber: 69,
    sourcePage: 12,
    source: "Freemasonry at a Glance, question 69, printed page 12"
  },
  {
    id: "book-070",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What does the gavel symbolize?",
    choices: ["Labor and power", "Faith and hope", "Equality and uprightness", "Time and mortality"],
    correctAnswer: "Labor and power",
    sourceQuestionNumber: 70,
    sourcePage: 12,
    source: "Freemasonry at a Glance, question 70, printed page 12"
  },
  {
    id: "book-071",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "How long was an ancient operative apprentice typically bound by bond or indenture?",
    choices: ["Seven years", "Three years", "Five years", "Twelve years"],
    correctAnswer: "Seven years",
    sourceQuestionNumber: 71,
    sourcePage: 12,
    source: "Freemasonry at a Glance, question 71, printed page 12"
  },
  {
    id: "book-072",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What is the keyword of the Fellow Craft Degree?",
    choices: ["Knowledge", "Initiation", "Fidelity", "Achievement"],
    correctAnswer: "Knowledge",
    sourceQuestionNumber: 72,
    sourcePage: 12,
    source: "Freemasonry at a Glance, question 72, printed page 12"
  },
  {
    id: "book-073",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "Why is time traditionally required between the conferring of Masonic degrees?",
    choices: ["To allow instruction and proficiency before further advancement", "To permit the election of an entirely new lodge staff", "To allow a candidate to complete an operative building project", "To satisfy a universal requirement of exactly seven years"],
    correctAnswer: "To allow instruction and proficiency before further advancement",
    sourceQuestionNumber: 73,
    sourcePage: 12,
    source: "Freemasonry at a Glance, question 73, printed page 12"
  },
  {
    id: "book-074",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "hard",
    question: "According to an older historical theory, when did the Fellow Craft Degree originate as a separate degree?",
    choices: ["Between 1723 and 1738, through division of the First Degree", "Between 1598 and 1603, through division of the Master Mason Degree", "In 1717, when the Grand Lodge of England was formed", "About 1770, when William Preston became Grand Master"],
    correctAnswer: "Between 1723 and 1738, through division of the First Degree",
    sourceQuestionNumber: 74,
    sourcePage: 12,
    source: "Freemasonry at a Glance, question 74, printed page 12"
  },
  {
    id: "book-075",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What does \"Fellow Craft\" mean?",
    choices: ["Fellow or companion of the Craft", "Master of an operative guild", "Guardian of a lodge charter", "Teacher of the liberal arts"],
    correctAnswer: "Fellow or companion of the Craft",
    sourceQuestionNumber: 75,
    sourcePage: 12,
    source: "Freemasonry at a Glance, question 75, printed page 12"
  },
  {
    id: "book-076",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "When was the term \"Fellow Craft\" first recorded in Scotland and England?",
    choices: ["Scotland in 1598; England in 1723", "Scotland in 1717; England in 1770", "Scotland in 1348; England in 1430", "Scotland in 1723; England in 1598"],
    correctAnswer: "Scotland in 1598; England in 1723",
    sourceQuestionNumber: 76,
    sourcePage: 12,
    source: "Freemasonry at a Glance, question 76, printed page 12"
  },
  {
    id: "book-077",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "hard",
    question: "What place did the ceremonies now associated with the Fellow Craft Degree originally occupy in Ancient Craft Masonry?",
    choices: ["They were part of the First Degree of initiation", "They formed the concluding section of the Third Degree", "They were used only for installing a Worshipful Master", "They belonged exclusively to operative apprentices"],
    correctAnswer: "They were part of the First Degree of initiation",
    sourceQuestionNumber: 77,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 77, printed page 13"
  },
  {
    id: "book-078",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "Who revised and enlarged the Fellow Craft Degree about 1770?",
    choices: ["William Preston", "Albert G. Mackey", "James Anderson", "Jeremy Cross"],
    correctAnswer: "William Preston",
    sourceQuestionNumber: 78,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 78, printed page 13"
  },
  {
    id: "book-079",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "What was William Preston's purpose in forming the Fellow Craft lecture?",
    choices: ["To make Masonic ritual a course of instruction in the arts and sciences", "To shorten the degree to a single symbolic lecture", "To replace moral instruction with operative stonecutting", "To make the degree identical in every country"],
    correctAnswer: "To make Masonic ritual a course of instruction in the arts and sciences",
    sourceQuestionNumber: 79,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 79, printed page 13"
  },
  {
    id: "book-080",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "Who was Amos?",
    choices: ["A Hebrew prophet who flourished about 760 B.C. and denounced social injustice", "A Phoenician architect who designed Solomon's Temple", "A Roman historian who described sacrificial garments", "An English ritualist who revised the Fellow Craft lecture"],
    correctAnswer: "A Hebrew prophet who flourished about 760 B.C. and denounced social injustice",
    sourceQuestionNumber: 80,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 80, printed page 13"
  },
  {
    id: "book-081",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "What interpretation may be given to the oblong square?",
    choices: ["Masonry is progressive, and each Mason must try his life by the Perfect Square", "Every lodge building must be exactly twice as long as it is wide", "The four sides represent the four orders of architecture", "Operative Masonry is superior to Speculative Masonry"],
    correctAnswer: "Masonry is progressive, and each Mason must try his life by the Perfect Square",
    sourceQuestionNumber: 81,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 81, printed page 13"
  },
  {
    id: "book-082",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "In a common American Masonic classification, what are the movable jewels?",
    choices: ["The Rough Ashlar, Perfect Ashlar, and Trestle Board", "The Square, Level, and Plumb", "The Mosaic Pavement, Indented Tessel, and Blazing Star", "The Holy Bible, Square and Compasses, and charter"],
    correctAnswer: "The Rough Ashlar, Perfect Ashlar, and Trestle Board",
    sourceQuestionNumber: 82,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 82, printed page 13"
  },
  {
    id: "book-083",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "In a common American Masonic classification, what are the immovable jewels?",
    choices: ["The Square, Level, and Plumb", "The Rough Ashlar, Perfect Ashlar, and Trestle Board", "The Sun, Moon, and Worshipful Master", "The Mosaic Pavement, Indented Tessel, and Blazing Star"],
    correctAnswer: "The Square, Level, and Plumb",
    sourceQuestionNumber: 83,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 83, printed page 13"
  },
  {
    id: "book-084",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What was Operative Masonry?",
    choices: ["Fraternities of builders who actually erected buildings", "A school devoted only to moral philosophy", "An order of medieval knights", "A system created to regulate maritime trade"],
    correctAnswer: "Fraternities of builders who actually erected buildings",
    sourceQuestionNumber: 84,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 84, printed page 13"
  },
  {
    id: "book-085",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What is Speculative Masonry?",
    choices: ["The application of operative builders' art and symbols to moral and intellectual instruction", "The modern practice of designing cathedrals without constructing them", "A historical theory that Freemasonry began in ancient Egypt", "A branch of Masonry limited to professional architects"],
    correctAnswer: "The application of operative builders' art and symbols to moral and intellectual instruction",
    sourceQuestionNumber: 85,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 85, printed page 13"
  },
  {
    id: "book-086",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "Why did Operative Masonry decline?",
    choices: ["The Reformation brought a decline in cathedral building", "The invention of the printing press ended all craft guilds", "The Order of the Garter absorbed the operative lodges", "King Solomon's Temple was no longer used as a model"],
    correctAnswer: "The Reformation brought a decline in cathedral building",
    sourceQuestionNumber: 86,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 86, printed page 13"
  },
  {
    id: "book-087",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "hard",
    question: "How is the traditional transition from Operative to Speculative Masonry described?",
    choices: ["Scholars and thinkers were gradually attracted to operative traditions and symbolism, with 1717 marking a major speculative milestone", "Operative lodges were abolished by royal decree and immediately replaced by philosophical societies", "Medieval universities created Speculative Masonry before operative lodges existed", "The transition occurred when Roman builders adopted the five orders of architecture"],
    correctAnswer: "Scholars and thinkers were gradually attracted to operative traditions and symbolism, with 1717 marking a major speculative milestone",
    sourceQuestionNumber: 87,
    sourcePage: 13,
    source: "Freemasonry at a Glance, question 87, printed pages 13-14"
  },
  {
    id: "book-088",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "hard",
    question: "In one legendary account, what route did the tradition of the two pillars take before reaching Solomon's Temple?",
    choices: ["From India to Egypt, then to the Phoenicians at Tyre, and finally to Jerusalem", "From Greece to Rome, then to Britain, and finally to Jerusalem", "From Babylon to Persia, then to Egypt, and finally to Jerusalem", "From Jerusalem to Tyre, then to Egypt, and finally to India"],
    correctAnswer: "From India to Egypt, then to the Phoenicians at Tyre, and finally to Jerusalem",
    sourceQuestionNumber: 88,
    sourcePage: 14,
    source: "Freemasonry at a Glance, question 88, printed page 14"
  },
  {
    id: "book-089",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "According to William Preston, what do the two pillars represent?",
    choices: ["The Pillar of Cloud and the Pillar of Fire that guided the Israelites", "The kingdoms of Israel and Judah", "The Sun and Moon governing day and night", "Operative and Speculative Masonry"],
    correctAnswer: "The Pillar of Cloud and the Pillar of Fire that guided the Israelites",
    sourceQuestionNumber: 89,
    sourcePage: 14,
    source: "Freemasonry at a Glance, question 89, printed page 14"
  },
  {
    id: "book-090",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "hard",
    question: "In an older interpretation, what originally rested on the two pillars before globes were introduced?",
    choices: ["An egg", "A crown", "A pomegranate", "A blazing star"],
    correctAnswer: "An egg",
    sourceQuestionNumber: 90,
    sourcePage: 14,
    source: "Freemasonry at a Glance, question 90, printed page 14"
  },
  {
    id: "book-091",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What do the globes on the pillars represent?",
    choices: ["The heavens and the earth, as well as astronomy and geography", "The Sun and Moon, as well as day and night", "Faith and hope, as well as theology and philosophy", "Strength and establishment, as well as law and order"],
    correctAnswer: "The heavens and the earth, as well as astronomy and geography",
    sourceQuestionNumber: 91,
    sourcePage: 14,
    source: "Freemasonry at a Glance, question 91, printed page 14"
  },
  {
    id: "book-092",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What do the globes symbolize collectively?",
    choices: ["The universe", "The lodge", "The liberal arts", "The cardinal virtues"],
    correctAnswer: "The universe",
    sourceQuestionNumber: 92,
    sourcePage: 14,
    source: "Freemasonry at a Glance, question 92, printed page 14"
  },
  {
    id: "book-093",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "hard",
    question: "What symbolic lineage is assigned to the lilywork on the pillars in one traditional interpretation?",
    choices: ["It derives from the Egyptian lotus, said to have come from India, and can represent humanity and universality", "It derives from the Greek olive, said to have come from Rome, and represents military victory", "It derives from the Hebrew cedar, said to have come from Lebanon, and represents royal authority", "It derives from the Persian rose, said to have come from Babylon, and represents secrecy"],
    correctAnswer: "It derives from the Egyptian lotus, said to have come from India, and can represent humanity and universality",
    sourceQuestionNumber: 93,
    sourcePage: 14,
    source: "Freemasonry at a Glance, question 93, printed page 14"
  },
  {
    id: "book-094",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "What do the seven rungs of the Theological Ladder represent?",
    choices: ["The three theological virtues and the four cardinal virtues", "The three degrees and the four principal officers", "The five senses and the two pillars", "The four elements and the three ancient orders of architecture"],
    correctAnswer: "The three theological virtues and the four cardinal virtues",
    sourceQuestionNumber: 94,
    sourcePage: 14,
    source: "Freemasonry at a Glance, question 94, printed page 14"
  },
  {
    id: "book-095",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "What does the Middle Chamber symbolize?",
    choices: ["The place where rewards are given", "The entrance to the lodge", "The source of moral law", "The boundary between operative and speculative work"],
    correctAnswer: "The place where rewards are given",
    sourceQuestionNumber: 95,
    sourcePage: 14,
    source: "Freemasonry at a Glance, question 95, printed page 14"
  },
  {
    id: "book-096",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "hard",
    question: "Which biblical verse is cited as referring to a middle chamber in King Solomon's Temple?",
    choices: ["1 Kings 6:8", "2 Chronicles 3:17", "Ezekiel 43:2", "Hebrews 6:19"],
    correctAnswer: "1 Kings 6:8",
    sourceQuestionNumber: 96,
    sourcePage: 14,
    source: "Freemasonry at a Glance, question 96, printed page 14; citation OCR corrected"
  },
  {
    id: "book-097",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "hard",
    question: "Why are there traditionally fifteen steps in the Winding Stairs?",
    choices: ["Fifteen is the sum of the sacred numbers three, five, and seven", "Fifteen is the number of Fellow Craft working tools", "Fifteen is the number of years spent building the Temple", "Fifteen is the sum of the five senses and ten commandments"],
    correctAnswer: "Fifteen is the sum of the sacred numbers three, five, and seven",
    sourceQuestionNumber: 97,
    sourcePage: 14,
    source: "Freemasonry at a Glance, question 97, printed page 14"
  },
  {
    id: "book-098",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What does the Winding Stairs symbolize?",
    choices: ["Progress, development, and evolution", "Rest, reward, and retirement", "Silence, secrecy, and concealment", "Birth, youth, and old age"],
    correctAnswer: "Progress, development, and evolution",
    sourceQuestionNumber: 98,
    sourcePage: 15,
    source: "Freemasonry at a Glance, question 98, printed page 15"
  },
  {
    id: "book-099",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "medium",
    question: "What moral lesson is associated with the five senses?",
    choices: ["Our contacts with others should be kindly, helpful, and brotherly", "Knowledge comes only through formal instruction", "The senses must be rejected in favor of pure reason", "Each sense corresponds to one order of architecture"],
    correctAnswer: "Our contacts with others should be kindly, helpful, and brotherly",
    sourceQuestionNumber: 99,
    sourcePage: 15,
    source: "Freemasonry at a Glance, question 99, printed page 15"
  },
  {
    id: "book-100",
    category: "Entered Apprentice and Fellow Craft Degrees",
    difficulty: "easy",
    question: "What are the five orders of architecture?",
    choices: ["Doric, Ionic, Corinthian, Tuscan, and Composite", "Doric, Attic, Corinthian, Gothic, and Romanesque", "Tuscan, Ionic, Egyptian, Composite, and Gothic", "Ionic, Corinthian, Byzantine, Romanesque, and Tuscan"],
    correctAnswer: "Doric, Ionic, Corinthian, Tuscan, and Composite",
    sourceQuestionNumber: 100,
    sourcePage: 15,
    source: "Freemasonry at a Glance, question 100, printed page 15"
  }
];
