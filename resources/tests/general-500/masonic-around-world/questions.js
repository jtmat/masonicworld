/*
  FREEMASONRY AROUND THE WORLD QUESTION BANK

  Maintenance rules:
  - Give every question a unique id.
  - Include exactly four different choices.
  - The correctAnswer must exactly match one of the choices.
  - Use difficulty: "easy", "medium", or "hard".
  - source, sourceUrl, and verified are private maintenance notes.
*/

const QUESTION_BANK = [
  {
    id: "world-001",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In which city was the world's first Grand Lodge established in 1717?",
    choices: ["London", "Dublin", "Edinburgh", "Paris"],
    correctAnswer: "London",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "world-002",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "Which Grand Lodge traces its first recorded communication to 1725?",
    choices: ["Grand Lodge of Ireland", "Grand Lodge of Scotland", "Grand Lodge of India", "Grand Lodge of New Zealand"],
    correctAnswer: "Grand Lodge of Ireland",
    source: "Grand Lodge of Ireland — Tercentenary 1725–2025",
    sourceUrl: "https://freemason.ie/tercentenary-1725-2025/",
    verified: "2026-08-03"
  },
  {
    id: "world-003",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In what year was the Grand Lodge of Scotland founded?",
    choices: ["1717", "1725", "1736", "1751"],
    correctAnswer: "1736",
    source: "Grand Lodge of Scotland — Our History",
    sourceUrl: "https://www.grandlodgescotland.com/our-history-2/",
    verified: "2026-08-03"
  },
  {
    id: "world-004",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "Which organization was formed when the Antients and Moderns united in 1813?",
    choices: ["United Grand Lodge of England", "Grand Lodge of Ireland", "Grand Orient de France", "United Grand Lodges of Germany"],
    correctAnswer: "United Grand Lodge of England",
    source: "United Grand Lodge of England — History of Freemasonry",
    sourceUrl: "https://www.ugle.org.uk/discover-freemasonry/history-freemasonry",
    verified: "2026-08-03"
  },
  {
    id: "world-005",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In what year was the sovereign Grand Lodge of India officially constituted?",
    choices: ["1947", "1953", "1957", "1961"],
    correctAnswer: "1961",
    source: "Grand Lodge of India — Official History",
    sourceUrl: "https://grandlodgeofindia.in/",
    verified: "2026-08-03"
  },
  {
    id: "world-006",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In what year was the Grand Lodge of the Philippines organized?",
    choices: ["1890", "1901", "1912", "1924"],
    correctAnswer: "1912",
    source: "Grand Lodge of the Philippines — Organization of the Grand Lodge",
    sourceUrl: "https://www.grandlodge.ph/about",
    verified: "2026-08-03"
  },
  {
    id: "world-007",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In what year was the Grand Lodge of New Zealand constituted?",
    choices: ["1842", "1855", "1877", "1890"],
    correctAnswer: "1890",
    source: "Freemasons New Zealand — History",
    sourceUrl: "https://freemasonsnz.org/history",
    verified: "2026-08-03"
  },
  {
    id: "world-008",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In what year was the Grand Lodge of Japan instituted?",
    choices: ["1945", "1949", "1953", "1957"],
    correctAnswer: "1957",
    source: "Grand Lodge of Japan — History in Japan",
    sourceUrl: "https://www.grandlodgeofjapan.org/history-in-japan",
    verified: "2026-08-03"
  },
  {
    id: "world-009",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In what year was the Grand Lodge of the State of Israel founded?",
    choices: ["1948", "1950", "1953", "1961"],
    correctAnswer: "1953",
    source: "Mount Carmel Lodge No. 44 — Grand Lodge of Israel",
    sourceUrl: "https://www.mountcarmel44.org/grand-lodge-of-israel/",
    verified: "2026-08-03"
  },
  {
    id: "world-010",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In what year did the Dutch Masonic Order become independent?",
    choices: ["1734", "1756", "1773", "1813"],
    correctAnswer: "1756",
    source: "Grand East of the Netherlands — Welcome",
    sourceUrl: "https://www.vrijmetselarij.nl/en-gb/",
    verified: "2026-08-03"
  },
  {
    id: "world-011",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "Which French Masonic organization adopted its present name in 1773?",
    choices: ["Grand Orient de France", "Grand Lodge of Ireland", "Grand East of the Netherlands", "Grand Lodge of Scotland"],
    correctAnswer: "Grand Orient de France",
    source: "Grand Orient de France — Seven Points",
    sourceUrl: "https://godf.org/wp-content/uploads/2025/10/GODF-7-points-EN-2025-2026.pdf",
    verified: "2026-08-03"
  },
  {
    id: "world-012",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "Which major Brazilian Masonic body was founded in 1822?",
    choices: ["Grande Oriente do Brasil", "Grand Lodge of Chile", "Grand Lodge of Argentina", "Grand Orient of Uruguay"],
    correctAnswer: "Grande Oriente do Brasil",
    source: "Grande Oriente do Brasil — History",
    sourceUrl: "https://www.gob.org.br/historia-do-gob/",
    verified: "2026-08-03"
  },
  {
    id: "world-013",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In what year was the Grand Lodge of Canada formed?",
    choices: ["1738", "1795", "1855", "1869"],
    correctAnswer: "1855",
    source: "Grand Lodge of Canada in the Province of Ontario — Who We Are",
    sourceUrl: "https://ontariomasons.ca/who-we-are-2/",
    verified: "2026-08-03"
  },
  {
    id: "world-014",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "Which organization was founded in 1958 to represent regular Freemasonry in Germany?",
    choices: ["United Grand Lodges of Germany", "Grand Orient de France", "Grand Lodge of Japan", "Grand East of the Netherlands"],
    correctAnswer: "United Grand Lodges of Germany",
    source: "United Grand Lodges of Germany — Founding History",
    sourceUrl: "https://www.freimaurer.org/en/founding-history/",
    verified: "2026-08-03"
  },
  {
    id: "world-015",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "How many degrees make up the complete Swedish Rite?",
    choices: ["Three", "Seven", "Ten", "Thirty-three"],
    correctAnswer: "Ten",
    source: "Swedish Order of Freemasons — Who We Are",
    sourceUrl: "https://frimurarorden.se/en/start/who-we-are/",
    verified: "2026-08-03"
  },
  {
    id: "world-016",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "Which Masonic system is practiced by the Swedish Order of Freemasons?",
    choices: ["The Swedish Rite", "The York Rite", "The French Rite", "The Rectified Scottish Rite"],
    correctAnswer: "The Swedish Rite",
    source: "Swedish Order of Freemasons — The Swedish Rite",
    sourceUrl: "https://frimurarorden.se/en/start/the-swedish-rite/",
    verified: "2026-08-03"
  },
  {
    id: "world-017",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In which city was the Grand Lodge of India officially constituted?",
    choices: ["Mumbai", "Kolkata", "Chennai", "New Delhi"],
    correctAnswer: "New Delhi",
    source: "Grand Lodge of India — Official History",
    sourceUrl: "https://grandlodgeofindia.in/",
    verified: "2026-08-03"
  },
  {
    id: "world-018",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In which city was the Grand Lodge of the Philippines organized?",
    choices: ["Manila", "Cebu", "Davao", "Baguio"],
    correctAnswer: "Manila",
    source: "Grand Lodge of the Philippines — Organization of the Grand Lodge",
    sourceUrl: "https://www.grandlodge.ph/about",
    verified: "2026-08-03"
  },
  {
    id: "world-019",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In which New Zealand city was the Grand Lodge of New Zealand constituted in 1890?",
    choices: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
    correctAnswer: "Christchurch",
    source: "Freemasons New Zealand — 130 Years of the Grand Lodge",
    sourceUrl: "https://freemasonsnz.org/blog/130-years-of-the-grand-lodge-of-new-zealand",
    verified: "2026-08-03"
  },
  {
    id: "world-020",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In which city was the Grand Lodge of the State of Israel consecrated in 1953?",
    choices: ["Jerusalem", "Tel Aviv", "Haifa", "Jaffa"],
    correctAnswer: "Jerusalem",
    source: "Grand Lodge of the State of Israel — Official Website",
    sourceUrl: "https://freemasonry.org.il/en/",
    verified: "2026-08-03"
  },
  {
    id: "world-021",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In which Brazilian city was the Grande Oriente do Brasil founded?",
    choices: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: "Rio de Janeiro",
    source: "Grande Oriente do Brasil — History",
    sourceUrl: "https://www.gob.org.br/historia-do-gob/",
    verified: "2026-08-03"
  },
  {
    id: "world-022",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "Freemasons' Hall on Molesworth Street is the headquarters of Irish Freemasonry in which city?",
    choices: ["Dublin", "Belfast", "Cork", "Limerick"],
    correctAnswer: "Dublin",
    source: "Grand Lodge of Ireland — About Grand Lodge",
    sourceUrl: "https://freemason.ie/about-grand-lodge/",
    verified: "2026-08-03"
  },
  {
    id: "world-023",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "What does UGLE call the overseas equivalent of one of its Provincial Grand Lodges?",
    choices: ["A District Grand Lodge", "A National Chapter", "A Grand Consistory", "A Supreme Valley"],
    correctAnswer: "A District Grand Lodge",
    source: "United Grand Lodge of England — Districts and Groups",
    sourceUrl: "https://www.ugle.org.uk/about-us/districts-and-groups",
    verified: "2026-08-03"
  },
  {
    id: "world-024",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "How many sovereign member Grand Lodges belong to the United Grand Lodges of Germany?",
    choices: ["Three", "Four", "Five", "Seven"],
    correctAnswer: "Five",
    source: "United Grand Lodges of Germany — What Are the VGLvD?",
    sourceUrl: "https://www.freimaurer.org/en/vglvd/",
    verified: "2026-08-03"
  },
  {
    id: "world-025",
    category: "Freemasonry Around the World",
    difficulty: "easy",
    question: "In which city was Lodge de Goede Hoop, the first Masonic lodge at the Cape, established in 1772?",
    choices: ["Cape Town", "Johannesburg", "Durban", "Pretoria"],
    correctAnswer: "Cape Town",
    source: "South African History Online — Lodge de Goede Hoop",
    sourceUrl: "https://sahistory.org.za/place/lodge-de-goede-hoop-stal-square-cape-town",
    verified: "2026-08-03"
  },
  {
    id: "world-026",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "On what date did the first recorded communication of the Grand Lodge of Ireland take place?",
    choices: ["24 June 1725", "30 November 1736", "27 December 1813", "29 April 1890"],
    correctAnswer: "24 June 1725",
    source: "Grand Lodge of Ireland — Tercentenary 1725–2025",
    sourceUrl: "https://freemason.ie/tercentenary-1725-2025/",
    verified: "2026-08-03"
  },
  {
    id: "world-027",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "Japan's first lodge, Sphinx Lodge, was established in 1862 under which constitution?",
    choices: ["Irish Constitution", "English Constitution", "Scottish Constitution", "Philippine Constitution"],
    correctAnswer: "Irish Constitution",
    source: "Grand Lodge of Japan — History in Japan",
    sourceUrl: "https://www.grandlodgeofjapan.org/history-in-japan",
    verified: "2026-08-03"
  },
  {
    id: "world-028",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "Where does Freemasons New Zealand place the country's first Masonic meeting?",
    choices: ["Kororāreka, now Russell", "Christchurch", "Port Chalmers", "New Plymouth"],
    correctAnswer: "Kororāreka, now Russell",
    source: "Freemasons New Zealand — History",
    sourceUrl: "https://freemasonsnz.org/history-2",
    verified: "2026-08-03"
  },
  {
    id: "world-029",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "Lodges under which three constitutions combined in 1890 to form the Grand Lodge of New Zealand?",
    choices: ["English, Irish, and Scottish", "English, French, and Dutch", "Irish, German, and Swedish", "Scottish, American, and Canadian"],
    correctAnswer: "English, Irish, and Scottish",
    source: "Freemasons New Zealand — History",
    sourceUrl: "https://freemasonsnz.org/history",
    verified: "2026-08-03"
  },
  {
    id: "world-030",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "The three lodges that organized the Grand Lodge of the Philippines in 1912 then owed allegiance to which Grand Lodge?",
    choices: ["Grand Lodge of California", "Grand Lodge of Scotland", "Grand Lodge of Ireland", "United Grand Lodge of England"],
    correctAnswer: "Grand Lodge of California",
    source: "Grand Lodge of the Philippines — Organization of the Grand Lodge",
    sourceUrl: "https://www.grandlodge.ph/about",
    verified: "2026-08-03"
  },
  {
    id: "world-031",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "Which three lodges organized the Grand Lodge of the Philippines?",
    choices: ["Manila, Cavite, and Corregidor", "Manila, Cebu, and Iloilo", "Cavite, Bagumbayan, and Nilad", "Corregidor, Davao, and Baguio"],
    correctAnswer: "Manila, Cavite, and Corregidor",
    source: "Grand Lodge of the Philippines — Organization of the Grand Lodge",
    sourceUrl: "https://www.grandlodge.ph/about",
    verified: "2026-08-03"
  },
  {
    id: "world-032",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "Delegations from which three Grand Lodges took part in constituting the Grand Lodge of India?",
    choices: ["Scotland, Ireland, and England", "England, France, and the Netherlands", "Ireland, Canada, and Australia", "Scotland, South Africa, and Israel"],
    correctAnswer: "Scotland, Ireland, and England",
    source: "Grand Lodge of India — Official History",
    sourceUrl: "https://grandlodgeofindia.in/",
    verified: "2026-08-03"
  },
  {
    id: "world-033",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "At which hotel was the Grand Lodge of India officially constituted in 1961?",
    choices: ["Ashoka Hotel", "Taj Mahal Palace", "Oberoi Grand", "Imperial Hotel"],
    correctAnswer: "Ashoka Hotel",
    source: "Grand Lodge of India — Official History",
    sourceUrl: "https://grandlodgeofindia.in/",
    verified: "2026-08-03"
  },
  {
    id: "world-034",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "Who was installed as the first Grand Master of the Grand Lodge of India?",
    choices: ["Sir Syed Raza Ali Khan", "Henry Thomson", "Anthony Sayer", "Carlos P. Jimenez"],
    correctAnswer: "Sir Syed Raza Ali Khan",
    source: "Grand Lodge of India — Official History",
    sourceUrl: "https://grandlodgeofindia.in/",
    verified: "2026-08-03"
  },
  {
    id: "world-035",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "Lodge de Goede Hoop was established at the Cape under a warrant from which Masonic authority?",
    choices: ["The Grand Lodge National of the Netherlands", "The Grand Lodge of Ireland", "The Grand Lodge of Scotland", "The Premier Grand Lodge of England"],
    correctAnswer: "The Grand Lodge National of the Netherlands",
    source: "South African History Online — Lodge de Goede Hoop",
    sourceUrl: "https://sahistory.org.za/place/lodge-de-goede-hoop-stal-square-cape-town",
    verified: "2026-08-03"
  },
  {
    id: "world-036",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "What governance change accompanied the 1773 reorganization that produced the Grand Orient de France?",
    choices: ["The lodge Master became an elected office", "All lodge offices became hereditary", "Local lodges lost all representation", "Grand Masters were selected by lottery"],
    correctAnswer: "The lodge Master became an elected office",
    source: "Grand Orient de France — Seven Points",
    sourceUrl: "https://godf.org/wp-content/uploads/2025/10/GODF-7-points-EN-2025-2026.pdf",
    verified: "2026-08-03"
  },
  {
    id: "world-037",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "How are the ten degrees of the Swedish Rite divided among its lodge bodies?",
    choices: ["Three Craft, three St. Andrew's, and four Chapter degrees", "Three Craft and seven Chapter degrees", "Five Craft and five Chapter degrees", "Three Craft, four Royal Arch, and three Templar degrees"],
    correctAnswer: "Three Craft, three St. Andrew's, and four Chapter degrees",
    source: "Swedish Order of Freemasons — Who We Are",
    sourceUrl: "https://frimurarorden.se/en/start/who-we-are/",
    verified: "2026-08-03"
  },
  {
    id: "world-038",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "Which Canadian province formed its own Grand Lodge in 1869?",
    choices: ["Québec", "Ontario", "Manitoba", "British Columbia"],
    correctAnswer: "Québec",
    source: "Grand Lodge of Canada in the Province of Ontario — Who We Are",
    sourceUrl: "https://ontariomasons.ca/who-we-are-2/",
    verified: "2026-08-03"
  },
  {
    id: "world-039",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "How many lodges united to found the organization now known as the Grande Oriente do Brasil?",
    choices: ["Two", "Three", "Four", "Seven"],
    correctAnswer: "Three",
    source: "Grande Oriente do Brasil — History",
    sourceUrl: "https://www.gob.org.br/historia-do-gob/",
    verified: "2026-08-03"
  },
  {
    id: "world-040",
    category: "Freemasonry Around the World",
    difficulty: "medium",
    question: "What is the principal representative role of the United Grand Lodges of Germany?",
    choices: ["To speak for its member Grand Lodges abroad and to the public", "To replace every member Grand Lodge's ritual", "To confer all degrees directly", "To govern every European Grand Lodge"],
    correctAnswer: "To speak for its member Grand Lodges abroad and to the public",
    source: "United Grand Lodges of Germany — What Are the VGLvD?",
    sourceUrl: "https://www.freimaurer.org/en/vglvd/",
    verified: "2026-08-03"
  },
  {
    id: "world-041",
    category: "Freemasonry Around the World",
    difficulty: "hard",
    question: "Which Scottish lodge possesses surviving records dated 9 January 1599?",
    choices: ["Lodge Aitchison's Haven", "Lodge Canongate Kilwinning", "Lodge Mother Kilwinning", "Lodge Mary's Chapel"],
    correctAnswer: "Lodge Aitchison's Haven",
    source: "Grand Lodge of Scotland — When Is a Gavel Not a Gavel?",
    sourceUrl: "https://www.grandlodgescotland.com/8716/",
    verified: "2026-08-03"
  },
  {
    id: "world-042",
    category: "Freemasonry Around the World",
    difficulty: "hard",
    question: "Which two Scottish-constitution lodges were invited but did not join the Grand Lodge of the Philippines when it was formed in 1912?",
    choices: ["Perla del Oriente and Cebu", "Manila and Cavite", "Nilad and Bagumbayan", "Corregidor and Southern Cross"],
    correctAnswer: "Perla del Oriente and Cebu",
    source: "Grand Lodge of the Philippines — Organization of the Grand Lodge",
    sourceUrl: "https://www.grandlodge.ph/about",
    verified: "2026-08-03"
  },
  {
    id: "world-043",
    category: "Freemasonry Around the World",
    difficulty: "hard",
    question: "Who served as the first Grand Master of the Grand Lodge of Japan?",
    choices: ["Carlos P. Jimenez", "Sadaichi Horiuchi", "Shabetay Levy", "Graham Botha"],
    correctAnswer: "Carlos P. Jimenez",
    source: "Grand Lodge of Japan — Past Grand Masters",
    sourceUrl: "https://www.grandlodgeofjapan.org/past-grand-masters",
    verified: "2026-08-03"
  },
  {
    id: "world-044",
    category: "Freemasonry Around the World",
    difficulty: "hard",
    question: "Who was installed as the first Grand Master of the Grand Lodge of the State of Israel?",
    choices: ["Shabetay Levy", "Carlos P. Jimenez", "Henry Thomson", "Sir Syed Raza Ali Khan"],
    correctAnswer: "Shabetay Levy",
    source: "Grand Lodge of the State of Israel — Past Grand Masters",
    sourceUrl: "https://freemasonry.org.il/presidents/",
    verified: "2026-08-03"
  },
  {
    id: "world-045",
    category: "Freemasonry Around the World",
    difficulty: "hard",
    question: "On what date was the organization now known as the Grande Oriente do Brasil founded?",
    choices: ["17 June 1822", "7 September 1822", "11 December 1857", "24 May 1862"],
    correctAnswer: "17 June 1822",
    source: "Grande Oriente do Brasil — History",
    sourceUrl: "https://www.gob.org.br/historia-do-gob/",
    verified: "2026-08-03"
  },
  {
    id: "world-046",
    category: "Freemasonry Around the World",
    difficulty: "hard",
    question: "On what date was the Grand Lodge of New Zealand constituted?",
    choices: ["29 April 1890", "24 June 1890", "30 November 1890", "27 December 1890"],
    correctAnswer: "29 April 1890",
    source: "Freemasons New Zealand — 130 Years of the Grand Lodge",
    sourceUrl: "https://freemasonsnz.org/blog/130-years-of-the-grand-lodge-of-new-zealand",
    verified: "2026-08-03"
  },
  {
    id: "world-047",
    category: "Freemasonry Around the World",
    difficulty: "hard",
    question: "On what date was the agreement founding the United Grand Lodges of Germany completed?",
    choices: ["27 April 1958", "19 June 1949", "1 May 1957", "22 April 1961"],
    correctAnswer: "27 April 1958",
    source: "United Grand Lodges of Germany — Founding History",
    sourceUrl: "https://www.freimaurer.org/en/founding-history/",
    verified: "2026-08-03"
  },
  {
    id: "world-048",
    category: "Freemasonry Around the World",
    difficulty: "hard",
    question: "Under UGLE's Basic Principles for Grand Lodge Recognition, what is one acceptable way for a new Grand Lodge to have a regular origin?",
    choices: ["Formation by three or more regularly constituted lodges", "Appointment by a national government", "Registration by any international fraternity", "Approval by a Supreme Council alone"],
    correctAnswer: "Formation by three or more regularly constituted lodges",
    source: "United Grand Lodge of England — Information for the Guidance of Members of the Craft",
    sourceUrl: "https://www.ugle.org.uk/sites/default/files/media/file/information-guidance-members-craft-ugle.pdf",
    verified: "2026-08-03"
  },
  {
    id: "world-049",
    category: "Freemasonry Around the World",
    difficulty: "hard",
    question: "Under UGLE's recognition principles, a Grand Lodge must have sovereign jurisdiction over which degrees?",
    choices: ["Entered Apprentice, Fellow Craft, and Master Mason", "Royal Arch, Mark Master, and Royal Ark Mariner", "The fourth through thirty-third degrees", "Knight Templar degrees only"],
    correctAnswer: "Entered Apprentice, Fellow Craft, and Master Mason",
    source: "United Grand Lodge of England — Information for the Guidance of Members of the Craft",
    sourceUrl: "https://www.ugle.org.uk/sites/default/files/media/file/information-guidance-members-craft-ugle.pdf",
    verified: "2026-08-03"
  },
  {
    id: "world-050",
    category: "Freemasonry Around the World",
    difficulty: "hard",
    question: "Which Stockholm building, acquired by the Swedish Order of Freemasons in 1874, serves as Sweden's Masonic Temple?",
    choices: ["Bååth's Palace", "The House of Nobility", "Stockholm City Hall", "Drottningholm Palace"],
    correctAnswer: "Bååth's Palace",
    source: "Swedish Order of Freemasons — Visit Information",
    sourceUrl: "https://frimurarorden.se/en/start/want-to-visit-us/",
    verified: "2026-08-03"
  }
];
