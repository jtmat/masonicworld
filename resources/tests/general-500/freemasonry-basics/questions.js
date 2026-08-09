/*
  QUESTION BANK

  To add a question, copy one complete object and change its values.
  Rules:
  - Give every question a unique id.
  - Include exactly four different choices.
  - The correctAnswer must exactly match one of the choices.
  - Use difficulty: "easy", "medium", or "hard".
  - source and verified are maintenance notes; test-takers do not see them.
*/

const QUESTION_BANK = [
  {
    id: "basics-001",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "What is the local organized body of Craft Freemasons commonly called?",
    choices: ["A Chapter", "A Lodge", "A Valley", "A Consistory"],
    correctAnswer: "A Lodge",
    source: "United Grand Lodge of England — What is Freemasonry?",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/what-is-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "basics-002",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which sequence lists the three Craft degrees in their usual order?",
    choices: [
      "Fellow Craft, Entered Apprentice, Master Mason",
      "Entered Apprentice, Master Mason, Fellow Craft",
      "Entered Apprentice, Fellow Craft, Master Mason",
      "Master Mason, Fellow Craft, Entered Apprentice"
    ],
    correctAnswer: "Entered Apprentice, Fellow Craft, Master Mason",
    source: "Masons of California — Masonic Ranks",
    sourceUrl: "https://freemason.org/masonic-ranks/",
    verified: "2026-08-03"
  },
  {
    id: "basics-003",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "What is the first Craft degree called?",
    choices: ["Entered Apprentice", "Fellow Craft", "Master Mason", "Royal Arch Mason"],
    correctAnswer: "Entered Apprentice",
    source: "Masons of California — Masonic Ranks",
    sourceUrl: "https://freemason.org/masonic-ranks/",
    verified: "2026-08-03"
  },
  {
    id: "basics-004",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "What is the second Craft degree called?",
    choices: ["Entered Apprentice", "Fellow Craft", "Master Mason", "Mark Master"],
    correctAnswer: "Fellow Craft",
    source: "Masons of California — Masonic Ranks",
    sourceUrl: "https://freemason.org/masonic-ranks/",
    verified: "2026-08-03"
  },
  {
    id: "basics-005",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "What is the third Craft degree called?",
    choices: ["Entered Apprentice", "Fellow Craft", "Master Mason", "Most Excellent Master"],
    correctAnswer: "Master Mason",
    source: "Masons of California — Masonic Ranks",
    sourceUrl: "https://freemason.org/masonic-ranks/",
    verified: "2026-08-03"
  },
  {
    id: "basics-006",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which term is traditionally associated with receiving the Entered Apprentice degree?",
    choices: ["Initiated", "Passed", "Raised", "Exalted"],
    correctAnswer: "Initiated",
    source: "Common Craft Masonic terminology",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/what-is-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "basics-007",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which term is traditionally associated with receiving the Fellow Craft degree?",
    choices: ["Initiated", "Passed", "Raised", "Installed"],
    correctAnswer: "Passed",
    source: "Common Craft Masonic terminology",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/what-is-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "basics-008",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which term is traditionally associated with receiving the Master Mason degree?",
    choices: ["Initiated", "Passed", "Raised", "Exalted"],
    correctAnswer: "Raised",
    source: "Common Craft Masonic terminology",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/what-is-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "basics-009",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which three objects are commonly described as the Three Great Lights of Freemasonry?",
    choices: [
      "The Volume of the Sacred Law, Square, and Compasses",
      "The Gavel, Level, and Plumb",
      "The Sun, Moon, and Blazing Star",
      "The Ashlars, Trestleboard, and Gavel"
    ],
    correctAnswer: "The Volume of the Sacred Law, Square, and Compasses",
    source: "United Grand Lodge of England — Basic Principles for Grand Lodge Recognition",
    sourceUrl: "https://www.ugle.org.uk/sites/default/files/media/file/information-booklet-mar2024_download.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-010",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which pair of working tools forms the best-known emblem of Freemasonry?",
    choices: ["Level and Plumb", "Square and Compasses", "Gavel and Chisel", "Trowel and Rule"],
    correctAnswer: "Square and Compasses",
    source: "Masons of California — History of Freemasonry",
    sourceUrl: "https://freemason.org/history/",
    verified: "2026-08-03"
  },
  {
    id: "basics-011",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "In Masonic terminology, what does operative masonry refer to?",
    choices: [
      "Governing a Grand Lodge",
      "Performing Masonic ceremonies",
      "The practical trade of building in stone",
      "Studying Masonic history"
    ],
    correctAnswer: "The practical trade of building in stone",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "basics-012",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "What does speculative masonry generally describe?",
    choices: [
      "Using the builder's craft as a source of moral instruction",
      "Designing buildings without constructing them",
      "Investigating the finances of a lodge",
      "Studying unidentified ancient ruins"
    ],
    correctAnswer: "Using the builder's craft as a source of moral instruction",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "basics-013",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Why is the apron used as Masonic regalia?",
    choices: [
      "It reflects the fraternity's heritage from operative stonemasons",
      "It identifies the religion of its wearer",
      "It replaces a lodge membership card",
      "It displays the location of a lodge"
    ],
    correctAnswer: "It reflects the fraternity's heritage from operative stonemasons",
    source: "Masons of California — Frequently Asked Questions",
    sourceUrl: "https://freemason.org/discover-masonry/faq/",
    verified: "2026-08-03"
  },
  {
    id: "basics-014",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Who is the presiding officer of a Craft lodge commonly called?",
    choices: ["The Master", "The Chancellor", "The Prior", "The Commander"],
    correctAnswer: "The Master",
    source: "Masons of California — Frequently Asked Questions",
    sourceUrl: "https://freemason.org/discover-masonry/faq/",
    verified: "2026-08-03"
  },
  {
    id: "basics-015",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "What title is commonly used when addressing the Master of a lodge?",
    choices: ["Right Honorable", "Worshipful Master", "Most Excellent Master", "Illustrious Master"],
    correctAnswer: "Worshipful Master",
    source: "Masons of California — Functions of the Lodge: Duties of the Officers",
    sourceUrl: "https://freemason.org/wp-content/uploads/2025/04/FUNCTIONS-OF-THE-LODGE.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-016",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which two officers commonly rank immediately after the Master in a Craft lodge?",
    choices: [
      "The Senior and Junior Wardens",
      "The Treasurer and Secretary",
      "The Senior and Junior Deacons",
      "The Chaplain and Marshal"
    ],
    correctAnswer: "The Senior and Junior Wardens",
    source: "Masons of California — Frequently Asked Questions",
    sourceUrl: "https://freemason.org/discover-masonry/faq/",
    verified: "2026-08-03"
  },
  {
    id: "basics-017",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which lodge officer normally keeps the minutes and official records?",
    choices: ["The Secretary", "The Treasurer", "The Tiler", "The Chaplain"],
    correctAnswer: "The Secretary",
    source: "Masons of California — Lodge Officer Roles and Responsibilities",
    sourceUrl: "https://freemason.org/wp-content/uploads/2025/12/Officer-Job-Descriptions.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-018",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which lodge officer is primarily responsible for safeguarding and accounting for lodge funds?",
    choices: ["The Treasurer", "The Secretary", "The Marshal", "The Senior Deacon"],
    correctAnswer: "The Treasurer",
    source: "Masons of California — Lodge Officer Roles and Responsibilities",
    sourceUrl: "https://freemason.org/wp-content/uploads/2025/12/Officer-Job-Descriptions.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-019",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which lodge officer traditionally guards the outer door?",
    choices: ["The Tiler", "The Treasurer", "The Chaplain", "The Junior Warden"],
    correctAnswer: "The Tiler",
    source: "Masons of California — Lodge Officer Roles and Responsibilities",
    sourceUrl: "https://freemason.org/wp-content/uploads/2025/12/Officer-Job-Descriptions.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-020",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "What organization normally governs constituent Craft lodges within a Masonic jurisdiction?",
    choices: ["A Grand Lodge", "A Supreme Chapter", "A Grand Consistory", "A National Valley"],
    correctAnswer: "A Grand Lodge",
    source: "United Grand Lodge of England — Basic Principles for Grand Lodge Recognition",
    sourceUrl: "https://www.ugle.org.uk/sites/default/files/media/file/information-booklet-mar2024_download.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-021",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "What is the presiding officer of a Grand Lodge commonly called?",
    choices: ["Grand Master", "Grand Prior", "Grand Chancellor", "Grand Commander"],
    correctAnswer: "Grand Master",
    source: "United Grand Lodge of England — How UGLE is Governed",
    sourceUrl: "https://www.ugle.org.uk/about-us/how-ugle-governed",
    verified: "2026-08-03"
  },
  {
    id: "basics-022",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "What term do Freemasons commonly use when addressing another member?",
    choices: ["Brother", "Companion", "Sir Knight", "Noble"],
    correctAnswer: "Brother",
    source: "Common Craft Masonic terminology",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/what-is-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "basics-023",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "In speculative Freemasonry, the square is most commonly an emblem of what?",
    choices: ["Morality", "Wealth", "Secrecy", "Seniority"],
    correctAnswer: "Morality",
    source: "Masons of California — Lodge Room",
    sourceUrl: "https://freemason.org/lodge-room/",
    verified: "2026-08-03"
  },
  {
    id: "basics-024",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "What broad lesson is commonly associated with the compasses in Freemasonry?",
    choices: ["Self-restraint", "Financial success", "Political authority", "Physical strength"],
    correctAnswer: "Self-restraint",
    source: "Masons of California — Lodge Room",
    sourceUrl: "https://freemason.org/lodge-room/",
    verified: "2026-08-03"
  },
  {
    id: "basics-025",
    category: "Freemasonry Basics",
    difficulty: "easy",
    question: "Which statement best describes the relationship between Freemasonry and religion?",
    choices: [
      "Freemasonry is a fraternity, not a religion or substitute for religion",
      "Freemasonry is a branch of Christianity",
      "Freemasonry requires all members to follow one denomination",
      "Freemasonry discourages members from practicing a religion"
    ],
    correctAnswer: "Freemasonry is a fraternity, not a religion or substitute for religion",
    source: "Masons of California — Frequently Asked Questions",
    sourceUrl: "https://freemason.org/discover-masonry/faq/",
    verified: "2026-08-03"
  },
  {
    id: "basics-026",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "What does the Masonic term Volume of the Sacred Law mean?",
    choices: [
      "The sacred book binding on the conscience of the individual member",
      "The bylaws adopted by a local lodge",
      "A history of the first Grand Lodge",
      "The private minutes of a lodge"
    ],
    correctAnswer: "The sacred book binding on the conscience of the individual member",
    source: "United Grand Lodge of England — Basic Principles for Grand Lodge Recognition",
    sourceUrl: "https://www.ugle.org.uk/sites/default/files/media/file/information-booklet-mar2024_download.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-027",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "When it appears within the Square and Compasses, what does the letter G commonly represent?",
    choices: ["Geometry", "Government", "Genealogy", "Guild"],
    correctAnswer: "Geometry",
    source: "Masons of California — Lodge Room",
    sourceUrl: "https://freemason.org/lodge-room/",
    verified: "2026-08-03"
  },
  {
    id: "basics-028",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "In Masonic symbolism, what does the rough ashlar represent?",
    choices: [
      "A person before the work of moral and intellectual improvement",
      "A completed lodge building",
      "The authority of a Grand Lodge",
      "A Mason who has served as Master"
    ],
    correctAnswer: "A person before the work of moral and intellectual improvement",
    source: "Masons of California — Lodge Room",
    sourceUrl: "https://freemason.org/lodge-room/",
    verified: "2026-08-03"
  },
  {
    id: "basics-029",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "In Masonic symbolism, what does the perfect ashlar represent?",
    choices: [
      "A person refined through education, discipline, and virtuous living",
      "A newly quarried and unworked stone",
      "A lodge operating without a warrant",
      "A member awaiting the first degree"
    ],
    correctAnswer: "A person refined through education, discipline, and virtuous living",
    source: "Masons of California — Lodge Room",
    sourceUrl: "https://freemason.org/lodge-room/",
    verified: "2026-08-03"
  },
  {
    id: "basics-030",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "Which moral principle is most commonly symbolized by the level?",
    choices: ["Equality", "Silence", "Punctuality", "Prosperity"],
    correctAnswer: "Equality",
    source: "Masons of California — Endomosaic",
    sourceUrl: "https://freemason.org/endomosaic/",
    verified: "2026-08-03"
  },
  {
    id: "basics-031",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "Which moral idea is most commonly symbolized by the plumb?",
    choices: ["Upright conduct", "Material success", "Physical endurance", "Political neutrality"],
    correctAnswer: "Upright conduct",
    source: "Masons of California — Endomosaic",
    sourceUrl: "https://freemason.org/endomosaic/",
    verified: "2026-08-03"
  },
  {
    id: "basics-032",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "What was an operative stonemason's trestleboard used for?",
    choices: [
      "Drawing plans and designs for the work",
      "Recording the names of lodge visitors",
      "Carrying stones at a building site",
      "Collecting dues from craftsmen"
    ],
    correctAnswer: "Drawing plans and designs for the work",
    source: "Masonic terminology derived from operative stonemasonry",
    sourceUrl: "https://freemason.org/history/",
    verified: "2026-08-03"
  },
  {
    id: "basics-033",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "What is the principal purpose of a lodge warrant or charter?",
    choices: [
      "To authorize the lodge to meet and work as a regular lodge",
      "To list every person who has visited the lodge",
      "To serve as the personal certificate of the Master",
      "To replace the lodge's bylaws"
    ],
    correctAnswer: "To authorize the lodge to meet and work as a regular lodge",
    source: "United Grand Lodge of England — Book of Constitutions, rules on lodge warrants",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "basics-034",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "What are a lodge's bylaws?",
    choices: [
      "Local rules governing the lodge, subject to its Grand Lodge",
      "The private signs used by visiting members",
      "A list of all recognized Grand Lodges",
      "The laws of the country in which the lodge meets"
    ],
    correctAnswer: "Local rules governing the lodge, subject to its Grand Lodge",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "basics-035",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "What is a Past Master?",
    choices: [
      "A Mason who has previously served as Master of a lodge",
      "A former Grand Lodge employee",
      "A member who has resigned from Freemasonry",
      "A historian appointed by a lodge"
    ],
    correctAnswer: "A Mason who has previously served as Master of a lodge",
    source: "Common Craft Masonic terminology",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "basics-036",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "In common Masonic usage, what is a petitioner?",
    choices: [
      "A person who has formally applied for membership",
      "An officer who presents the lodge's accounts",
      "A visitor from another jurisdiction",
      "A member appealing a Grand Lodge decision"
    ],
    correctAnswer: "A person who has formally applied for membership",
    source: "Masons of California — Frequently Asked Questions",
    sourceUrl: "https://freemason.org/discover-masonry/faq/",
    verified: "2026-08-03"
  },
  {
    id: "basics-037",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "Why is a secret ballot commonly used when a lodge considers a petition for membership?",
    choices: [
      "To allow members to vote independently on the petition",
      "To select which degree the petitioner will receive",
      "To determine the petitioner's annual dues",
      "To appoint the petitioner's lodge officers"
    ],
    correctAnswer: "To allow members to vote independently on the petition",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "basics-038",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "In regular Craft Freemasonry, why are political and theological debates generally barred from lodge meetings?",
    choices: [
      "To preserve harmony among members",
      "To prevent members from voting in elections",
      "To keep lodge meetings shorter than one hour",
      "To reserve those subjects for Grand Lodge only"
    ],
    correctAnswer: "To preserve harmony among members",
    source: "United Grand Lodge of England — Aims and Relationships of the Craft",
    sourceUrl: "https://www.ugle.org.uk/sites/default/files/media/file/information-booklet-mar2024_download.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-039",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "What does it mean when a lodge is described as constituent or subordinate?",
    choices: [
      "It operates under the authority of a Grand Lodge",
      "It has fewer than one hundred members",
      "It meets in a rented building",
      "It confers only the Entered Apprentice degree"
    ],
    correctAnswer: "It operates under the authority of a Grand Lodge",
    source: "United Grand Lodge of England — Basic Principles for Grand Lodge Recognition",
    sourceUrl: "https://www.ugle.org.uk/sites/default/files/media/file/information-booklet-mar2024_download.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-040",
    category: "Freemasonry Basics",
    difficulty: "medium",
    question: "Within Craft Freemasonry, what is meant by a jurisdiction?",
    choices: [
      "The area or body over which a Grand Lodge exercises authority",
      "The room in which a lodge keeps its records",
      "The committee that examines lodge accounts",
      "The ceremony used to install officers"
    ],
    correctAnswer: "The area or body over which a Grand Lodge exercises authority",
    source: "United Grand Lodge of England — Basic Principles for Grand Lodge Recognition",
    sourceUrl: "https://www.ugle.org.uk/sites/default/files/media/file/information-booklet-mar2024_download.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-041",
    category: "Freemasonry Basics",
    difficulty: "hard",
    question: "What does a dispensation commonly allow a new lodge to do before it receives a permanent charter or warrant?",
    choices: [
      "Meet and work temporarily under Grand Lodge authority",
      "Operate independently of every Grand Lodge",
      "Confer degrees belonging to all appendant bodies",
      "Rewrite the constitution of its Grand Lodge"
    ],
    correctAnswer: "Meet and work temporarily under Grand Lodge authority",
    source: "Common Grand Lodge usage; UGLE Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "basics-042",
    category: "Freemasonry Basics",
    difficulty: "hard",
    question: "What is the principal purpose of Masonic recognition between two sovereign Grand Lodges?",
    choices: [
      "To establish formal fraternal relations and permit appropriate visitation",
      "To place both Grand Lodges under one international government",
      "To combine their membership records into one database",
      "To require both Grand Lodges to use identical ceremonies"
    ],
    correctAnswer: "To establish formal fraternal relations and permit appropriate visitation",
    source: "United Grand Lodge of England — Foreign Grand Lodges",
    sourceUrl: "https://www.ugle.org.uk/about-us/foreign-grand-lodges",
    verified: "2026-08-03"
  },
  {
    id: "basics-043",
    category: "Freemasonry Basics",
    difficulty: "hard",
    question: "In Masonic governance, what does it mean for a Grand Lodge to be sovereign?",
    choices: [
      "It is independent and self-governing within its jurisdiction",
      "It is controlled by a worldwide supreme Grand Lodge",
      "It can govern every appendant body in every country",
      "It is exempt from the civil law of its country"
    ],
    correctAnswer: "It is independent and self-governing within its jurisdiction",
    source: "United Grand Lodge of England — Basic Principles for Grand Lodge Recognition",
    sourceUrl: "https://www.ugle.org.uk/sites/default/files/media/file/information-booklet-mar2024_download.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-044",
    category: "Freemasonry Basics",
    difficulty: "hard",
    question: "What is a stated or regular communication of a lodge?",
    choices: [
      "A meeting held at the lodge's regularly scheduled time",
      "A private letter sent by the Grand Master",
      "A meeting open to the general public",
      "A gathering held only to confer the third degree"
    ],
    correctAnswer: "A meeting held at the lodge's regularly scheduled time",
    source: "Common Grand Lodge terminology",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "basics-045",
    category: "Freemasonry Basics",
    difficulty: "hard",
    question: "What distinguishes a special or emergent lodge meeting from a stated meeting?",
    choices: [
      "It is called outside the regular schedule for specified business",
      "It is conducted without the authority of the Master",
      "It is automatically open to non-Masons",
      "It replaces all future stated meetings"
    ],
    correctAnswer: "It is called outside the regular schedule for specified business",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "basics-046",
    category: "Freemasonry Basics",
    difficulty: "hard",
    question: "In common North American Masonic usage, what is a demit?",
    choices: [
      "A document recording a member's honorable withdrawal from a lodge",
      "A temporary warrant issued to a new lodge",
      "A summons to attend a special meeting",
      "A certificate appointing a lodge officer"
    ],
    correctAnswer: "A document recording a member's honorable withdrawal from a lodge",
    source: "Common North American Grand Lodge terminology",
    sourceUrl: "https://freemason.org/",
    verified: "2026-08-03"
  },
  {
    id: "basics-047",
    category: "Freemasonry Basics",
    difficulty: "hard",
    question: "In common North American Masonic usage, what does affiliation mean?",
    choices: [
      "Joining a lodge after having been made a Mason in another lodge",
      "Receiving the Entered Apprentice degree for the first time",
      "Being elected Master of one's original lodge",
      "Forming a new Grand Lodge without recognition"
    ],
    correctAnswer: "Joining a lodge after having been made a Mason in another lodge",
    source: "Common North American Grand Lodge terminology",
    sourceUrl: "https://freemason.org/",
    verified: "2026-08-03"
  },
  {
    id: "basics-048",
    category: "Freemasonry Basics",
    difficulty: "hard",
    question: "What does it mean when a lodge is formally constituted?",
    choices: [
      "It is officially established under its Grand Lodge's authority",
      "It has elected the same Master for a second term",
      "It has purchased its own building",
      "It has opened a lodge of research"
    ],
    correctAnswer: "It is officially established under its Grand Lodge's authority",
    source: "Common Grand Lodge terminology; UGLE Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  },
  {
    id: "basics-049",
    category: "Freemasonry Basics",
    difficulty: "hard",
    question: "In Masonic usage, what is a landmark?",
    choices: [
      "A principle or ancient usage regarded as fundamental to the Craft",
      "Any building owned by a Masonic lodge",
      "A monument whose cornerstone was laid by Masons",
      "The boundary between two Grand Lodge districts"
    ],
    correctAnswer: "A principle or ancient usage regarded as fundamental to the Craft",
    source: "United Grand Lodge of England — Basic Principles for Grand Lodge Recognition",
    sourceUrl: "https://www.ugle.org.uk/sites/default/files/media/file/information-booklet-mar2024_download.pdf",
    verified: "2026-08-03"
  },
  {
    id: "basics-050",
    category: "Freemasonry Basics",
    difficulty: "hard",
    question: "What does a lodge summons normally provide?",
    choices: [
      "Official notice of a lodge meeting and the business to be conducted",
      "Proof that its holder is a Master Mason",
      "Permission to form a new Grand Lodge",
      "A record of every ballot cast during the year"
    ],
    correctAnswer: "Official notice of a lodge meeting and the business to be conducted",
    source: "United Grand Lodge of England — Book of Constitutions",
    sourceUrl: "https://www.ugle.org.uk/about-us/book-constitutions",
    verified: "2026-08-03"
  }
];
