/*
  FELLOW CRAFT DEGREE QUESTION BANK - SET 1

  Maintenance rules:
  - Give every question a unique id.
  - Include exactly four different choices.
  - The correctAnswer must exactly match one of the choices.
  - Use difficulty: "easy", "medium", or "hard".
  - source, sourceUrl, and verified are private maintenance notes.
*/

const QUESTION_BANK = [
  {
    id: "fc-street-001",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which stage of life is traditionally represented by the Fellow Craft Degree?",
    choices: ["Manhood", "Infancy", "Old age", "The afterlife"],
    correctAnswer: "Manhood",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 4",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-002",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "In the traditional life allegory of the three degrees, what does the Entered Apprentice represent?",
    choices: ["Youth", "Manhood", "Old age", "Death"],
    correctAnswer: "Youth",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 4",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-003",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "In the traditional life allegory of the three degrees, what does the Master Mason represent?",
    choices: ["Old age", "Youth", "Early manhood", "Childhood"],
    correctAnswer: "Old age",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 4, 7",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-004",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "What is the central intellectual theme of the Fellow Craft Degree?",
    choices: ["The pursuit of knowledge", "The accumulation of wealth", "The exercise of political power", "The study of warfare"],
    correctAnswer: "The pursuit of knowledge",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 8-9",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-005",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "How is a candidate for the Fellow Craft Degree commonly regarded?",
    choices: ["As a seeker after knowledge", "As a ruler over the Craft", "As an operative architect", "As one whose education is complete"],
    correctAnswer: "As a seeker after knowledge",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 8",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-006",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which three working tools are associated with the Fellow Craft in this tradition?",
    choices: ["Plumb, square, and level", "Gavel, gauge, and chisel", "Compasses, trowel, and skirret", "Rule, maul, and pencil"],
    correctAnswer: "Plumb, square, and level",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 10",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-007",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which working tool tests whether a wall is upright?",
    choices: ["Plumb", "Level", "Square", "Compasses"],
    correctAnswer: "Plumb",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 10",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-008",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which working tool is used to establish a horizontal plane?",
    choices: ["Level", "Plumb", "Square", "Chisel"],
    correctAnswer: "Level",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 10",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-009",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which working tool helps bring stones to a rectangular shape?",
    choices: ["Square", "Plumb", "Level", "Twenty-four-inch gauge"],
    correctAnswer: "Square",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 10",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-010",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "What are the names of the two great pillars associated with the entrance to Solomon's Temple?",
    choices: ["Boaz and Jachin", "Abyla and Calpe", "Doric and Ionic", "Enoch and Tubal-cain"],
    correctAnswer: "Boaz and Jachin",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 11-12; compare 1 Kings 7:21",
    sourceUrl: "https://www.biblegateway.com/passage/?search=1%20Kings%207%3A15-22&version=KJV",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-011",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Where did the two brazen pillars stand?",
    choices: ["At the porch or entrance of Solomon's Temple", "Inside the Holy of Holies", "At the foot of Mount Sinai", "At the entrance to the king's palace"],
    correctAnswer: "At the porch or entrance of Solomon's Temple",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 11-12; compare 1 Kings 7:21",
    sourceUrl: "https://www.biblegateway.com/passage/?search=1%20Kings%207%3A15-22&version=KJV",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-012",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "What does the Winding Staircase symbolize?",
    choices: ["The difficult upward journey of life", "A retreat from society", "The decline of civilization", "The passage from old age to youth"],
    correctAnswer: "The difficult upward journey of life",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 22",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-013",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which sequence gives the traditional groups of steps in the Winding Staircase?",
    choices: ["Three, five, and seven", "Two, four, and six", "Three, six, and nine", "Five, seven, and nine"],
    correctAnswer: "Three, five, and seven",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 22-24",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-014",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "How many steps are in the traditional three, five, and seven arrangement?",
    choices: ["Fifteen", "Twelve", "Fourteen", "Twenty-one"],
    correctAnswer: "Fifteen",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 23-24",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-015",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "How many human senses are discussed along the symbolic path to knowledge?",
    choices: ["Five", "Three", "Seven", "Nine"],
    correctAnswer: "Five",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 26-28",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-016",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which group contains the three senses described as especially important to operative Masons?",
    choices: ["Hearing, seeing, and feeling", "Taste, smell, and hearing", "Seeing, taste, and smell", "Feeling, taste, and smell"],
    correctAnswer: "Hearing, seeing, and feeling",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 26-27",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-017",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "How many classical orders of architecture are named in the Fellow Craft lesson?",
    choices: ["Five", "Three", "Four", "Seven"],
    correctAnswer: "Five",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 29",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-018",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which list contains the five orders of architecture named in the lesson?",
    choices: ["Tuscan, Doric, Ionic, Corinthian, and Composite", "Egyptian, Greek, Roman, Gothic, and Modern", "Doric, Ionic, Corinthian, Romanesque, and Gothic", "Tuscan, Spartan, Athenian, Corinthian, and Composite"],
    correctAnswer: "Tuscan, Doric, Ionic, Corinthian, and Composite",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 29",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-019",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "How many liberal arts and sciences are traditionally presented in the Fellow Craft Degree?",
    choices: ["Seven", "Five", "Nine", "Twelve"],
    correctAnswer: "Seven",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 30-31",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-020",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which subjects make up the trivium?",
    choices: ["Grammar, rhetoric, and logic", "Arithmetic, geometry, and astronomy", "Music, geometry, and logic", "Grammar, arithmetic, and music"],
    correctAnswer: "Grammar, rhetoric, and logic",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 30-31",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-021",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which subjects make up the quadrivium?",
    choices: ["Arithmetic, geometry, music, and astronomy", "Grammar, rhetoric, logic, and arithmetic", "Geometry, architecture, poetry, and music", "Logic, ethics, music, and astronomy"],
    correctAnswer: "Arithmetic, geometry, music, and astronomy",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 30-31",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-022",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which science receives special emphasis in the Fellow Craft Degree?",
    choices: ["Geometry", "Chemistry", "Biology", "Geology"],
    correctAnswer: "Geometry",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 32-34",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-023",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "In operative Masonry, which workers performed the labor of actual construction?",
    choices: ["Fellow Crafts", "Entered Apprentices alone", "The lodge officers", "Speculative Masons"],
    correctAnswer: "Fellow Crafts",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 10",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-024",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "What are the traditional wages of a Fellow Craft?",
    choices: ["Corn, wine, and oil", "Gold, silver, and bronze", "Bread, water, and salt", "Stone, timber, and iron"],
    correctAnswer: "Corn, wine, and oil",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 35",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-025",
    category: "Fellow Craft Degree",
    difficulty: "easy",
    question: "Which symbolic meanings are assigned to corn, wine, and oil in this interpretation?",
    choices: ["Plenty, health, and peace", "Strength, wisdom, and beauty", "Faith, hope, and charity", "Youth, manhood, and age"],
    correctAnswer: "Plenty, health, and peace",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 35. Symbolic meanings vary among Masonic sources and jurisdictions.",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-026",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "Why are degree ceremonies necessarily brief?",
    choices: ["Time is limited and the candidate should not be overburdened", "Every symbol has only one simple meaning", "Long ceremonies are forbidden by ancient law", "The lessons are intended only for lodge officers"],
    correctAnswer: "Time is limited and the candidate should not be overburdened",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 1",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-027",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "Why can experiencing a degree once provide only an incomplete understanding of it?",
    choices: ["Its deeper symbolic lessons require later study and reflection", "Only the officers are permitted to understand it", "Its language has no symbolic meaning", "The ceremony intentionally omits every moral lesson"],
    correctAnswer: "Its deeper symbolic lessons require later study and reflection",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 1-2",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-028",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "How do Masonic mysteries differ from Masonic secrets?",
    choices: ["Mysteries require continuing study, while secrets may simply be communicated", "Mysteries are public, while secrets have no meaning", "Mysteries belong only to operative Masonry", "There is no distinction between the terms"],
    correctAnswer: "Mysteries require continuing study, while secrets may simply be communicated",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 2",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-029",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "What does the lodge represent in the broad allegory of human life?",
    choices: ["The world in which humanity lives and acts", "Only Solomon's Temple as a physical building", "A single nation or government", "The private home of the candidate"],
    correctAnswer: "The world in which humanity lives and acts",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 3",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-030",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "What does the Entered Apprentice's initial condition symbolize in the life allegory?",
    choices: ["The helpless and uninstructed condition of a newborn child", "The independence of mature adulthood", "The authority of a lodge officer", "The wisdom traditionally associated with old age"],
    correctAnswer: "The helpless and uninstructed condition of a newborn child",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 4-5",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-031",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "What lesson is taught by placing the Entered Apprentice in the northeast corner?",
    choices: ["A sound moral foundation should support the future structure of one's life", "Intellectual study should replace moral instruction", "The candidate has completed the entire Masonic journey", "Material success is the chief purpose of Masonry"],
    correctAnswer: "A sound moral foundation should support the future structure of one's life",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 6",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-032",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "Why are moral lessons repeated before the Fellow Craft's intellectual studies?",
    choices: ["Knowledge and success should never be purchased by sacrificing integrity", "The Fellow Craft Degree has no separate intellectual purpose", "Moral conduct matters only during youth", "The liberal arts are considered morally dangerous"],
    correctAnswer: "Knowledge and success should never be purchased by sacrificing integrity",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 8",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-033",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "What practical lesson follows from comparing the human body to a temple?",
    choices: ["The body should be kept clean and protected from harmful excess", "Physical health is unrelated to moral conduct", "The body is less important than any material building", "Only architects are responsible for bodily discipline"],
    correctAnswer: "The body should be kept clean and protected from harmful excess",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 6-7",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-034",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "Why are the plumb, square, and level especially appropriate to the operative Fellow Craft?",
    choices: ["They were constantly needed in laying courses, raising walls, and shaping stones", "They were used only to design stained-glass windows", "They belonged exclusively to priests and kings", "They served no practical purpose in construction"],
    correctAnswer: "They were constantly needed in laying courses, raising walls, and shaping stones",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 10",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-035",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "What combined meaning is traditionally drawn from the names Jachin and Boaz?",
    choices: ["In strength God will establish His house", "Wisdom alone will conquer every nation", "The Temple will stand without labor", "Knowledge is greater than virtue"],
    correctAnswer: "In strength God will establish His house",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 12. This is a traditional Masonic synthesis of the pillar names.",
    sourceUrl: "https://www.biblegateway.com/passage/?search=1%20Kings%207%3A15-22&version=KJV",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-036",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "Why is the identification of the pillar ornaments as terrestrial and celestial globes considered a later interpretation?",
    choices: ["A spherical Earth was not generally accepted in the period associated with Solomon's Temple", "Ancient builders never used round ornaments", "The pillars were believed to be made of wood", "Astronomy did not exist in the ancient world"],
    correctAnswer: "A spherical Earth was not generally accepted in the period associated with Solomon's Temple",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 12. Wording limited to the historical development of the specific Masonic globe interpretation.",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-037",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "What does 1 Kings describe on the tops of the two pillars?",
    choices: ["Bronze capitals decorated with lily-work", "Marble globes marked with continents", "Golden crowns bearing twelve stars", "Wooden spheres containing sacred scrolls"],
    correctAnswer: "Bronze capitals decorated with lily-work",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 12-13; 1 Kings 7:16-22",
    sourceUrl: "https://www.biblegateway.com/passage/?search=1%20Kings%207%3A15-22&version=KJV",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-038",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "What does the lily or lotus ornament symbolize in this interpretation?",
    choices: ["Peace", "War", "Silence", "Grief"],
    correctAnswer: "Peace",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 14-15. This is the author's symbolic interpretation, not a universal historical meaning.",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-039",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "Why is an endless network pattern used as an emblem of unity?",
    choices: ["Its interwoven design has no visible beginning or end", "It is made from a single straight line", "It separates every element from the others", "It can be produced only from precious metals"],
    correctAnswer: "Its interwoven design has no visible beginning or end",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 15",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-040",
    category: "Fellow Craft Degree",
    difficulty: "medium",
    question: "Why is the pomegranate used as a symbol of plenty?",
    choices: ["It contains a great number of seeds", "It grows only beside temples", "Its skin resembles a builder's tool", "It was the only fruit known to ancient peoples"],
    correctAnswer: "It contains a great number of seeds",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 16-17. Presented as a traditional symbolic explanation.",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-041",
    category: "Fellow Craft Degree",
    difficulty: "hard",
    question: "What distinction separates operative Masonry from speculative Masonry?",
    choices: ["Operative Masonry constructs material buildings; speculative Masonry applies building imagery to life and character", "Operative Masonry studies philosophy; speculative Masonry cuts only physical stone", "Operative Masonry is modern; speculative Masonry existed only in antiquity", "Operative Masonry uses symbols; speculative Masonry rejects all symbols"],
    correctAnswer: "Operative Masonry constructs material buildings; speculative Masonry applies building imagery to life and character",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 17",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-042",
    category: "Fellow Craft Degree",
    difficulty: "hard",
    question: "Which two headlands were known in antiquity as the Pillars of Hercules?",
    choices: ["Calpe and Abyla", "Boaz and Jachin", "Rhodes and Cyprus", "Sinai and Moriah"],
    correctAnswer: "Calpe and Abyla",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 11. Calpe is Gibraltar; Abyla is commonly associated with a North African promontory across the strait.",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-043",
    category: "Fellow Craft Degree",
    difficulty: "hard",
    question: "Which Hebrew letter has been proposed by some Masonic writers as an earlier counterpart to the letter G?",
    choices: ["Yod", "Aleph", "Beth", "Shin"],
    correctAnswer: "Yod",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 31. Qualified because this is a claim made by some Masonic writers, not a settled historical conclusion.",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-044",
    category: "Fellow Craft Degree",
    difficulty: "hard",
    question: "Why did the number fifteen carry sacred significance in the Hebrew-letter interpretation discussed with the Winding Staircase?",
    choices: ["The Hebrew letters in the short divine name Yah have numerical values totaling fifteen", "The Hebrew alphabet contains only fifteen letters", "Solomon's Temple had exactly fifteen rooms", "Every ancient lodge had fifteen officers"],
    correctAnswer: "The Hebrew letters in the short divine name Yah have numerical values totaling fifteen",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 23. Yod = 10 and he = 5.",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-045",
    category: "Fellow Craft Degree",
    difficulty: "hard",
    question: "Why did Vitruvius recommend an odd number of steps before a temple?",
    choices: ["A worshipper beginning with the right foot would reach the temple level with the right foot", "Odd-numbered stairways required less stone", "The final step always faced east", "Even numbers were unknown to Roman builders"],
    correctAnswer: "A worshipper beginning with the right foot would reach the temple level with the right foot",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 24; verified against Vitruvius, De architectura, Book III, Chapter IV, section 4",
    sourceUrl: "https://www.gutenberg.org/files/20239/20239-h/20239-h.htm",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-046",
    category: "Fellow Craft Degree",
    difficulty: "hard",
    question: "What did the ancient 'science of numbers' primarily concern?",
    choices: ["Philosophical and symbolic meanings assigned to numbers", "Techniques for rapid commercial bookkeeping", "Methods of measuring only land and buildings", "A calendar based entirely on prime numbers"],
    correctAnswer: "Philosophical and symbolic meanings assigned to numbers",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 23",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-047",
    category: "Fellow Craft Degree",
    difficulty: "hard",
    question: "Which body of Jewish mystical interpretation is associated with symbolic numerical values assigned to Hebrew letters?",
    choices: ["Kabbalah", "Talmud", "Midrash alone", "Septuagint"],
    correctAnswer: "Kabbalah",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 23. Modern spelling normalized from 'Kabala.'",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-048",
    category: "Fellow Craft Degree",
    difficulty: "hard",
    question: "Which philosopher was traditionally associated with teaching that number is the principle of all things?",
    choices: ["Pythagoras", "Socrates", "Aristotle", "Epicurus"],
    correctAnswer: "Pythagoras",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 23. Attribution is part of the Pythagorean tradition.",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-049",
    category: "Fellow Craft Degree",
    difficulty: "hard",
    question: "Why can surviving architecture be especially valuable to the study of ancient peoples?",
    choices: ["Buildings can endure as records after many written works have perished", "Buildings reveal every spoken language without interpretation", "Architecture eliminates the need for all other historical evidence", "Ancient buildings were never altered or damaged"],
    correctAnswer: "Buildings can endure as records after many written works have perished",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content p. 29",
    sourceUrl: "",
    verified: "2026-08-05"
  },
  {
    id: "fc-street-050",
    category: "Fellow Craft Degree",
    difficulty: "hard",
    question: "What did mastery of both the trivium and quadrivium signify in medieval education?",
    choices: ["Command of the principal fields then understood as liberal learning", "Qualification to serve as a military commander", "Completion of training in a single building trade", "Authority to replace both church and state officials"],
    correctAnswer: "Command of the principal fields then understood as liberal learning",
    source: "Oliver Day Street, Symbolism of the Three Degrees, Part Two, Questions for Discussion; content pp. 30-31",
    sourceUrl: "",
    verified: "2026-08-05"
  }
];
