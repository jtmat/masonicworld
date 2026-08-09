/*
  FAMOUS FREEMASONS QUESTION BANK

  Maintenance rules:
  - Give every question a unique id.
  - Include exactly four different choices.
  - The correctAnswer must exactly match one of the choices.
  - Use difficulty: "easy", "medium", or "hard".
  - source, sourceUrl, and verified are private maintenance notes.
*/

const QUESTION_BANK = [
  {
    id: "famous-001",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason became the first President of the United States?",
    choices: ["George Washington", "Benjamin Franklin", "Paul Revere", "James Monroe"],
    correctAnswer: "George Washington",
    source: "George Washington Masonic National Memorial — George Washington, the Mason",
    sourceUrl: "https://gwmemorial.org/pages/george-washington-the-mason",
    verified: "2026-08-03"
  },
  {
    id: "famous-002",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason conducted famous experiments with electricity and helped develop the lightning rod?",
    choices: ["Benjamin Franklin", "Alexander Fleming", "Edward Jenner", "Joseph Lister"],
    correctAnswer: "Benjamin Franklin",
    source: "Scottish Rite, NMJ — Ben Franklin: A Freemason for the Ages",
    sourceUrl: "https://scottishritenmj.org/blog/ben-franklin-freemason",
    verified: "2026-08-03"
  },
  {
    id: "famous-003",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason is remembered for his midnight ride before the Battles of Lexington and Concord?",
    choices: ["Paul Revere", "John Hancock", "Joseph Warren", "John Paul Jones"],
    correctAnswer: "Paul Revere",
    source: "Scottish Rite, NMJ — Most Worshipful Brother Paul Revere",
    sourceUrl: "https://scottishritenmj.org/blog/paul-revere-freemason",
    verified: "2026-08-03"
  },
  {
    id: "famous-004",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason served as the fifth President of the United States?",
    choices: ["James Monroe", "Andrew Jackson", "James K. Polk", "William McKinley"],
    correctAnswer: "James Monroe",
    source: "Harry S. Truman Library — Masonic Presidents of the United States",
    sourceUrl: "https://www.trumanlibrary.gov/taxonomy/term/3462?page=3",
    verified: "2026-08-03"
  },
  {
    id: "famous-005",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason served as the 26th President of the United States?",
    choices: ["Theodore Roosevelt", "Franklin D. Roosevelt", "Harry S. Truman", "Gerald Ford"],
    correctAnswer: "Theodore Roosevelt",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-006",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason was the only United States president elected to four terms?",
    choices: ["Franklin D. Roosevelt", "Theodore Roosevelt", "Harry S. Truman", "Gerald Ford"],
    correctAnswer: "Franklin D. Roosevelt",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-007",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason became President of the United States after Franklin D. Roosevelt died in 1945?",
    choices: ["Harry S. Truman", "Gerald Ford", "Dwight D. Eisenhower", "Lyndon B. Johnson"],
    correctAnswer: "Harry S. Truman",
    source: "Harry S. Truman Library — Grandview Masonic Lodge 618",
    sourceUrl: "https://www.trumanlibrary.gov/education/student-resources/places/grandview/grandview-masonic-lodge-618",
    verified: "2026-08-03"
  },
  {
    id: "famous-008",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason served as the 38th President of the United States?",
    choices: ["Gerald Ford", "Richard Nixon", "Jimmy Carter", "Ronald Reagan"],
    correctAnswer: "Gerald Ford",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-009",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason served as British prime minister during most of World War II?",
    choices: ["Winston Churchill", "Clement Attlee", "Neville Chamberlain", "Anthony Eden"],
    correctAnswer: "Winston Churchill",
    source: "United Grand Lodge of England — Winston Churchill",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/famous-freemasons/winston-churchill",
    verified: "2026-08-03"
  },
  {
    id: "famous-010",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason was the father of Queen Elizabeth II?",
    choices: ["King George VI", "King Edward VII", "Prince Philip", "George, Duke of Kent"],
    correctAnswer: "King George VI",
    source: "United Grand Lodge of England — King George VI",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/famous-freemasons/king-george-vi",
    verified: "2026-08-03"
  },
  {
    id: "famous-011",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which famous Freemason composed The Magic Flute?",
    choices: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Franz Schubert", "Joseph Haydn"],
    correctAnswer: "Wolfgang Amadeus Mozart",
    source: "Grand Lodge of Ohio — Wolfgang Amadeus Mozart",
    sourceUrl: "https://www.freemason.com/wolfgang-amadeus-mozart/",
    verified: "2026-08-03"
  },
  {
    id: "famous-012",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Scottish Freemason wrote Auld Lang Syne?",
    choices: ["Robert Burns", "Sir Walter Scott", "Rudyard Kipling", "Arthur Conan Doyle"],
    correctAnswer: "Robert Burns",
    source: "Grand Lodge of Scotland — Robert Burns",
    sourceUrl: "https://www.grandlodgescotland.com/robert-burns/",
    verified: "2026-08-03"
  },
  {
    id: "famous-013",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason wrote The Jungle Book?",
    choices: ["Rudyard Kipling", "Arthur Conan Doyle", "Mark Twain", "Oscar Wilde"],
    correctAnswer: "Rudyard Kipling",
    source: "United Grand Lodge of England — Rudyard Kipling",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/famous-freemasons/rudyard-kipling",
    verified: "2026-08-03"
  },
  {
    id: "famous-014",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason created the detective Sherlock Holmes?",
    choices: ["Sir Arthur Conan Doyle", "Rudyard Kipling", "Mark Twain", "Jonathan Swift"],
    correctAnswer: "Sir Arthur Conan Doyle",
    source: "Scottish Rite, NMJ — Sir Arthur Conan Doyle",
    sourceUrl: "https://scottishritenmj.org/blog/arthur-conan-doyle-freemason",
    verified: "2026-08-03"
  },
  {
    id: "famous-015",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "What was the real name of the Freemason better known as Mark Twain?",
    choices: ["Samuel Langhorne Clemens", "Henry David Thoreau", "William Sydney Porter", "James Fenimore Cooper"],
    correctAnswer: "Samuel Langhorne Clemens",
    source: "Grand Lodge of California, Lodge No. 46 — Mark Twain",
    sourceUrl: "https://lodge46.freemason.org/2019/01/03/samuel-langhorne-clemens-aka-mark-twain-a-freemason-in-the-burgeoning-west/",
    verified: "2026-08-03"
  },
  {
    id: "famous-016",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason wrote The Picture of Dorian Gray?",
    choices: ["Oscar Wilde", "Jonathan Swift", "Robert Burns", "Sir Walter Scott"],
    correctAnswer: "Oscar Wilde",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-017",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which famous Freemason was celebrated as an escape artist and magician?",
    choices: ["Harry Houdini", "Peter Sellers", "John Wayne", "Richard Pryor"],
    correctAnswer: "Harry Houdini",
    source: "Scottish Rite, NMJ — Harry Houdini: The Masonic Magician",
    sourceUrl: "https://scottishritenmj.org/blog/harry-houdini-the-masonic-magician",
    verified: "2026-08-03"
  },
  {
    id: "famous-018",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which famous Freemason starred in Western films such as The Searchers and True Grit?",
    choices: ["John Wayne", "Clark Gable", "Cary Grant", "Gary Cooper"],
    correctAnswer: "John Wayne",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-019",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason walked on the Moon during Apollo 11?",
    choices: ["Buzz Aldrin", "John Glenn", "Gordon Cooper", "Virgil Grissom"],
    correctAnswer: "Buzz Aldrin",
    source: "Scottish Rite Masonic Museum & Library — Edwin 'Buzz' Aldrin",
    sourceUrl: "https://www.srmml.org/hall-of-fame/edwin-buzz-aldrin/",
    verified: "2026-08-03"
  },
  {
    id: "famous-020",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason became the first American to orbit Earth?",
    choices: ["John Glenn", "Buzz Aldrin", "Alan Shepard", "Neil Armstrong"],
    correctAnswer: "John Glenn",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-021",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason made the first solo nonstop flight across the Atlantic Ocean?",
    choices: ["Charles Lindbergh", "Jimmy Doolittle", "Richard Byrd", "Amelia Earhart"],
    correctAnswer: "Charles Lindbergh",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-022",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason was the founding principal of Tuskegee Institute?",
    choices: ["Booker T. Washington", "W.E.B. Du Bois", "Thurgood Marshall", "Medgar Evers"],
    correctAnswer: "Booker T. Washington",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-023",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason became the first Black justice of the United States Supreme Court?",
    choices: ["Thurgood Marshall", "Medgar Evers", "W.E.B. Du Bois", "Booker T. Washington"],
    correctAnswer: "Thurgood Marshall",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-024",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason discovered penicillin?",
    choices: ["Alexander Fleming", "Edward Jenner", "Joseph Lister", "Louis Pasteur"],
    correctAnswer: "Alexander Fleming",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-025",
    category: "Famous Freemasons",
    difficulty: "easy",
    question: "Which Freemason founded the restaurant chain Kentucky Fried Chicken?",
    choices: ["Harland Sanders", "Dave Thomas", "J. C. Penney", "Walter Chrysler"],
    correctAnswer: "Harland Sanders",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-026",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "In which lodge did George Washington receive his Masonic degrees?",
    choices: ["Fredericksburg Lodge", "Alexandria Lodge", "Williamsburg Lodge", "Mount Vernon Lodge"],
    correctAnswer: "Fredericksburg Lodge",
    source: "George Washington Masonic National Memorial — George Washington, the Mason",
    sourceUrl: "https://gwmemorial.org/pages/george-washington-the-mason",
    verified: "2026-08-03"
  },
  {
    id: "famous-027",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Which Freemason printed the first Masonic book published in North America?",
    choices: ["Benjamin Franklin", "Paul Revere", "James Anderson", "Thomas Paine"],
    correctAnswer: "Benjamin Franklin",
    source: "Scottish Rite, NMJ — Ben Franklin: A Freemason for the Ages",
    sourceUrl: "https://scottishritenmj.org/blog/ben-franklin-freemason",
    verified: "2026-08-03"
  },
  {
    id: "famous-028",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Which famous American patriot became the second Grand Master of the Grand Lodge of Massachusetts?",
    choices: ["Paul Revere", "John Hancock", "Joseph Warren", "Benjamin Franklin"],
    correctAnswer: "Paul Revere",
    source: "Scottish Rite, NMJ — Most Worshipful Brother Paul Revere",
    sourceUrl: "https://scottishritenmj.org/blog/paul-revere-freemason",
    verified: "2026-08-03"
  },
  {
    id: "famous-029",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Which United States president previously served as Grand Master of the Grand Lodge of Missouri?",
    choices: ["Harry S. Truman", "Theodore Roosevelt", "Franklin D. Roosevelt", "Gerald Ford"],
    correctAnswer: "Harry S. Truman",
    source: "Harry S. Truman Library — Grandview Masonic Lodge 618",
    sourceUrl: "https://www.trumanlibrary.gov/education/student-resources/places/grandview/grandview-masonic-lodge-618",
    verified: "2026-08-03"
  },
  {
    id: "famous-030",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Winston Churchill was initiated in which London lodge?",
    choices: ["Studholme Lodge No. 1591", "Navy Lodge No. 2612", "Chelsea Lodge No. 3098", "Royal Alpha Lodge No. 16"],
    correctAnswer: "Studholme Lodge No. 1591",
    source: "United Grand Lodge of England — Winston Churchill",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/famous-freemasons/winston-churchill",
    verified: "2026-08-03"
  },
  {
    id: "famous-031",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Mozart was initiated into which Viennese lodge?",
    choices: ["Zur Wohltätigkeit (Beneficence)", "Zur wahren Eintracht (True Concord)", "Hope and Perseverance", "Canongate Kilwinning"],
    correctAnswer: "Zur Wohltätigkeit (Beneficence)",
    source: "Grand Lodge of Ohio — Wolfgang Amadeus Mozart",
    sourceUrl: "https://www.freemason.com/wolfgang-amadeus-mozart/",
    verified: "2026-08-03"
  },
  {
    id: "famous-032",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Robert Burns was initiated into which lodge in Tarbolton?",
    choices: ["Lodge St. David", "Lodge St. Andrew", "Lodge St. Ebbe", "Lodge Canongate Kilwinning"],
    correctAnswer: "Lodge St. David",
    source: "Grand Lodge of Scotland — Robert Burns",
    sourceUrl: "https://www.grandlodgescotland.com/our-national-bard-brother-robert-burns-born-this-day-25th-january-1759/",
    verified: "2026-08-03"
  },
  {
    id: "famous-033",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Rudyard Kipling was initiated in the Lodge of Hope and Perseverance No. 782 in which city?",
    choices: ["Lahore", "London", "Edinburgh", "Bombay"],
    correctAnswer: "Lahore",
    source: "United Grand Lodge of England — Rudyard Kipling",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/famous-freemasons/rudyard-kipling",
    verified: "2026-08-03"
  },
  {
    id: "famous-034",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Sir Arthur Conan Doyle was initiated into which lodge?",
    choices: ["Phoenix Lodge No. 257", "St. Cecile Lodge No. 568", "Polar Star Lodge No. 79", "Navy Lodge No. 2612"],
    correctAnswer: "Phoenix Lodge No. 257",
    source: "Scottish Rite, NMJ — Sir Arthur Conan Doyle",
    sourceUrl: "https://scottishritenmj.org/blog/arthur-conan-doyle-freemason",
    verified: "2026-08-03"
  },
  {
    id: "famous-035",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Mark Twain became a Freemason in which lodge?",
    choices: ["Polar Star Lodge No. 79", "St. Andrew's Lodge", "Phoenix Lodge No. 257", "Lodge of Hope and Perseverance No. 782"],
    correctAnswer: "Polar Star Lodge No. 79",
    source: "Grand Lodge of California, Lodge No. 46 — Mark Twain",
    sourceUrl: "https://lodge46.freemason.org/2019/01/03/samuel-langhorne-clemens-aka-mark-twain-a-freemason-in-the-burgeoning-west/",
    verified: "2026-08-03"
  },
  {
    id: "famous-036",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Harry Houdini was initiated into which New York lodge?",
    choices: ["St. Cecile Lodge", "Polar Star Lodge", "Phoenix Lodge", "Chelsea Lodge"],
    correctAnswer: "St. Cecile Lodge",
    source: "Scottish Rite, NMJ — Harry Houdini: The Masonic Magician",
    sourceUrl: "https://scottishritenmj.org/blog/harry-houdini-the-masonic-magician",
    verified: "2026-08-03"
  },
  {
    id: "famous-037",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Who became the first Freemason to walk on the Moon?",
    choices: ["Buzz Aldrin", "John Glenn", "Gordon Cooper", "Virgil Grissom"],
    correctAnswer: "Buzz Aldrin",
    source: "Grand Lodge of Ohio — Buzz Aldrin",
    sourceUrl: "https://www.freemason.com/buzz-aldrin-celebrates-92nd-birthday/",
    verified: "2026-08-03"
  },
  {
    id: "famous-038",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Which Freemason set an age record for space travel aboard STS-95 in 1998, when he was 77?",
    choices: ["John Glenn", "Buzz Aldrin", "Charles Lindbergh", "Jimmy Doolittle"],
    correctAnswer: "John Glenn",
    source: "NASA — John H. Glenn",
    sourceUrl: "https://www.nasa.gov/people/john-glenn/",
    verified: "2026-08-03"
  },
  {
    id: "famous-039",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Which Freemason pioneered vaccination against smallpox?",
    choices: ["Edward Jenner", "Alexander Fleming", "Joseph Lister", "Robert Koch"],
    correctAnswer: "Edward Jenner",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-040",
    category: "Famous Freemasons",
    difficulty: "medium",
    question: "Which Freemason helped introduce antiseptic methods into surgery?",
    choices: ["Joseph Lister", "Edward Jenner", "Alexander Fleming", "William Harvey"],
    correctAnswer: "Joseph Lister",
    source: "Masons of California — Famous Freemasons",
    sourceUrl: "https://freemason.org/famous-freemasons/",
    verified: "2026-08-03"
  },
  {
    id: "famous-041",
    category: "Famous Freemasons",
    difficulty: "hard",
    question: "George Washington conducted a Masonic cornerstone ceremony for which building in 1793?",
    choices: ["United States Capitol", "White House", "Washington Monument", "Supreme Court Building"],
    correctAnswer: "United States Capitol",
    source: "George Washington Masonic National Memorial — George Washington, the Mason",
    sourceUrl: "https://gwmemorial.org/pages/george-washington-the-mason",
    verified: "2026-08-03"
  },
  {
    id: "famous-042",
    category: "Famous Freemasons",
    difficulty: "hard",
    question: "In what year did Benjamin Franklin print his North American edition of The Constitutions of the Free-Masons?",
    choices: ["1723", "1731", "1734", "1749"],
    correctAnswer: "1734",
    source: "Scottish Rite, NMJ — Ben Franklin: A Freemason for the Ages",
    sourceUrl: "https://scottishritenmj.org/blog/ben-franklin-freemason",
    verified: "2026-08-03"
  },
  {
    id: "famous-043",
    category: "Famous Freemasons",
    difficulty: "hard",
    question: "In what year was Paul Revere elected Grand Master of the Grand Lodge of Massachusetts?",
    choices: ["1775", "1783", "1794", "1801"],
    correctAnswer: "1794",
    source: "Scottish Rite Masonic Museum & Library — Paul Revere Hall of Fame",
    sourceUrl: "https://scottishritenmj.org/blog/scottish-rite-masonic-museum-library-adds-new-inductees-to-the-masonic-hall-of-fame",
    verified: "2026-08-03"
  },
  {
    id: "famous-044",
    category: "Famous Freemasons",
    difficulty: "hard",
    question: "In what year was Harry S. Truman elected Grand Master of the Grand Lodge of Missouri?",
    choices: ["1933", "1940", "1945", "1952"],
    correctAnswer: "1940",
    source: "Harry S. Truman Library — Grandview Masonic Lodge 618",
    sourceUrl: "https://www.trumanlibrary.gov/education/student-resources/places/grandview/grandview-masonic-lodge-618",
    verified: "2026-08-03"
  },
  {
    id: "famous-045",
    category: "Famous Freemasons",
    difficulty: "hard",
    question: "King George VI was initiated into which lodge in 1919?",
    choices: ["Navy Lodge No. 2612", "Royal Alpha Lodge No. 16", "Chelsea Lodge No. 3098", "Studholme Lodge No. 1591"],
    correctAnswer: "Navy Lodge No. 2612",
    source: "United Grand Lodge of England — King George VI",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/famous-freemasons/king-george-vi",
    verified: "2026-08-03"
  },
  {
    id: "famous-046",
    category: "Famous Freemasons",
    difficulty: "hard",
    question: "On what date was Wolfgang Amadeus Mozart initiated into Freemasonry?",
    choices: ["14 December 1784", "27 January 1756", "7 January 1785", "5 December 1791"],
    correctAnswer: "14 December 1784",
    source: "Grand Lodge of Ohio — Wolfgang Amadeus Mozart",
    sourceUrl: "https://www.freemason.com/wolfgang-amadeus-mozart/",
    verified: "2026-08-03"
  },
  {
    id: "famous-047",
    category: "Famous Freemasons",
    difficulty: "hard",
    question: "How old was Rudyard Kipling when he was initiated into Freemasonry in Lahore?",
    choices: ["20", "21", "25", "30"],
    correctAnswer: "20",
    source: "United Grand Lodge of England — Rudyard Kipling",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/famous-freemasons/rudyard-kipling",
    verified: "2026-08-03"
  },
  {
    id: "famous-048",
    category: "Famous Freemasons",
    difficulty: "hard",
    question: "Sir Arthur Conan Doyle was initiated into Freemasonry in the same year that which Sherlock Holmes story was published?",
    choices: ["A Study in Scarlet", "The Sign of the Four", "The Final Problem", "The Hound of the Baskervilles"],
    correctAnswer: "A Study in Scarlet",
    source: "Scottish Rite, NMJ — Sir Arthur Conan Doyle",
    sourceUrl: "https://scottishritenmj.org/blog/arthur-conan-doyle-freemason",
    verified: "2026-08-03"
  },
  {
    id: "famous-049",
    category: "Famous Freemasons",
    difficulty: "hard",
    question: "In what year was Harry Houdini initiated into St. Cecile Lodge in New York?",
    choices: ["1917", "1920", "1923", "1926"],
    correctAnswer: "1923",
    source: "Scottish Rite, NMJ — Harry Houdini: The Masonic Magician",
    sourceUrl: "https://scottishritenmj.org/blog/harry-houdini-the-masonic-magician",
    verified: "2026-08-03"
  },
  {
    id: "famous-050",
    category: "Famous Freemasons",
    difficulty: "hard",
    question: "Buzz Aldrin was raised as a Master Mason in which lodge?",
    choices: ["Lawrence N. Greenleaf Lodge No. 169", "Oak Park Lodge No. 864", "Clear Lake Lodge No. 1417", "Tranquility Lodge No. 2000"],
    correctAnswer: "Lawrence N. Greenleaf Lodge No. 169",
    source: "Scottish Rite, NMJ — To the Moon and Back with Buzz Aldrin",
    sourceUrl: "https://scottishritenmj.org/blog/to-the-moon-and-back-with-buzz-aldrin",
    verified: "2026-08-03"
  }
];
