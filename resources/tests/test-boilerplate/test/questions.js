/*
  QUESTION BANK

  To add a question, copy one complete object and change its values.
  Rules:
  - Give every question a unique id.
  - Include exactly four different choices.
  - The correctAnswer must exactly match one of the choices.
  - source and verified are maintenance notes; test-takers do not see them.
*/

const QUESTION_BANK = [
  {
    id: "basics-001",
    category: "Freemasonry Basics",
    question: "What is the local organized body of Craft Freemasons commonly called?",
    choices: ["A Chapter", "A Lodge", "A Valley", "A Consistory"],
    correctAnswer: "A Lodge",
    source: "United Grand Lodge of England — What is Freemasonry?",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/what-is-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "basics-002",
    category: "Freemasonry Basics",
    question: "Which sequence lists the three Craft degrees in their usual order?",
    choices: [
      "Fellow Craft, Entered Apprentice, Master Mason",
      "Entered Apprentice, Master Mason, Fellow Craft",
      "Entered Apprentice, Fellow Craft, Master Mason",
      "Master Mason, Fellow Craft, Entered Apprentice"
    ],
    correctAnswer: "Entered Apprentice, Fellow Craft, Master Mason",
    source: "United Grand Lodge of England — What is Freemasonry?",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/what-is-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "basics-003",
    category: "Freemasonry Basics",
    question: "Which term is traditionally associated with receiving the Master Mason degree?",
    choices: ["Initiated", "Passed", "Exalted", "Raised"],
    correctAnswer: "Raised",
    source: "Masonic terminology",
    sourceUrl: "",
    verified: "2026-08-02"
  },
  {
    id: "basics-004",
    category: "Freemasonry Basics",
    question: "Which three objects are commonly described as the Three Great Lights of Freemasonry?",
    choices: [
      "The Volume of the Sacred Law, Square, and Compasses",
      "The Gavel, Level, and Plumb",
      "The Sun, Moon, and Blazing Star",
      "The Ashlars, Trestle Board, and Gavel"
    ],
    correctAnswer: "The Volume of the Sacred Law, Square, and Compasses",
    source: "United Grand Lodge of England — What is Freemasonry?",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/what-is-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "basics-005",
    category: "Freemasonry Basics",
    question: "In Masonic terminology, what does ‘operative masonry’ refer to?",
    choices: [
      "Governing a Grand Lodge",
      "Performing Masonic ceremonies",
      "The practical trade of building in stone",
      "Studying Masonic history"
    ],
    correctAnswer: "The practical trade of building in stone",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "basics-006",
    category: "Freemasonry Basics",
    question: "What does ‘speculative masonry’ generally describe?",
    choices: [
      "Using the builder’s craft as a source of moral instruction",
      "Designing buildings without constructing them",
      "Investigating the finances of a lodge",
      "Studying unidentified ancient ruins"
    ],
    correctAnswer: "Using the builder’s craft as a source of moral instruction",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "basics-007",
    category: "Freemasonry Basics",
    question: "Why did medieval operative stonemasons wear aprons?",
    choices: [
      "To identify the building’s architect",
      "To display membership rank",
      "To protect themselves while working with stone",
      "To carry architectural drawings"
    ],
    correctAnswer: "To protect themselves while working with stone",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "basics-008",
    category: "Freemasonry Basics",
    question: "Which pair of working tools appears together in the best-known emblem of Freemasonry?",
    choices: ["Level and Plumb", "Square and Compasses", "Gavel and Chisel", "Trowel and Rule"],
    correctAnswer: "Square and Compasses",
    source: "United Grand Lodge of England — What is Freemasonry?",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/what-is-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "history-001",
    category: "Masonic History",
    question: "In what year was the first Grand Lodge established in London?",
    choices: ["1698", "1717", "1723", "1736"],
    correctAnswer: "1717",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "history-002",
    category: "Masonic History",
    question: "How many London lodges came together to establish the first Grand Lodge in 1717?",
    choices: ["Three", "Four", "Five", "Seven"],
    correctAnswer: "Four",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "history-003",
    category: "Masonic History",
    question: "At which London tavern was the first Grand Lodge established?",
    choices: ["The Crown and Anchor", "The King’s Arms", "The Goose and Gridiron", "The White Hart"],
    correctAnswer: "The Goose and Gridiron",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "history-004",
    category: "Masonic History",
    question: "Who was elected the first Grand Master of the Grand Lodge established in 1717?",
    choices: ["James Anderson", "Anthony Sayer", "John Theophilus Desaguliers", "Laurence Dermott"],
    correctAnswer: "Anthony Sayer",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "history-005",
    category: "Masonic History",
    question: "What was the title of the rulebook published by the first Grand Lodge in 1723?",
    choices: [
      "The Constitutions of the Free-Masons",
      "The Builders’ Regulations",
      "The Ancient Masonic Charges",
      "The Book of the Craft"
    ],
    correctAnswer: "The Constitutions of the Free-Masons",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-02"
  },
  {
    id: "history-006",
    category: "Masonic History",
    question: "Who compiled The Constitutions of the Free-Masons published in 1723?",
    choices: ["William Preston", "Anthony Sayer", "James Anderson", "Elias Ashmole"],
    correctAnswer: "James Anderson",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-02"
  },
  {
    id: "history-007",
    category: "Masonic History",
    question: "Which American Freemason published the first American edition of Anderson’s Constitutions in 1734?",
    choices: ["George Washington", "Benjamin Franklin", "Paul Revere", "John Hancock"],
    correctAnswer: "Benjamin Franklin",
    source: "Museum of Freemasonry — Benjamin Franklin",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/benjamin-franklin-freemason",
    verified: "2026-08-02"
  },
  {
    id: "history-008",
    category: "Masonic History",
    question: "In what year was the Grand Lodge of Ireland established?",
    choices: ["1717", "1723", "1725", "1736"],
    correctAnswer: "1725",
    source: "Grand Lodge of Ireland — History",
    sourceUrl: "https://freemason.ie/about-grand-lodge/history/",
    verified: "2026-08-02"
  },
  {
    id: "history-009",
    category: "Masonic History",
    question: "In what year was the Grand Lodge of Scotland established?",
    choices: ["1725", "1736", "1751", "1813"],
    correctAnswer: "1736",
    source: "Grand Lodge of Scotland — History",
    sourceUrl: "https://www.grandlodgescotland.com/",
    verified: "2026-08-02"
  },
  {
    id: "history-010",
    category: "Masonic History",
    question: "In what year was the United Grand Lodge of England formed?",
    choices: ["1751", "1776", "1813", "1815"],
    correctAnswer: "1813",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "history-011",
    category: "Masonic History",
    question: "Which two rival English Grand Lodges united in 1813?",
    choices: ["The Operatives and Speculatives", "The Antients and Moderns", "The Yorks and Scots", "The Royalists and Republicans"],
    correctAnswer: "The Antients and Moderns",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-02"
  },
  {
    id: "washington-001",
    category: "Famous Freemasons",
    question: "In which Virginia lodge did George Washington receive his Masonic degrees?",
    choices: ["Williamsburg Lodge", "Alexandria Lodge", "Fredericksburg Lodge", "Richmond Lodge"],
    correctAnswer: "Fredericksburg Lodge",
    source: "George Washington Masonic National Memorial — George Washington the Mason",
    sourceUrl: "https://gwmemorial.org/pages/george-washington-the-mason",
    verified: "2026-08-02"
  },
  {
    id: "washington-002",
    category: "Famous Freemasons",
    question: "In what year was George Washington initiated as an Entered Apprentice?",
    choices: ["1732", "1752", "1776", "1788"],
    correctAnswer: "1752",
    source: "George Washington Masonic National Memorial — George Washington the Mason",
    sourceUrl: "https://gwmemorial.org/pages/george-washington-the-mason",
    verified: "2026-08-02"
  },
  {
    id: "washington-003",
    category: "Famous Freemasons",
    question: "The cornerstone of which American building did George Washington ceremonially lay in 1793?",
    choices: ["The White House", "The Washington Monument", "The United States Capitol", "Mount Vernon"],
    correctAnswer: "The United States Capitol",
    source: "Architect of the Capitol — Capitol Cornerstone",
    sourceUrl: "https://www.aoc.gov/what-we-do/programs-ceremonies/cornerstone",
    verified: "2026-08-02"
  },
  {
    id: "prince-hall-001",
    category: "Prince Hall Freemasonry",
    question: "In what year were Prince Hall and fourteen other Black men initiated into Freemasonry?",
    choices: ["1734", "1752", "1775", "1787"],
    correctAnswer: "1775",
    source: "Most Worshipful Prince Hall Grand Lodge of Massachusetts — African Lodge No. 459",
    sourceUrl: "https://princehall.org/african-lodge-459/",
    verified: "2026-08-02"
  },
  {
    id: "prince-hall-002",
    category: "Prince Hall Freemasonry",
    question: "In what year did the Grand Lodge of England issue a charter to African Lodge No. 459?",
    choices: ["1775", "1776", "1784", "1808"],
    correctAnswer: "1784",
    source: "Most Worshipful Prince Hall Grand Lodge of Massachusetts — African Lodge No. 459",
    sourceUrl: "https://princehall.org/african-lodge-459/",
    verified: "2026-08-02"
  },
  {
    id: "international-001",
    category: "International Freemasonry",
    question: "In what year was the sovereign Grand Lodge of India officially constituted?",
    choices: ["1929", "1947", "1956", "1961"],
    correctAnswer: "1961",
    source: "Grand Lodge of India",
    sourceUrl: "https://grandlodgeofindia.in/",
    verified: "2026-08-02"
  }
];
