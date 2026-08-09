/*
  MASONIC HISTORY QUESTION BANK

  Maintenance rules:
  - Give every question a unique id.
  - Include exactly four different choices.
  - The correctAnswer must exactly match one of the choices.
  - Use difficulty: "easy", "medium", or "hard".
  - source, sourceUrl, and verified are private maintenance notes.
*/

const QUESTION_BANK = [
  {
    id: "history-001",
    category: "Masonic History",
    difficulty: "easy",
    question: "In what year was the first Grand Lodge established in London?",
    choices: ["1696", "1717", "1723", "1736"],
    correctAnswer: "1717",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-002",
    category: "Masonic History",
    difficulty: "easy",
    question: "How many London lodges united to form the first Grand Lodge in 1717?",
    choices: ["Three", "Four", "Five", "Seven"],
    correctAnswer: "Four",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-003",
    category: "Masonic History",
    difficulty: "easy",
    question: "At which London tavern was the first Grand Lodge formed?",
    choices: ["Goose and Gridiron", "Crown and Anchor", "King's Arms", "White Hart"],
    correctAnswer: "Goose and Gridiron",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-004",
    category: "Masonic History",
    difficulty: "easy",
    question: "Who was elected the first Grand Master of the Grand Lodge formed in 1717?",
    choices: ["James Anderson", "Anthony Sayer", "Laurence Dermott", "William Preston"],
    correctAnswer: "Anthony Sayer",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-005",
    category: "Masonic History",
    difficulty: "easy",
    question: "The first Grand Lodge was formed on which traditional feast day?",
    choices: ["St. George's Day", "St. Andrew's Day", "St. John the Baptist's Day", "Christmas Day"],
    correctAnswer: "St. John the Baptist's Day",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-006",
    category: "Masonic History",
    difficulty: "easy",
    question: "What important Masonic rulebook was first published in 1723?",
    choices: ["The Constitutions of the Free-Masons", "Ahiman Rezon", "The Old Charges", "Illustrations of Masonry"],
    correctAnswer: "The Constitutions of the Free-Masons",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "history-007",
    category: "Masonic History",
    difficulty: "easy",
    question: "Who compiled The Constitutions of the Free-Masons published in 1723?",
    choices: ["James Anderson", "Anthony Sayer", "Benjamin Franklin", "John Desaguliers"],
    correctAnswer: "James Anderson",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "history-008",
    category: "Masonic History",
    difficulty: "easy",
    question: "Which Freemason published the first American edition of Anderson's Constitutions?",
    choices: ["George Washington", "Benjamin Franklin", "Paul Revere", "John Hancock"],
    correctAnswer: "Benjamin Franklin",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "history-009",
    category: "Masonic History",
    difficulty: "easy",
    question: "In what year was Benjamin Franklin's American edition of Anderson's Constitutions published?",
    choices: ["1723", "1725", "1734", "1751"],
    correctAnswer: "1734",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "history-010",
    category: "Masonic History",
    difficulty: "easy",
    question: "By what year had the Grand Lodge of Ireland come into being?",
    choices: ["1717", "1725", "1736", "1751"],
    correctAnswer: "1725",
    source: "Grand Lodge of Ireland — About Grand Lodge",
    sourceUrl: "https://freemason.ie/about-grand-lodge/",
    verified: "2026-08-03"
  },
  {
    id: "history-011",
    category: "Masonic History",
    difficulty: "easy",
    question: "In what year was the Grand Lodge of Scotland founded?",
    choices: ["1717", "1725", "1736", "1813"],
    correctAnswer: "1736",
    source: "Grand Lodge of Scotland — Our History",
    sourceUrl: "https://www.grandlodgescotland.com/our-history-2/",
    verified: "2026-08-03"
  },
  {
    id: "history-012",
    category: "Masonic History",
    difficulty: "easy",
    question: "What name was given to the rival English Grand Lodge established in 1751?",
    choices: ["The Antients", "The Operatives", "The Accepted", "The Royalists"],
    correctAnswer: "The Antients",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-013",
    category: "Masonic History",
    difficulty: "easy",
    question: "What nickname did the Antients give the original English Grand Lodge?",
    choices: ["The Moderns", "The Premieres", "The Speculatives", "The Londoners"],
    correctAnswer: "The Moderns",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-014",
    category: "Masonic History",
    difficulty: "easy",
    question: "What organization was created when the Antients and Moderns united in 1813?",
    choices: ["United Grand Lodge of England", "Grand Lodge of Great Britain", "Supreme Council of England", "Grand Orient of England"],
    correctAnswer: "United Grand Lodge of England",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-015",
    category: "Masonic History",
    difficulty: "easy",
    question: "In what year did the Antients and Moderns unite?",
    choices: ["1751", "1775", "1813", "1815"],
    correctAnswer: "1813",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-016",
    category: "Masonic History",
    difficulty: "easy",
    question: "Which early English speculative Mason recorded his initiation at Warrington in 1646?",
    choices: ["Elias Ashmole", "James Anderson", "Laurence Dermott", "William Schaw"],
    correctAnswer: "Elias Ashmole",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-017",
    category: "Masonic History",
    difficulty: "easy",
    question: "In which country are the oldest surviving minutes of a still-existing Masonic lodge found?",
    choices: ["Scotland", "England", "Ireland", "France"],
    correctAnswer: "Scotland",
    source: "Lodge of Edinburgh (Mary's Chapel) No. 1 — Home",
    sourceUrl: "https://www.lodgeofedinburgh.org.uk/",
    verified: "2026-08-03"
  },
  {
    id: "history-018",
    category: "Masonic History",
    difficulty: "easy",
    question: "Which lodge preserves minutes dating to July 1599?",
    choices: ["Lodge of Edinburgh (Mary's Chapel) No. 1", "Lodge of Antiquity No. 2", "Fredericksburg Lodge No. 4", "African Lodge No. 459"],
    correctAnswer: "Lodge of Edinburgh (Mary's Chapel) No. 1",
    source: "Lodge of Edinburgh (Mary's Chapel) No. 1 — Home",
    sourceUrl: "https://www.lodgeofedinburgh.org.uk/",
    verified: "2026-08-03"
  },
  {
    id: "history-019",
    category: "Masonic History",
    difficulty: "easy",
    question: "In which Virginia lodge did George Washington receive his Masonic degrees?",
    choices: ["Fredericksburg Lodge", "Alexandria Lodge", "Williamsburg Lodge", "Richmond Lodge"],
    correctAnswer: "Fredericksburg Lodge",
    source: "George Washington Masonic National Memorial — George Washington, the Mason",
    sourceUrl: "https://gwmemorial.org/pages/george-washington-the-mason",
    verified: "2026-08-03"
  },
  {
    id: "history-020",
    category: "Masonic History",
    difficulty: "easy",
    question: "In what year was George Washington initiated as an Entered Apprentice?",
    choices: ["1732", "1752", "1776", "1793"],
    correctAnswer: "1752",
    source: "George Washington Masonic National Memorial — George Washington, the Mason",
    sourceUrl: "https://gwmemorial.org/pages/george-washington-the-mason",
    verified: "2026-08-03"
  },
  {
    id: "history-021",
    category: "Masonic History",
    difficulty: "easy",
    question: "The cornerstone of which building did George Washington ceremonially lay in 1793?",
    choices: ["United States Capitol", "White House", "Washington Monument", "Mount Vernon"],
    correctAnswer: "United States Capitol",
    source: "George Washington Masonic National Memorial — George Washington, the Mason",
    sourceUrl: "https://gwmemorial.org/pages/george-washington-the-mason",
    verified: "2026-08-03"
  },
  {
    id: "history-022",
    category: "Masonic History",
    difficulty: "easy",
    question: "In what year were Prince Hall and fourteen other Black men initiated into Freemasonry?",
    choices: ["1752", "1775", "1784", "1808"],
    correctAnswer: "1775",
    source: "Prince Hall Grand Lodge of Massachusetts — African Lodge 459",
    sourceUrl: "https://princehall.org/african-lodge-459/",
    verified: "2026-08-03"
  },
  {
    id: "history-023",
    category: "Masonic History",
    difficulty: "easy",
    question: "What was the name and number of the lodge chartered for Prince Hall and his associates?",
    choices: ["African Lodge No. 459", "Hiram Lodge No. 3", "Union Lodge No. 2", "Boston Lodge No. 1"],
    correctAnswer: "African Lodge No. 459",
    source: "Prince Hall Grand Lodge of Massachusetts — African Lodge 459",
    sourceUrl: "https://princehall.org/african-lodge-459/",
    verified: "2026-08-03"
  },
  {
    id: "history-024",
    category: "Masonic History",
    difficulty: "easy",
    question: "In what year did the Grand Lodge of England issue the charter for African Lodge No. 459?",
    choices: ["1775", "1776", "1784", "1808"],
    correctAnswer: "1784",
    source: "Prince Hall Grand Lodge of Massachusetts — African Lodge 459",
    sourceUrl: "https://princehall.org/african-lodge-459/",
    verified: "2026-08-03"
  },
  {
    id: "history-025",
    category: "Masonic History",
    difficulty: "easy",
    question: "What was Freemasons' Hall in London originally called when built after the First World War?",
    choices: ["Masonic Peace Memorial", "United Lodge Memorial", "Temple of Brotherhood", "Grand Charity Hall"],
    correctAnswer: "Masonic Peace Memorial",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },

  {
    id: "history-026",
    category: "Masonic History",
    difficulty: "medium",
    question: "Which description best reflects the historically supported origin of modern Freemasonry?",
    choices: ["It was influenced by the customs and imagery of medieval stonemasons", "It was founded by the Knights Templar in 1118", "It began in ancient Egypt under a single pharaoh", "It was created by the Rosicrucians in 1614"],
    correctAnswer: "It was influenced by the customs and imagery of medieval stonemasons",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-027",
    category: "Masonic History",
    difficulty: "medium",
    question: "Why is Elias Ashmole's 1646 diary entry important to Masonic history?",
    choices: ["It is the first recorded evidence of an English speculative Mason's initiation", "It contains the first Grand Lodge constitution", "It records the union of the Antients and Moderns", "It grants the charter of African Lodge"],
    correctAnswer: "It is the first recorded evidence of an English speculative Mason's initiation",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-028",
    category: "Masonic History",
    difficulty: "medium",
    question: "Besides rules and ancient charges, what did the 1723 Constitutions include?",
    choices: ["A legendary history and songs", "Architectural blueprints and wage tables", "Membership lists for every English lodge", "A catalogue of medieval cathedrals"],
    correctAnswer: "A legendary history and songs",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "history-029",
    category: "Masonic History",
    difficulty: "medium",
    question: "What was the title of the Antients Grand Lodge's book of constitutions?",
    choices: ["Ahiman Rezon", "The Old Charges", "The Book of the Craft", "Masonry Dissected"],
    correctAnswer: "Ahiman Rezon",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "history-030",
    category: "Masonic History",
    difficulty: "medium",
    question: "Who became the influential Grand Secretary of the Antients Grand Lodge?",
    choices: ["Laurence Dermott", "James Anderson", "Anthony Sayer", "Elias Ashmole"],
    correctAnswer: "Laurence Dermott",
    source: "United Grand Lodge of England — Laurence Dermott",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/blog/freemasonry-charitable-origins",
    verified: "2026-08-03"
  },
  {
    id: "history-031",
    category: "Masonic History",
    difficulty: "medium",
    question: "Many founders of the Antients Grand Lodge in London came from which Masonic backgrounds?",
    choices: ["Irish and Scottish", "French and Spanish", "Dutch and Belgian", "American and Canadian"],
    correctAnswer: "Irish and Scottish",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-032",
    category: "Masonic History",
    difficulty: "medium",
    question: "Approximately how long did the Antients and Moderns exist side by side before uniting?",
    choices: ["About 25 years", "About 40 years", "About 63 years", "About 100 years"],
    correctAnswer: "About 63 years",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-033",
    category: "Masonic History",
    difficulty: "medium",
    question: "Which document formally united the two rival English Grand Lodges in 1813?",
    choices: ["Articles of Union", "Schaw Statutes", "Ancient Charges", "Preston Lectures"],
    correctAnswer: "Articles of Union",
    source: "Museum of Freemasonry — Digital Tour",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/blog/digital-tour-museum-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-034",
    category: "Masonic History",
    difficulty: "medium",
    question: "What was one major result of the 1813 union of the English Grand Lodges?",
    choices: ["Greater standardization of ritual, procedures, and regalia", "The abolition of the three Craft degrees", "The closure of every lodge outside London", "The end of charitable activity"],
    correctAnswer: "Greater standardization of ritual, procedures, and regalia",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-035",
    category: "Masonic History",
    difficulty: "medium",
    question: "Since what year has Great Queen Street been the home of English Freemasonry?",
    choices: ["1717", "1751", "1775", "1813"],
    correctAnswer: "1775",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-036",
    category: "Masonic History",
    difficulty: "medium",
    question: "Which Bible did George Washington use when taking the presidential oath of office?",
    choices: ["A Bible from St. John's Lodge No. 1 in New York", "The Washington family Bible from Mount Vernon", "A Bible from Fredericksburg Lodge", "Benjamin Franklin's personal Bible"],
    correctAnswer: "A Bible from St. John's Lodge No. 1 in New York",
    source: "George Washington Masonic National Memorial — George Washington, the Mason",
    sourceUrl: "https://gwmemorial.org/pages/george-washington-the-mason",
    verified: "2026-08-03"
  },
  {
    id: "history-037",
    category: "Masonic History",
    difficulty: "medium",
    question: "Of which lodge did George Washington become charter Master after the American Revolution?",
    choices: ["Alexandria Lodge No. 22", "Fredericksburg Lodge No. 4", "St. John's Lodge No. 1", "Williamsburg Lodge No. 6"],
    correctAnswer: "Alexandria Lodge No. 22",
    source: "George Washington Masonic National Memorial — George Washington, the Mason",
    sourceUrl: "https://gwmemorial.org/pages/george-washington-the-mason",
    verified: "2026-08-03"
  },
  {
    id: "history-038",
    category: "Masonic History",
    difficulty: "medium",
    question: "What office was Prince Hall appointed to in 1791?",
    choices: ["Provincial Grand Master", "Grand Secretary of England", "Grand Master of Ireland", "Master of Fredericksburg Lodge"],
    correctAnswer: "Provincial Grand Master",
    source: "Prince Hall Grand Lodge of Massachusetts — African Lodge 459",
    sourceUrl: "https://princehall.org/african-lodge-459/",
    verified: "2026-08-03"
  },
  {
    id: "history-039",
    category: "Masonic History",
    difficulty: "medium",
    question: "Which body was formed in 1808 by lodges in Boston, Philadelphia, and Providence?",
    choices: ["African Grand Lodge", "United Grand Lodge of America", "Grand Lodge of Massachusetts", "National Compact Grand Lodge"],
    correctAnswer: "African Grand Lodge",
    source: "Prince Hall Grand Lodge of Massachusetts — African Lodge 459",
    sourceUrl: "https://princehall.org/african-lodge-459/",
    verified: "2026-08-03"
  },
  {
    id: "history-040",
    category: "Masonic History",
    difficulty: "medium",
    question: "Why was the African Grand Lodge renamed the Prince Hall Grand Lodge in 1847?",
    choices: ["To honor its founding father and first Grand Master", "To mark a union with the Grand Lodge of England", "To recognize a move from Boston to Philadelphia", "To celebrate the end of the Civil War"],
    correctAnswer: "To honor its founding father and first Grand Master",
    source: "Prince Hall Grand Lodge of Massachusetts — African Lodge 459",
    sourceUrl: "https://princehall.org/african-lodge-459/",
    verified: "2026-08-03"
  },

  {
    id: "history-041",
    category: "Masonic History",
    difficulty: "hard",
    question: "What is the exact date traditionally recognized for the formation of the first Grand Lodge?",
    choices: ["24 June 1717", "27 December 1717", "24 June 1723", "17 July 1751"],
    correctAnswer: "24 June 1717",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-042",
    category: "Masonic History",
    difficulty: "hard",
    question: "In whose churchyard was the Goose and Gridiron Tavern located?",
    choices: ["St. Paul's", "St. Peter's", "St. George's", "St. Martin's"],
    correctAnswer: "St. Paul's",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-043",
    category: "Masonic History",
    difficulty: "hard",
    question: "Which publishers produced The Constitutions of the Free-Masons in 1723?",
    choices: ["Senex and Hooke", "Smith and Maxwell", "Dermott and Preston", "Franklin and Hall"],
    correctAnswer: "Senex and Hooke",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "history-044",
    category: "Masonic History",
    difficulty: "hard",
    question: "Where were editions of Anderson's Constitutions published in 1730?",
    choices: ["Ireland and the Netherlands", "France and Germany", "Spain and Portugal", "Sweden and Denmark"],
    correctAnswer: "Ireland and the Netherlands",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "history-045",
    category: "Masonic History",
    difficulty: "hard",
    question: "How many editions of Ahiman Rezon did the Antients publish between 1756 and 1813?",
    choices: ["Four", "Six", "Eight", "Twelve"],
    correctAnswer: "Eight",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "history-046",
    category: "Masonic History",
    difficulty: "hard",
    question: "When did the rival English Grand Lodges formally unite?",
    choices: ["27 December 1813", "24 June 1813", "17 July 1813", "1 January 1815"],
    correctAnswer: "27 December 1813",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-047",
    category: "Masonic History",
    difficulty: "hard",
    question: "On what date did African Lodge petition the Grand Lodge of England for a warrant?",
    choices: ["2 March 1784", "29 September 1784", "3 July 1776", "6 May 1787"],
    correctAnswer: "2 March 1784",
    source: "Prince Hall Grand Lodge of Massachusetts — African Lodge 459",
    sourceUrl: "https://princehall.org/african-lodge-459/",
    verified: "2026-08-03"
  },
  {
    id: "history-048",
    category: "Masonic History",
    difficulty: "hard",
    question: "On what date did the Grand Lodge of England issue African Lodge No. 459's charter?",
    choices: ["29 September 1784", "2 March 1784", "3 July 1776", "6 May 1787"],
    correctAnswer: "29 September 1784",
    source: "Prince Hall Grand Lodge of Massachusetts — African Lodge 459",
    sourceUrl: "https://princehall.org/african-lodge-459/",
    verified: "2026-08-03"
  },
  {
    id: "history-049",
    category: "Masonic History",
    difficulty: "hard",
    question: "Freemasons' Hall in London was built during which years?",
    choices: ["1927–1933", "1914–1918", "1813–1819", "1939–1945"],
    correctAnswer: "1927–1933",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "history-050",
    category: "Masonic History",
    difficulty: "hard",
    question: "What did the Nazi regime pressure many German Masonic lodges to do?",
    choices: ["Dissolve", "Merge with trade unions", "Move their meetings to Switzerland", "Adopt the Scottish Rite"],
    correctAnswer: "Dissolve",
    source: "United States Holocaust Memorial Museum — Freemasonry under the Nazi Regime",
    sourceUrl: "https://encyclopedia.ushmm.org/content/en/article/freemasonry-under-the-nazi-regime",
    verified: "2026-08-03"
  }
];
