/*
  FREEMASONRY AT A GLANCE - QUESTIONS 1-50

  Source: Reynold E. Blight, Freemasonry at a Glance: Answers to 555 Questions.
  The sourceQuestionNumber and sourcePage fields are private maintenance notes.
  Wording has been lightly modernized, and historical, symbolic, or
  jurisdiction-dependent statements are attributed where appropriate.
*/

const QUESTION_BANK = [
  {
    id: "book-001",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Which of the following is Albert G. Mackey's definition of Freemasonry?",
    choices: ["A science of morality, veiled in allegory and illustrated by symbols", "A social club devoted primarily to fellowship", "A system of operative stonecutting", "A political society organized around reform"],
    correctAnswer: "A science of morality, veiled in allegory and illustrated by symbols",
    sourceQuestionNumber: 1,
    sourcePage: 5,
    source: "Freemasonry at a Glance, question 1, printed page 5"
  },
  {
    id: "book-002",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "Which set contains additional definitions of Freemasonry?",
    choices: ["A school of instruction; a building of human souls; a spiritual building; a quest after the divine", "A political fraternity; a trade union; a mystery religion; a charitable trust", "A school of architecture; a guild of artists; a civic academy; a philosophical church", "A temple of science; a brotherhood of knights; a moral tribunal; a royal society"],
    correctAnswer: "A school of instruction; a building of human souls; a spiritual building; a quest after the divine",
    sourceQuestionNumber: 2,
    sourcePage: 5,
    source: "Freemasonry at a Glance, question 2, printed page 5"
  },
  {
    id: "book-003",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "The word \"Mason\" is derived from medieval Latin terms associated with what activity?",
    choices: ["Building", "Teaching", "Sailing", "Writing"],
    correctAnswer: "Building",
    sourceQuestionNumber: 3,
    sourcePage: 5,
    source: "Freemasonry at a Glance, question 3, printed page 5"
  },
  {
    id: "book-004",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "According to Albert G. Mackey, what are the only real secrets of Freemasonry?",
    choices: ["Its modes of recognition and its peculiar and distinctive ceremonies", "Its charitable accounts and membership rolls", "Its architectural plans and working tools", "Its history and philosophical teachings"],
    correctAnswer: "Its modes of recognition and its peculiar and distinctive ceremonies",
    sourceQuestionNumber: 4,
    sourcePage: 5,
    source: "Freemasonry at a Glance, question 4, printed page 5"
  },
  {
    id: "book-005",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Why were non-Masons historically called \"profane\"?",
    choices: ["The word literally means outside the temple", "The word means opposed to charity", "The word identifies an expelled Mason", "The word means unable to read ritual"],
    correctAnswer: "The word literally means outside the temple",
    sourceQuestionNumber: 5,
    sourcePage: 5,
    source: "Freemasonry at a Glance, question 5, printed page 5"
  },
  {
    id: "book-006",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "When may a Mason solicit a non-Mason to petition a lodge?",
    choices: ["Never", "Only during an open house", "Only with the Master's permission", "After the person attends three lodge dinners"],
    correctAnswer: "Never",
    sourceQuestionNumber: 6,
    sourcePage: 5,
    source: "Freemasonry at a Glance, question 6, printed page 5"
  },
  {
    id: "book-007",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Why is solicitation forbidden?",
    choices: ["A petitioner must come of his own free will and accord", "A petitioner must first be related to a Mason", "A lodge may accept petitions only once a year", "Only a Grand Master may recommend a petitioner"],
    correctAnswer: "A petitioner must come of his own free will and accord",
    sourceQuestionNumber: 7,
    sourcePage: 6,
    source: "Freemasonry at a Glance, question 7, printed page 6"
  },
  {
    id: "book-008",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "What does the lodge symbolically represent?",
    choices: ["King Solomon's Temple, understood as a symbol of the universe", "The medieval guild hall, understood as a symbol of labor", "The Temple of Apollo, understood as a symbol of wisdom", "Noah's Ark, understood as a symbol of refuge"],
    correctAnswer: "King Solomon's Temple, understood as a symbol of the universe",
    sourceQuestionNumber: 8,
    sourcePage: 6,
    source: "Freemasonry at a Glance, question 8, printed page 6"
  },
  {
    id: "book-009",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "In Masonic tradition, what is the Lodge of the Holy Saints John?",
    choices: ["A figurative mother lodge at Jerusalem dedicated to both Saints John", "The first Grand Lodge organized in London in 1717", "A medieval guild lodge at York dedicated to Saint George", "A symbolic lodge said to have met on Mount Sinai"],
    correctAnswer: "A figurative mother lodge at Jerusalem dedicated to both Saints John",
    sourceQuestionNumber: 9,
    sourcePage: 6,
    source: "Freemasonry at a Glance, question 9, printed page 6"
  },
  {
    id: "book-010",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Why are Symbolic Lodges popularly called \"Blue Lodges\"?",
    choices: ["The blue canopy symbolizes the vault of heaven", "Their earliest charters were printed on blue paper", "Their officers traditionally wore blue gloves", "Blue was the official color of medieval stonemasons"],
    correctAnswer: "The blue canopy symbolizes the vault of heaven",
    sourceQuestionNumber: 10,
    sourcePage: 6,
    source: "Freemasonry at a Glance, question 10, printed page 6"
  },
  {
    id: "book-011",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "What does the starry ceiling of a lodge represent?",
    choices: ["The canopy of heaven", "The floor of King Solomon's Temple", "The seven liberal arts and sciences", "The darkness of the north"],
    correctAnswer: "The canopy of heaven",
    sourceQuestionNumber: 11,
    sourcePage: 6,
    source: "Freemasonry at a Glance, question 11, printed page 6"
  },
  {
    id: "book-012",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Which qualities are associated with the color blue?",
    choices: ["Friendship, fidelity, and universal sympathy", "Courage, justice, and temperance", "Silence, secrecy, and obedience", "Knowledge, power, and immortality"],
    correctAnswer: "Friendship, fidelity, and universal sympathy",
    sourceQuestionNumber: 12,
    sourcePage: 6,
    source: "Freemasonry at a Glance, question 12, printed page 6"
  },
  {
    id: "book-013",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "hard",
    question: "Which statement describes the significance of blue among several ancient peoples?",
    choices: ["It cites Hebrew ritual use, Druidic truth, Amun in Egypt, Babylonian idols, and Vishnu in Hindu tradition", "It says blue was avoided by Hebrews, Druids, Egyptians, Babylonians, and Hindus", "It associates blue only with Roman military dress and Greek civic offices", "It describes blue as a medieval European symbol with no ancient use"],
    correctAnswer: "It cites Hebrew ritual use, Druidic truth, Amun in Egypt, Babylonian idols, and Vishnu in Hindu tradition",
    sourceQuestionNumber: 13,
    sourcePage: 6,
    source: "Freemasonry at a Glance, question 13, printed page 6"
  },
  {
    id: "book-014",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "What does the English phrase \"opening a lodge in the center\" mean?",
    choices: ["Opening a lodge of Master Masons, all figuratively equidistant from perfection", "Opening a lodge with the altar moved to the geometric center", "Opening a joint meeting of three neighboring lodges", "Opening a lodge without its usual officers"],
    correctAnswer: "Opening a lodge of Master Masons, all figuratively equidistant from perfection",
    sourceQuestionNumber: 14,
    sourcePage: 6,
    source: "Freemasonry at a Glance, question 14, printed page 6"
  },
  {
    id: "book-015",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Which term should be used when the word \"Masonry\" might be misunderstood?",
    choices: ["Freemasonry", "Craftwork", "Speculative building", "The Royal Art"],
    correctAnswer: "Freemasonry",
    sourceQuestionNumber: 15,
    sourcePage: 6,
    source: "Freemasonry at a Glance, question 15, printed page 6"
  },
  {
    id: "book-016",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "Why is the lodge floor described as an oblong square?",
    choices: ["Its symbolic measurements are 360 degrees east to west and 180 degrees north to south", "Its length must be exactly twice its width", "Its corners represent the four cardinal virtues", "Its shape copies the outer court of King Solomon's Temple"],
    correctAnswer: "Its symbolic measurements are 360 degrees east to west and 180 degrees north to south",
    sourceQuestionNumber: 16,
    sourcePage: 7,
    source: "Freemasonry at a Glance, question 16, printed page 7"
  },
  {
    id: "book-017",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "What does the phrase \"ample form\" mean?",
    choices: ["A lodge is opened or a ceremony is performed in the Grand Master's presence", "Every lodge officer is present and occupying his station", "A lodge is opened with more than the minimum number of members", "A ceremony is performed in its longest authorized form"],
    correctAnswer: "A lodge is opened or a ceremony is performed in the Grand Master's presence",
    sourceQuestionNumber: 17,
    sourcePage: 7,
    source: "Freemasonry at a Glance, question 17, printed page 7"
  },
  {
    id: "book-018",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "hard",
    question: "What traditional explanation is given for calling the north the place of darkness?",
    choices: ["The Temple was said to lie so far north of the ecliptic that the sun and moon illuminated only the east, south, and west", "The north wall of the Temple had no doors or windows", "Ancient builders worked only on the southern side of the Temple", "The North Star was invisible from Jerusalem during the Temple period"],
    correctAnswer: "The Temple was said to lie so far north of the ecliptic that the sun and moon illuminated only the east, south, and west",
    sourceQuestionNumber: 18,
    sourcePage: 7,
    source: "Freemasonry at a Glance, question 18, printed page 7"
  },
  {
    id: "book-019",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "In American Masonic usage, which title is generally given to a Grand Lodge and its Grand Master?",
    choices: ["Most Worshipful, with Pennsylvania noted as an exception", "Right Worshipful in every jurisdiction", "Very Worshipful, with New York noted as an exception", "Illustrious in every jurisdiction"],
    correctAnswer: "Most Worshipful, with Pennsylvania noted as an exception",
    sourceQuestionNumber: 19,
    sourcePage: 7,
    source: "Freemasonry at a Glance, question 19, printed page 7"
  },
  {
    id: "book-020",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "What is a clandestine lodge?",
    choices: ["A lodge claiming to be Masonic but not recognized by a regular Grand Lodge", "A lodge that meets without publishing its schedule", "A lodge that conducts all business in a foreign language", "A lodge temporarily working under dispensation"],
    correctAnswer: "A lodge claiming to be Masonic but not recognized by a regular Grand Lodge",
    sourceQuestionNumber: 20,
    sourcePage: 7,
    source: "Freemasonry at a Glance, question 20, printed page 7"
  },
  {
    id: "book-021",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "Which pairing correctly defines \"Just, Perfect and Regular\" when applied to a lodge?",
    choices: ["Just: furnished with the Three Great Lights; Perfect: has the constitutional number; Regular: works under a Grand Lodge charter or warrant", "Just: all officers present; Perfect: no vacancies; Regular: meets monthly", "Just: debts paid; Perfect: ritual memorized; Regular: minutes approved", "Just: recognized abroad; Perfect: owns a temple; Regular: uses a standard cipher"],
    correctAnswer: "Just: furnished with the Three Great Lights; Perfect: has the constitutional number; Regular: works under a Grand Lodge charter or warrant",
    sourceQuestionNumber: 21,
    sourcePage: 7,
    source: "Freemasonry at a Glance, question 21, printed page 7"
  },
  {
    id: "book-022",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "Which pairing of lodge officers and their jewels is correct?",
    choices: ["Worshipful Master - square; Senior Warden - level; Junior Warden - plumb", "Worshipful Master - level; Senior Warden - square; Junior Warden - compasses", "Worshipful Master - plumb; Senior Warden - cross keys; Junior Warden - level", "Worshipful Master - sun; Senior Warden - moon; Junior Warden - square"],
    correctAnswer: "Worshipful Master - square; Senior Warden - level; Junior Warden - plumb",
    sourceQuestionNumber: 22,
    sourcePage: 7,
    source: "Freemasonry at a Glance, question 22, printed page 7"
  },
  {
    id: "book-023",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Who are the Holy Saints John in Masonic tradition?",
    choices: ["St. John the Baptist and St. John the Evangelist", "St. John Chrysostom and St. John of Damascus", "St. John of the Cross and St. John Fisher", "St. John Cassian and St. John Neumann"],
    correctAnswer: "St. John the Baptist and St. John the Evangelist",
    sourceQuestionNumber: 23,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 23, printed page 8"
  },
  {
    id: "book-024",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Who are the patron saints of Freemasonry?",
    choices: ["St. John the Baptist and St. John the Evangelist", "St. Peter and St. Paul", "St. George and St. Andrew", "St. Thomas and St. James"],
    correctAnswer: "St. John the Baptist and St. John the Evangelist",
    sourceQuestionNumber: 24,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 24, printed page 8"
  },
  {
    id: "book-025",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "What are the festival dates of the Holy Saints John?",
    choices: ["June 24 for the Baptist and December 27 for the Evangelist", "June 27 for the Baptist and December 24 for the Evangelist", "May 1 for the Baptist and November 30 for the Evangelist", "March 25 for the Baptist and September 29 for the Evangelist"],
    correctAnswer: "June 24 for the Baptist and December 27 for the Evangelist",
    sourceQuestionNumber: 25,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 25, printed page 8"
  },
  {
    id: "book-026",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "hard",
    question: "What opinion did Albert G. Mackey express concerning St. John the Evangelist?",
    choices: ["That there was little doubt he was an Essene", "That he was certainly a Roman senator", "That he founded the first operative lodge", "That he designed King Solomon's Temple"],
    correctAnswer: "That there was little doubt he was an Essene",
    sourceQuestionNumber: 26,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 26, printed page 8"
  },
  {
    id: "book-027",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "What is the keyword of the First Degree?",
    choices: ["Obedience", "Fortitude", "Prudence", "Brotherly love"],
    correctAnswer: "Obedience",
    sourceQuestionNumber: 27,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 27, printed page 8"
  },
  {
    id: "book-028",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Which periods of life are associated with the three degrees?",
    choices: ["Youth, maturity, and old age", "Childhood, youth, and maturity", "Education, labor, and retirement", "Birth, marriage, and death"],
    correctAnswer: "Youth, maturity, and old age",
    sourceQuestionNumber: 28,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 28, printed page 8"
  },
  {
    id: "book-029",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "What is one of the earliest lessons taught to a candidate?",
    choices: ["That all men are equal", "That rank determines moral worth", "That wealth is evidence of merit", "That age alone confers wisdom"],
    correctAnswer: "That all men are equal",
    sourceQuestionNumber: 29,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 29, printed page 8"
  },
  {
    id: "book-030",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "Which virtues are developed by secrecy?",
    choices: ["Self-discipline, reticence, self-command, and self-reliance", "Faith, hope, charity, and justice", "Prudence, temperance, fortitude, and mercy", "Industry, economy, punctuality, and obedience"],
    correctAnswer: "Self-discipline, reticence, self-command, and self-reliance",
    sourceQuestionNumber: 30,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 30, printed page 8"
  },
  {
    id: "book-031",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "What does the rite of discalceation—the removal of footwear—denote?",
    choices: ["Reverence", "Poverty", "Mourning", "Equality"],
    correctAnswer: "Reverence",
    sourceQuestionNumber: 31,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 31, printed page 8"
  },
  {
    id: "book-032",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "What do three knocks represent?",
    choices: ["Ask, seek, knock", "Faith, hope, charity", "Youth, maturity, age", "Wisdom, strength, beauty"],
    correctAnswer: "Ask, seek, knock",
    sourceQuestionNumber: 32,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 32, printed page 8"
  },
  {
    id: "book-033",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Which pairing gives the meanings of Jachin and Boaz?",
    choices: ["Jachin: God will establish; Boaz: in strength", "Jachin: in strength; Boaz: God will establish", "Jachin: wisdom; Boaz: beauty", "Jachin: fidelity; Boaz: truth"],
    correctAnswer: "Jachin: God will establish; Boaz: in strength",
    sourceQuestionNumber: 33,
    sourcePage: 8,
    source: "Freemasonry at a Glance, question 33, printed page 8"
  },
  {
    id: "book-034",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "What are the \"arts, parts and points\" of Freemasonry?",
    choices: ["The rules and regulations of the Craft and the obligation to live morally", "The liberal arts, operative trades, and cardinal virtues", "The officers, stations, and furniture of a lodge", "The signs, tokens, and modes of recognition"],
    correctAnswer: "The rules and regulations of the Craft and the obligation to live morally",
    sourceQuestionNumber: 34,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 34, printed page 9"
  },
  {
    id: "book-035",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "What does the breast symbolize?",
    choices: ["Love, faithfulness, purity, and character", "Wisdom, strength, beauty, and truth", "Silence, secrecy, fidelity, and courage", "Charity, relief, truth, and hope"],
    correctAnswer: "Love, faithfulness, purity, and character",
    sourceQuestionNumber: 35,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 35, printed page 9"
  },
  {
    id: "book-036",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "What is the symbolic length of the cable tow?",
    choices: ["The scope of a person's reasonable ability", "Exactly three miles", "The distance from the lodge to one's home", "The length of the lodge from east to west"],
    correctAnswer: "The scope of a person's reasonable ability",
    sourceQuestionNumber: 36,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 36, printed page 9"
  },
  {
    id: "book-037",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "What does the cable tow symbolize?",
    choices: ["The sacredness of a vow", "The length of human life", "The bond between two lodges", "The limits of operative labor"],
    correctAnswer: "The sacredness of a vow",
    sourceQuestionNumber: 37,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 37, printed page 9"
  },
  {
    id: "book-038",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "hard",
    question: "Which groups used the cable tow in religious ceremonies outside Freemasonry?",
    choices: ["Druids, Brahmins, and Greeks", "Romans, Persians, and Norse", "Egyptians, Phoenicians, and Celts", "Hebrews, Babylonians, and Chinese"],
    correctAnswer: "Druids, Brahmins, and Greeks",
    sourceQuestionNumber: 38,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 38, printed page 9"
  },
  {
    id: "book-039",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "hard",
    question: "Which list contains the symbolic interpretations of circumambulation?",
    choices: ["A mystic journey; the sun's course; civilization's development; Masonic progress", "The four seasons; the four elements; the four virtues; the four directions", "Birth; education; labor; death", "Pilgrimage; exile; warfare; homecoming"],
    correctAnswer: "A mystic journey; the sun's course; civilization's development; Masonic progress",
    sourceQuestionNumber: 39,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 39, printed page 9"
  },
  {
    id: "book-040",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "hard",
    question: "In the physiological interpretation of \"the silver cord be loosed,\" what does the golden bowl represent?",
    choices: ["The brain", "The heart", "The spinal marrow", "The great artery"],
    correctAnswer: "The brain",
    sourceQuestionNumber: 40,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 40, printed page 9"
  },
  {
    id: "book-041",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "Why does the Mason face east?",
    choices: ["Light comes from the east, symbolizing willingness to accept truth", "The Grand Lodge is always geographically east of the lodge", "The altar must be placed against the eastern wall", "Ancient builders began every project on its eastern side"],
    correctAnswer: "Light comes from the east, symbolizing willingness to accept truth",
    sourceQuestionNumber: 41,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 41, printed page 9"
  },
  {
    id: "book-042",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "hard",
    question: "Which biblical passage is cited as authority for facing east?",
    choices: ["Ezekiel 43:2", "Genesis 1:3", "Psalm 133:1", "Matthew 7:7"],
    correctAnswer: "Ezekiel 43:2",
    sourceQuestionNumber: 42,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 42, printed page 9"
  },
  {
    id: "book-043",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "In what form are altars built?",
    choices: ["A cube", "A triangle", "A circle", "An oblong square"],
    correctAnswer: "A cube",
    sourceQuestionNumber: 43,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 43, printed page 9"
  },
  {
    id: "book-044",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "To which mythological god was the cube sacred?",
    choices: ["Apollo", "Zeus", "Hermes", "Ares"],
    correctAnswer: "Apollo",
    sourceQuestionNumber: 44,
    sourcePage: 9,
    source: "Freemasonry at a Glance, question 44, printed page 9"
  },
  {
    id: "book-045",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "What is symbolized by placing the altar in the center of the lodge?",
    choices: ["Masonry is not a religion but offers worship in which all men can unite", "The altar marks the exact center of King Solomon's Temple", "Every officer must be equally distant from the altar", "The altar represents the sun at the center of the universe"],
    correctAnswer: "Masonry is not a religion but offers worship in which all men can unite",
    sourceQuestionNumber: 45,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 45, printed page 10"
  },
  {
    id: "book-046",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "hard",
    question: "Historically, was an altar used in English Craft Lodges?",
    choices: ["No", "Yes, in every lodge", "Only in lodges meeting outdoors", "Only when the Grand Master was present"],
    correctAnswer: "No",
    sourceQuestionNumber: 46,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 46, printed page 10"
  },
  {
    id: "book-047",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "hard",
    question: "Why were ancient altars provided with horns?",
    choices: ["A fugitive clinging to them could claim sanctuary", "They held lamps used during sacrifices", "They represented the four cardinal points", "They supported the canopy above the altar"],
    correctAnswer: "A fugitive clinging to them could claim sanctuary",
    sourceQuestionNumber: 47,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 47, printed page 10"
  },
  {
    id: "book-048",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "medium",
    question: "Where are the \"fixed lights\" located?",
    choices: ["East, west, and south", "East, west, and north", "North, south, and east", "North, south, and west"],
    correctAnswer: "East, west, and south",
    sourceQuestionNumber: 48,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 48, printed page 10"
  },
  {
    id: "book-049",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "easy",
    question: "What is the distinction between \"compass\" and \"compasses\"?",
    choices: ["Compass indicates cardinal points; compasses names the geometrical instrument", "Compass names the instrument; compasses indicates cardinal points", "Compass is singular and compasses is merely its plural", "Compass is operative and compasses is speculative"],
    correctAnswer: "Compass indicates cardinal points; compasses names the geometrical instrument",
    sourceQuestionNumber: 49,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 49, printed page 10"
  },
  {
    id: "book-050",
    category: "The Mason, the Lodge, and the Entered Apprentice Degree",
    difficulty: "hard",
    question: "Which pairing of cardinal points and their meanings is correct?",
    choices: ["East - Wisdom; West - Strength; South - Beauty; North - Darkness", "East - Strength; West - Wisdom; South - Darkness; North - Beauty", "East - Beauty; West - Darkness; South - Wisdom; North - Strength", "East - Darkness; West - Beauty; South - Strength; North - Wisdom"],
    correctAnswer: "East - Wisdom; West - Strength; South - Beauty; North - Darkness",
    sourceQuestionNumber: 50,
    sourcePage: 10,
    source: "Freemasonry at a Glance, question 50, printed page 10"
  }
];
