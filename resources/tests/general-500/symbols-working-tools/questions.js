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
    id: "symbols-001",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "Which pair of working tools forms the best-known emblem of Freemasonry?",
    choices: ["Level and Plumb", "Square and Compasses", "Gavel and Chisel", "Trowel and Gauge"],
    correctAnswer: "Square and Compasses",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-002",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does an operative mason use a square to test or create?",
    choices: ["A right angle", "A vertical line", "A level surface", "A circular arc"],
    correctAnswer: "A right angle",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-003",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "Which moral idea is most commonly represented by the Masonic square?",
    choices: ["Living honestly and uprightly", "Managing one's time", "Remembering mortality", "Working cooperatively"],
    correctAnswer: "Living honestly and uprightly",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-004",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "In operative use, what do compasses draw?",
    choices: ["Circles and arcs", "Vertical lines", "Right angles", "Level planes"],
    correctAnswer: "Circles and arcs",
    source: "Be a Freemason — Masonic Life",
    sourceUrl: "https://beafreemason.org/masonic-life",
    verified: "2026-08-03"
  },
  {
    id: "symbols-005",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What lesson do the compasses commonly represent in Freemasonry?",
    choices: ["Self-control and proper restraint", "Equality among people", "The wise use of time", "Industry and cooperation"],
    correctAnswer: "Self-control and proper restraint",
    source: "Be a Freemason — Masonic Life",
    sourceUrl: "https://beafreemason.org/masonic-life",
    verified: "2026-08-03"
  },
  {
    id: "symbols-006",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does a plumb rule test in operative building?",
    choices: ["Whether a surface is vertical", "Whether an angle is square", "Whether a surface is horizontal", "Whether a circle is true"],
    correctAnswer: "Whether a surface is vertical",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-007",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "Which virtue is most closely associated with the plumb in Freemasonry?",
    choices: ["Uprightness", "Equality", "Brotherly love", "Time management"],
    correctAnswer: "Uprightness",
    source: "Scottish Rite NMJ — The Working Tools of a Freemason",
    sourceUrl: "https://scottishritenmj.org/blog/master-mason-working-tools",
    verified: "2026-08-03"
  },
  {
    id: "symbols-008",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does a level test in operative building?",
    choices: ["Whether a surface is horizontal", "Whether a wall is vertical", "Whether an angle is 90 degrees", "Whether mortar has hardened"],
    correctAnswer: "Whether a surface is horizontal",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-009",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does the level most commonly symbolize in Freemasonry?",
    choices: ["Equality", "Mortality", "Secrecy", "Authority"],
    correctAnswer: "Equality",
    source: "Scottish Rite NMJ — The Working Tools of a Freemason",
    sourceUrl: "https://scottishritenmj.org/blog/master-mason-working-tools",
    verified: "2026-08-03"
  },
  {
    id: "symbols-010",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What is the operative purpose of a mason's trowel?",
    choices: ["Spreading mortar", "Measuring angles", "Testing vertical walls", "Drawing circles"],
    correctAnswer: "Spreading mortar",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-011",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does the trowel symbolically spread in Freemasonry?",
    choices: ["The cement of brotherly love", "The light of geometry", "The wages of labor", "The plans of the builder"],
    correctAnswer: "The cement of brotherly love",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-012",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What is the operative purpose of a 24-inch gauge?",
    choices: ["Measuring and laying out work", "Smoothing a finished stone", "Lifting a heavy stone", "Spreading mortar"],
    correctAnswer: "Measuring and laying out work",
    source: "Grand Lodge of Ohio — 24-Inch Gauge",
    sourceUrl: "https://www.freemason.com/24-inch-gauge-masonic-symbolism/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-013",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "Why does the 24-inch gauge naturally symbolize a full day?",
    choices: ["Its 24 divisions correspond to 24 hours", "It was invented at midnight", "It measures the length of a sundial", "It was used only once each day"],
    correctAnswer: "Its 24 divisions correspond to 24 hours",
    source: "Grand Lodge of Ohio — 24-Inch Gauge",
    sourceUrl: "https://www.freemason.com/24-inch-gauge-masonic-symbolism/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-014",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What is the central lesson of the 24-inch gauge in Freemasonry?",
    choices: ["Use time wisely and maintain balance", "Treat everyone as equal", "Remove personal faults", "Preserve silence"],
    correctAnswer: "Use time wisely and maintain balance",
    source: "Scottish Rite NMJ — The Working Tools of a Freemason",
    sourceUrl: "https://scottishritenmj.org/blog/master-mason-working-tools",
    verified: "2026-08-03"
  },
  {
    id: "symbols-015",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does an operative mason use a common gavel to remove?",
    choices: ["Rough and unwanted parts of stone", "Mortar between finished stones", "Measurements from a plan", "Weights from a plumb line"],
    correctAnswer: "Rough and unwanted parts of stone",
    source: "Scottish Rite NMJ — The Working Tools of a Freemason",
    sourceUrl: "https://scottishritenmj.org/blog/master-mason-working-tools",
    verified: "2026-08-03"
  },
  {
    id: "symbols-016",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does the common gavel teach symbolically?",
    choices: ["Remove vices and improve one's character", "Accept rank without question", "Seek material wealth", "Avoid intellectual study"],
    correctAnswer: "Remove vices and improve one's character",
    source: "Scottish Rite NMJ — The Working Tools of a Freemason",
    sourceUrl: "https://scottishritenmj.org/blog/master-mason-working-tools",
    verified: "2026-08-03"
  },
  {
    id: "symbols-017",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What is a rough ashlar?",
    choices: ["A stone in its rough, unworked state", "A polished cornerstone", "A drawing made on a board", "A tool for testing angles"],
    correctAnswer: "A stone in its rough, unworked state",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-018",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does the rough ashlar represent symbolically?",
    choices: ["A person before moral and intellectual improvement", "A completed life without faults", "The authority of a Grand Lodge", "The equality of all people"],
    correctAnswer: "A person before moral and intellectual improvement",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-019",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What distinguishes a perfect ashlar from a rough ashlar?",
    choices: ["It has been shaped and smoothed for building", "It is still attached to the quarry", "It is made of wood instead of stone", "It is used only for drawing plans"],
    correctAnswer: "It has been shaped and smoothed for building",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-020",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does the perfect ashlar represent in Freemasonry?",
    choices: ["The improved person shaped by education and discipline", "The beginning of an unfinished task", "The wealth of the lodge", "The physical strength of a stonemason"],
    correctAnswer: "The improved person shaped by education and discipline",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-021",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "The Masonic apron reflects the fraternity's heritage from which trade?",
    choices: ["Operative stonemasonry", "Navigation", "Blacksmithing", "Carpentry"],
    correctAnswer: "Operative stonemasonry",
    source: "Grand Lodge of Ohio — The Meaning of Masonic Aprons",
    sourceUrl: "https://www.freemason.com/meaning-masonic-aprons/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-022",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What did a trestleboard provide to an operative builder?",
    choices: ["Plans or designs for the work", "A surface for mixing mortar", "A device for lifting stone", "A test for vertical walls"],
    correctAnswer: "Plans or designs for the work",
    source: "Grand Lodge of Massachusetts — The Trestle-Board as a Teaching Tool",
    sourceUrl: "https://massfreemasonry.org/wp-content/uploads/2016/02/2013_Summer_Trowel.pdf",
    verified: "2026-08-03"
  },
  {
    id: "symbols-023",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What is the primary purpose of Masonic tracing boards?",
    choices: ["To serve as visual teaching aids", "To record lodge finances", "To identify visiting members", "To measure a lodge room"],
    correctAnswer: "To serve as visual teaching aids",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-024",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does the letter G commonly represent when placed within the square and compasses?",
    choices: ["Geometry", "Government", "Genealogy", "Guild"],
    correctAnswer: "Geometry",
    source: "Masons of California — Endomosaic",
    sourceUrl: "https://freemason.org/endomosaic/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-025",
    category: "Symbols and Working Tools",
    difficulty: "easy",
    question: "What does the checkered or mosaic pavement commonly represent?",
    choices: ["The good and bad fortune encountered in life", "The ranks of lodge officers", "The hours of the day", "The measurements of a building"],
    correctAnswer: "The good and bad fortune encountered in life",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-026",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "Which working tool is the traditional badge or jewel of a lodge's Master?",
    choices: ["The Square", "The Level", "The Plumb Rule", "The Trowel"],
    correctAnswer: "The Square",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-027",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "Which working tool is the traditional badge or jewel of the Senior Warden?",
    choices: ["The Level", "The Square", "The Plumb Rule", "The Compasses"],
    correctAnswer: "The Level",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-028",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "Which working tool is the traditional badge or jewel of the Junior Warden?",
    choices: ["The Plumb Rule", "The Level", "The Square", "The Gauge"],
    correctAnswer: "The Plumb Rule",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-029",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "The 47th Proposition of Euclid is better known today as what?",
    choices: ["The Pythagorean theorem", "The golden ratio", "The law of gravity", "The area of a circle"],
    correctAnswer: "The Pythagorean theorem",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-030",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "In English Masonic symbolism, the 47th Proposition of Euclid is traditionally associated with whom?",
    choices: ["A Past Master", "A newly initiated Entered Apprentice", "The lodge Treasurer", "A visiting brother"],
    correctAnswer: "A Past Master",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-031",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "The two pillars represented in many lodge rooms are modeled on pillars from which structure?",
    choices: ["King Solomon's Temple", "The Temple of Apollo", "The Roman Colosseum", "The Great Pyramid"],
    correctAnswer: "King Solomon's Temple",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-032",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "What does the winding staircase symbolize in common Masonic explanations?",
    choices: ["Progress in knowledge from Entered Apprentice to Fellow Craft", "The election of a Grand Master", "The decline of operative masonry", "The division of a day into hours"],
    correctAnswer: "Progress in knowledge from Entered Apprentice to Fellow Craft",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-033",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "Which Masonic symbol most directly represents industry and cooperative labor?",
    choices: ["The Beehive", "The Hourglass", "The Plumb", "The Anchor"],
    correctAnswer: "The Beehive",
    source: "Grand Lodge of Ohio — Behind the Masonic Symbol: The Beehive",
    sourceUrl: "https://www.freemason.com/the-beehive/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-034",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "What does the sprig of acacia commonly represent in Freemasonry?",
    choices: ["The immortality of the soul", "Equality in the lodge", "The measurement of time", "The authority of the Master"],
    correctAnswer: "The immortality of the soul",
    source: "Masons of California — Endomosaic",
    sourceUrl: "https://freemason.org/endomosaic/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-035",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "What idea is often represented by the blazing star in Freemasonry?",
    choices: ["Masonic light or knowledge", "Political authority", "Physical strength", "The end of labor"],
    correctAnswer: "Masonic light or knowledge",
    source: "Masons of California — Endomosaic",
    sourceUrl: "https://freemason.org/endomosaic/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-036",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "What does the all-seeing eye represent in a common Masonic interpretation?",
    choices: ["The omniscient eye of God", "The authority of the lodge Secretary", "The passage of 24 hours", "The equality of all Masons"],
    correctAnswer: "The omniscient eye of God",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-037",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "In the California explanation, what do the sun, moon, and seven stars symbolize?",
    choices: ["Constancy and regularity", "Silence and secrecy", "Rank and authority", "Labor and wages"],
    correctAnswer: "Constancy and regularity",
    source: "Masons of California — Endomosaic",
    sourceUrl: "https://freemason.org/endomosaic/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-038",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "In a common American presentation, which tools are first introduced to an Entered Apprentice?",
    choices: ["The 24-inch gauge and common gavel", "The square and trowel", "The plumb and level", "The skirret and pencil"],
    correctAnswer: "The 24-inch gauge and common gavel",
    source: "Scottish Rite NMJ — The Working Tools of a Freemason",
    sourceUrl: "https://scottishritenmj.org/blog/master-mason-working-tools",
    verified: "2026-08-03"
  },
  {
    id: "symbols-039",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "In a common American presentation, which three working tools are associated with the Fellow Craft degree?",
    choices: ["Plumb, level, and square", "Gauge, gavel, and chisel", "Trowel, skirret, and pencil", "Compasses, maul, and rule"],
    correctAnswer: "Plumb, level, and square",
    source: "Scottish Rite NMJ — The Working Tools of a Freemason",
    sourceUrl: "https://scottishritenmj.org/blog/master-mason-working-tools",
    verified: "2026-08-03"
  },
  {
    id: "symbols-040",
    category: "Symbols and Working Tools",
    difficulty: "medium",
    question: "In a common American presentation, which working tool is especially associated with the Master Mason degree?",
    choices: ["The Trowel", "The 24-inch Gauge", "The Plumb", "The Chisel"],
    correctAnswer: "The Trowel",
    source: "Scottish Rite NMJ — The Working Tools of a Freemason",
    sourceUrl: "https://scottishritenmj.org/blog/master-mason-working-tools",
    verified: "2026-08-03"
  },
  {
    id: "symbols-041",
    category: "Symbols and Working Tools",
    difficulty: "hard",
    question: "Which three objects are described as the Three Great Lights of Freemasonry?",
    choices: ["The Volume of Sacred Law, Square, and Compasses", "The Sun, Moon, and Master", "The Plumb, Level, and Square", "The Gauge, Gavel, and Chisel"],
    correctAnswer: "The Volume of Sacred Law, Square, and Compasses",
    source: "Masons of California — Endomosaic",
    sourceUrl: "https://freemason.org/endomosaic/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-042",
    category: "Symbols and Working Tools",
    difficulty: "hard",
    question: "In the California explanation, which three are called the Lesser Lights of Freemasonry?",
    choices: ["The sun, moon, and Master of the lodge", "The square, level, and plumb", "The Bible, square, and compasses", "The rough ashlar, perfect ashlar, and trestleboard"],
    correctAnswer: "The sun, moon, and Master of the lodge",
    source: "Masons of California — Endomosaic",
    sourceUrl: "https://freemason.org/endomosaic/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-043",
    category: "Symbols and Working Tools",
    difficulty: "hard",
    question: "Which set is identified as the ornaments of a lodge in a common American explanation?",
    choices: ["Mosaic pavement, indented tessellated border, and blazing star", "Square, level, and plumb", "Sun, moon, and Master", "Rough ashlar, perfect ashlar, and trestleboard"],
    correctAnswer: "Mosaic pavement, indented tessellated border, and blazing star",
    source: "Masons of California — Endomosaic",
    sourceUrl: "https://freemason.org/endomosaic/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-044",
    category: "Symbols and Working Tools",
    difficulty: "hard",
    question: "In the same explanation, what does the indented tessellated border symbolize?",
    choices: ["The blessings and comforts that surround us", "The roughness of an unimproved character", "The division of the day", "The equality of all people"],
    correctAnswer: "The blessings and comforts that surround us",
    source: "Masons of California — Endomosaic",
    sourceUrl: "https://freemason.org/endomosaic/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-045",
    category: "Symbols and Working Tools",
    difficulty: "hard",
    question: "Which sequence correctly matches the three principal lodge officers with their traditional jewels?",
    choices: ["Master—Square; Senior Warden—Level; Junior Warden—Plumb", "Master—Level; Senior Warden—Plumb; Junior Warden—Square", "Master—Plumb; Senior Warden—Square; Junior Warden—Level", "Master—Compasses; Senior Warden—Trowel; Junior Warden—Gauge"],
    correctAnswer: "Master—Square; Senior Warden—Level; Junior Warden—Plumb",
    source: "Museum of Freemasonry — What Are Masonic Tracing Boards?",
    sourceUrl: "https://museumfreemasonry.org.uk/blog/learn-about-freemasonry-what-are-masonic-tracing-boards",
    verified: "2026-08-03"
  },
  {
    id: "symbols-046",
    category: "Symbols and Working Tools",
    difficulty: "hard",
    question: "A traditional depiction of the 24-inch gauge often divides it into which sections?",
    choices: ["Three sections of eight inches", "Four sections of six inches", "Six sections of four inches", "Two sections of twelve inches"],
    correctAnswer: "Three sections of eight inches",
    source: "Scottish Rite NMJ — The Working Tools of a Freemason",
    sourceUrl: "https://scottishritenmj.org/blog/master-mason-working-tools",
    verified: "2026-08-03"
  },
  {
    id: "symbols-047",
    category: "Symbols and Working Tools",
    difficulty: "hard",
    question: "According to a California Masonic explanation, which symbol does NOT appear in regular Masonic ritual or symbolism?",
    choices: ["The pyramid", "The all-seeing eye", "The square and compasses", "The acacia"],
    correctAnswer: "The pyramid",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-048",
    category: "Symbols and Working Tools",
    difficulty: "hard",
    question: "Why is the Eye of Providence on the Great Seal of the United States not proof of Masonic authorship?",
    choices: ["The symbol was widely used outside Freemasonry and its designer was not a Mason", "The eye was added to the seal only in the twentieth century", "Freemasonry never uses an eye as a symbol", "The Great Seal was designed before Freemasonry existed"],
    correctAnswer: "The symbol was widely used outside Freemasonry and its designer was not a Mason",
    source: "Masons of California — Freemasonry Symbols",
    sourceUrl: "https://freemason.org/freemasonry-symbols/",
    verified: "2026-08-03"
  },
  {
    id: "symbols-049",
    category: "Symbols and Working Tools",
    difficulty: "hard",
    question: "From what architectural term is the name of the common gavel said to derive?",
    choices: ["The gable end of a house", "The capital of a column", "The course of a wall", "The keystone of an arch"],
    correctAnswer: "The gable end of a house",
    source: "Masons of California — Working Tools: 24-Inch Gauge and Common Gavel",
    sourceUrl: "https://freemason.org/wp-content/uploads/2020/07/EA-04-WORKING-TOOLS-24-INCH-GAUGE-AND-COMMON-GAVEL.pdf",
    verified: "2026-08-03"
  },
  {
    id: "symbols-050",
    category: "Symbols and Working Tools",
    difficulty: "hard",
    question: "Which statement best explains how Freemasonry uses working tools?",
    choices: ["It turns tools of stonemasonry into lessons for building moral character", "It trains members to qualify as professional stonecutters", "It preserves one universal ritual interpretation in every jurisdiction", "It uses the tools mainly to identify social rank"],
    correctAnswer: "It turns tools of stonemasonry into lessons for building moral character",
    source: "Scottish Rite NMJ — The Working Tools of a Freemason",
    sourceUrl: "https://scottishritenmj.org/blog/master-mason-working-tools",
    verified: "2026-08-03"
  }
];
