/*
  FREEMASONRY AT A GLANCE - QUESTIONS 251-300

  Source: Reynold E. Blight, Freemasonry at a Glance: Answers to 555 Questions.
  The sourceQuestionNumber and sourcePage fields are private maintenance notes.
  Wording has been lightly modernized, and legendary, disputed, or outdated
  historical statements are attributed or corrected where appropriate.
*/

const QUESTION_BANK = [
  {
    id: "book-251", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Which ancient mystery traditions have been proposed as predecessors of Freemasonry?",
    choices: ["Osiris, Mithra, Adonis, Dionysus, Eleusis, and the Druids", "Stoicism, Epicureanism, Cynicism, and Skepticism", "The Collegia, the medieval guilds, and the Rosicrucians", "The York Rite, Scottish Rite, and Royal Arch"], correctAnswer: "Osiris, Mithra, Adonis, Dionysus, Eleusis, and the Druids",
    sourceQuestionNumber: 251, sourcePage: 31, source: "Freemasonry at a Glance, question 251, printed page 31; proposed descent presented as theory rather than established history"
  },
  {
    id: "book-252", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "According to the purpose attributed to them by Plato, why were the ancient Mysteries established?",
    choices: ["To teach purity, soften cruelty, refine morals and manners, and bind society through fraternity", "To train architects in geometry and stonecutting", "To prepare soldiers for service in the Roman army", "To preserve the political authority of hereditary kings"], correctAnswer: "To teach purity, soften cruelty, refine morals and manners, and bind society through fraternity",
    sourceQuestionNumber: 252, sourcePage: 31, source: "Freemasonry at a Glance, question 252, printed page 31; traditional attribution to Plato retained"
  },
  {
    id: "book-253", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "What central ideas were symbolically taught in the ancient Mysteries?",
    choices: ["Death and resurrection, or the loss and recovery of something life-giving", "Political conquest and the expansion of empire", "Architectural measurement and operative trade rules", "The rejection of immortality and spiritual renewal"], correctAnswer: "Death and resurrection, or the loss and recovery of something life-giving",
    sourceQuestionNumber: 253, sourcePage: 31, source: "Freemasonry at a Glance, question 253, printed page 31"
  },
  {
    id: "book-254", category: "Ancient Mysteries and Early Masonic History", difficulty: "hard",
    question: "How does the traditional account describe instruction in the Egyptian Mysteries?",
    choices: ["A body was carried in a casket, taken to the Nile on the third day, restored with sacred water, and greeted with rejoicing", "A candidate climbed seven steps and received a working tool at each one", "An initiate crossed a desert alone and returned at sunrise", "A priest traced geometrical figures while the candidate remained silent"], correctAnswer: "A body was carried in a casket, taken to the Nile on the third day, restored with sacred water, and greeted with rejoicing",
    sourceQuestionNumber: 254, sourcePage: 31, source: "Freemasonry at a Glance, question 254, printed page 31; presented as a traditional account"
  },
  {
    id: "book-255", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "About when does an older Masonic account place the establishment of the Eleusinian Mysteries?",
    choices: ["About 1800 BC", "About 900 BC", "About AD 100", "About AD 1717"], correctAnswer: "About 1800 BC",
    sourceQuestionNumber: 255, sourcePage: 32, source: "Freemasonry at a Glance, question 255, printed page 32; source date explicitly framed as an older account"
  },
  {
    id: "book-256", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "What did the Eleusinian Mystery represent in the interpretation presented here?",
    choices: ["Demeter and Persephone, with a ritual passage from death toward life and immortality", "The construction and dedication of Solomon's Temple", "The seven grades of Mithraic initiation", "The founding of the Roman Collegia"], correctAnswer: "Demeter and Persephone, with a ritual passage from death toward life and immortality",
    sourceQuestionNumber: 256, sourcePage: 32, source: "Freemasonry at a Glance, question 256, printed page 32; confused reference to Dionysus omitted while retaining the question's central subject"
  },
  {
    id: "book-257", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Which teachings were associated with the Eleusinian Mysteries?",
    choices: ["The unity of God, moral necessity, and life after death", "The divine right of kings, military discipline, and conquest", "Operative geometry, architecture, and metallurgy", "Silence, isolation, and rejection of charity"], correctAnswer: "The unity of God, moral necessity, and life after death",
    sourceQuestionNumber: 257, sourcePage: 32, source: "Freemasonry at a Glance, question 257, printed page 32"
  },
  {
    id: "book-258", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "What was Mithraism?",
    choices: ["A mystery religion centered on Mithras that flourished in the Roman world and was especially associated with soldiers", "A medieval builders' guild founded at York", "A Greek philosophical school founded by Plato", "An English anti-Masonic society of the eighteenth century"], correctAnswer: "A mystery religion centered on Mithras that flourished in the Roman world and was especially associated with soldiers",
    sourceQuestionNumber: 258, sourcePage: 32, source: "Freemasonry at a Glance, question 258, printed page 32; historically inaccurate description of Mithras as simply a Persian sun god modernized"
  },
  {
    id: "book-259", category: "Ancient Mysteries and Early Masonic History", difficulty: "hard",
    question: "Which seven grades are historically associated with Roman Mithraic initiation?",
    choices: ["Raven, Bridegroom, Soldier, Lion, Persian, Sun-Runner, and Father", "Lion, Soldier, Ox, Eagle, Old Man, Gryphon, and Sun", "Apprentice, Fellow, Master, Mark, Royal Arch, Knight, and Priest", "Earth, Water, Air, Fire, Moon, Sun, and Stars"], correctAnswer: "Raven, Bridegroom, Soldier, Lion, Persian, Sun-Runner, and Father",
    sourceQuestionNumber: 259, sourcePage: 32, source: "Freemasonry at a Glance, question 259, printed page 32; the source's inaccurate list of Mithraic grades corrected"
  },
  {
    id: "book-260", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "What did the Mithraic or Persian Mysteries celebrate in the traditional interpretation presented here?",
    choices: ["The sun's eclipse, the zodiac and seasons, nature's death, and spring's rebirth", "The building of the pyramids and the flooding of the Nile", "The fall of Rome and the rise of the medieval guilds", "The discovery of geometry and the founding of Alexandria"], correctAnswer: "The sun's eclipse, the zodiac and seasons, nature's death, and spring's rebirth",
    sourceQuestionNumber: 260, sourcePage: 32, source: "Freemasonry at a Glance, question 260, printed page 32; presented as the source's traditional interpretation"
  },
  {
    id: "book-261", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "How did Cicero summarize the teaching of the Eleusinian Mysteries?",
    choices: ["To live virtuously and happily and to die with hope of a blessed future", "To gain wealth, rank, and political influence", "To master geometry before studying morality", "To avoid all civic and religious duties"], correctAnswer: "To live virtuously and happily and to die with hope of a blessed future",
    sourceQuestionNumber: 261, sourcePage: 32, source: "Freemasonry at a Glance, question 261, printed page 32; attribution to Cicero retained"
  },
  {
    id: "book-262", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Which famous Egyptian monument of Masonic interest stands in New York's Central Park?",
    choices: ["Cleopatra's Needle", "The Rosetta Stone", "The Great Sphinx", "Pompey's Pillar"], correctAnswer: "Cleopatra's Needle",
    sourceQuestionNumber: 262, sourcePage: 32, source: "Freemasonry at a Glance, question 262, printed page 32"
  },
  {
    id: "book-263", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "Why did older Masonic writers take special interest in Cleopatra's Needle?",
    choices: ["Stoneworking tools and objects resembling Masonic emblems were reported beneath it when it was moved", "Its inscription names the first Grand Master of Egypt", "It was originally erected at King Solomon's Temple", "Its base contains the earliest copy of the Old Charges"], correctAnswer: "Stoneworking tools and objects resembling Masonic emblems were reported beneath it when it was moved",
    sourceQuestionNumber: 263, sourcePage: 32, source: "Freemasonry at a Glance, question 263, printed pages 32-33; interpretation qualified"
  },
  {
    id: "book-264", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Who were the Dionysian Artificers in the traditional account?",
    choices: ["A Phoenician society of architects and builders who worked in stone, metal, and precious materials", "A Roman military order devoted to Mithras", "An English group that opposed Freemasonry", "A Scottish lodge of non-operative antiquarians"], correctAnswer: "A Phoenician society of architects and builders who worked in stone, metal, and precious materials",
    sourceQuestionNumber: 264, sourcePage: 33, source: "Freemasonry at a Glance, question 264, printed page 33; presented as a traditional account"
  },
  {
    id: "book-265", category: "Ancient Mysteries and Early Masonic History", difficulty: "hard",
    question: "What traditional link has been claimed between the Dionysian Artificers and Freemasonry?",
    choices: ["Tyre was said to be one of their centers, Hiram Abiff was claimed as a member, and they were described as secretly organized", "They were said to have founded the Grand Lodge of England in 1717", "They were credited with writing the Regius Manuscript", "They were described as the first Christian monastic builders"], correctAnswer: "Tyre was said to be one of their centers, Hiram Abiff was claimed as a member, and they were described as secretly organized",
    sourceQuestionNumber: 265, sourcePage: 33, source: "Freemasonry at a Glance, question 265, printed page 33; speculative claims explicitly identified as tradition"
  },
  {
    id: "book-266", category: "Ancient Mysteries and Early Masonic History", difficulty: "hard",
    question: "Which summary best describes the myth of Adonis?",
    choices: ["A beautiful youth divided his time between Aphrodite and Persephone, was killed by a boar, and was associated with return to life", "A master builder was slain by three workmen and raised by a king", "A sun god passed through seven grades before defeating darkness", "A prince gathered the masons of England at York and issued constitutions"], correctAnswer: "A beautiful youth divided his time between Aphrodite and Persephone, was killed by a boar, and was associated with return to life",
    sourceQuestionNumber: 266, sourcePage: 33, source: "Freemasonry at a Glance, question 266, printed page 33; Greek names modernized from Venus, Proserpine, Jupiter, and Diana"
  },
  {
    id: "book-267", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Who were the Roman Collegia?",
    choices: ["Associations of workers and craftspeople, including builders and workers in stone, metal, wood, and textiles", "Priests who directed the Eleusinian Mysteries", "Scottish scholars who wrote the Old Charges", "French ritualists who created Egyptian Masonry"], correctAnswer: "Associations of workers and craftspeople, including builders and workers in stone, metal, wood, and textiles",
    sourceQuestionNumber: 267, sourcePage: 33, source: "Freemasonry at a Glance, question 267, printed page 33; legendary founding date omitted"
  },
  {
    id: "book-268", category: "Ancient Mysteries and Early Masonic History", difficulty: "hard",
    question: "Who were the Comacine Masters?",
    choices: ["Medieval builders associated with the Lake Como region whom older writers linked to the Roman Collegia and later European Masonry", "Roman priests who supervised Mithraic initiations", "Irish Masons who founded the Antients Grand Lodge", "English tavern keepers who hosted the first Grand Lodge"], correctAnswer: "Medieval builders associated with the Lake Como region whom older writers linked to the Roman Collegia and later European Masonry",
    sourceQuestionNumber: 268, sourcePage: 33, source: "Freemasonry at a Glance, question 268, printed pages 33-34; direct descent from the Collegia and Freemasonry treated as an older theory"
  },
  {
    id: "book-269", category: "Ancient Mysteries and Early Masonic History", difficulty: "hard",
    question: "What is the traditional story of the York Assembly?",
    choices: ["Prince Edwin gathered Masons at York in 926, organized a governing body, and issued Constitutions and Charges", "Four London lodges met at the Goose and Gridiron in 1717", "Roman builders fled to Lake Como after the fall of the Empire", "Queen Elizabeth created the first English Grand Lodge"], correctAnswer: "Prince Edwin gathered Masons at York in 926, organized a governing body, and issued Constitutions and Charges",
    sourceQuestionNumber: 269, sourcePage: 34, source: "Freemasonry at a Glance, question 269, printed page 34; York Assembly explicitly presented as tradition"
  },
  {
    id: "book-270", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "How did the 1813 Articles of Union define pure Ancient Masonry?",
    choices: ["The Entered Apprentice, Fellow Craft, and Master Mason degrees, including the Supreme Order of the Holy Royal Arch", "The three Craft degrees without any connection to the Royal Arch", "The Craft degrees together with every chivalric and high degree", "Only the Entered Apprentice and Fellow Craft degrees"], correctAnswer: "The Entered Apprentice, Fellow Craft, and Master Mason degrees, including the Supreme Order of the Holy Royal Arch",
    sourceQuestionNumber: 270, sourcePage: 34, source: "Freemasonry at a Glance, question 270, printed page 34"
  },
  {
    id: "book-271", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Which colors are assigned to the three degrees in this older description of Ancient Craft Masonry?",
    choices: ["Entered Apprentice white, Fellow Craft blue, Master Mason red", "Entered Apprentice blue, Fellow Craft white, Master Mason red", "Entered Apprentice red, Fellow Craft blue, Master Mason white", "All three degrees blue"], correctAnswer: "Entered Apprentice white, Fellow Craft blue, Master Mason red",
    sourceQuestionNumber: 271, sourcePage: 34, source: "Freemasonry at a Glance, question 271, printed page 34; source-specific color scheme identified as an older description"
  },
  {
    id: "book-272", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "What is the principal documentary source for early Craft Masonry?",
    choices: ["The manuscript documents known as the Old Charges", "The diaries of Elias Ashmole", "The minutes of the 1717 Grand Lodge", "The Ahiman Rezon alone"], correctAnswer: "The manuscript documents known as the Old Charges",
    sourceQuestionNumber: 272, sourcePage: 34, source: "Freemasonry at a Glance, question 272, printed page 34"
  },
  {
    id: "book-273", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "About how many Old Charge manuscripts were known when this account was written?",
    choices: ["About 90", "About 12", "About 300", "More than 1,000"], correctAnswer: "About 90",
    sourceQuestionNumber: 273, sourcePage: 34, source: "Freemasonry at a Glance, question 273, printed page 34; number framed in the historical context of the source"
  },
  {
    id: "book-274", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Which is the earliest surviving document among the Old Charges?",
    choices: ["The Regius, or Halliwell, Manuscript", "The Tunnah Manuscript", "The Harleian Manuscript No. 1942", "The Trinity College Tripos note"], correctAnswer: "The Regius, or Halliwell, Manuscript",
    sourceQuestionNumber: 274, sourcePage: 34, source: "Freemasonry at a Glance, question 274, printed page 34; circa 1390 dating retained as conventional"
  },
  {
    id: "book-275", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "Where is the original Regius Manuscript preserved today?",
    choices: ["The British Library", "The Library of Congress", "The Iowa Masonic Library", "Trinity College Dublin"], correctAnswer: "The British Library",
    sourceQuestionNumber: 275, sourcePage: 34, source: "Freemasonry at a Glance, question 275, printed page 34; location updated from the former British Museum manuscript collection to the British Library"
  },
  {
    id: "book-276", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "What form does the Regius Manuscript take?",
    choices: ["A poem of moral duties", "A collection of architectural drawings", "A diary of Grand Lodge meetings", "A list of tavern signs"], correctAnswer: "A poem of moral duties",
    sourceQuestionNumber: 276, sourcePage: 34, source: "Freemasonry at a Glance, question 276, printed page 34"
  },
  {
    id: "book-277", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "Which historic Masonic manuscript opens with a prayer to the Holy Trinity?",
    choices: ["Harleian Manuscript No. 1942", "The Regius Manuscript", "The Tunnah Manuscript", "The Trinity College Tripos note"], correctAnswer: "Harleian Manuscript No. 1942",
    sourceQuestionNumber: 277, sourcePage: 34, source: "Freemasonry at a Glance, question 277, printed page 34"
  },
  {
    id: "book-278", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "What is the Trinity College Tripos note?",
    choices: ["A 1688 Dublin document referring to the Society of Freemasons", "A 1390 poem setting out moral duties", "The 1813 agreement uniting two English Grand Lodges", "A 1723 anti-Masonic proclamation"], correctAnswer: "A 1688 Dublin document referring to the Society of Freemasons",
    sourceQuestionNumber: 278, sourcePage: 35, source: "Freemasonry at a Glance, question 278, printed page 35"
  },
  {
    id: "book-279", category: "Ancient Mysteries and Early Masonic History", difficulty: "hard",
    question: "Which 1828 manuscript is identified as the latest document in this listing of Old Charges?",
    choices: ["The Tunnah Manuscript", "The Harleian Manuscript", "The Regius Manuscript", "The Cooke Manuscript"], correctAnswer: "The Tunnah Manuscript",
    sourceQuestionNumber: 279, sourcePage: 35, source: "Freemasonry at a Glance, question 279, printed page 35; source-specific listing clarified"
  },
  {
    id: "book-280", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "How were men described as being made Masons in some early accounts?",
    choices: ["By being entrusted with the secret word", "By completing seven degrees", "By serving seven years as architects", "By receiving a charter from a king"], correctAnswer: "By being entrusted with the secret word",
    sourceQuestionNumber: 280, sourcePage: 35, source: "Freemasonry at a Glance, question 280, printed page 35"
  },
  {
    id: "book-281", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "Is modern Freemasonry a direct offspring of the medieval craft guilds?",
    choices: ["The question is disputed among Masonic historians", "Yes, and the complete line of descent is documented", "No, and no scholar has ever proposed such a connection", "Yes, but only through the Knights Templar"], correctAnswer: "The question is disputed among Masonic historians",
    sourceQuestionNumber: 281, sourcePage: 35, source: "Freemasonry at a Glance, question 281, printed page 35"
  },
  {
    id: "book-282", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Who was Jacques de Molay?",
    choices: ["The last Grand Master of the medieval Knights Templar, executed in Paris in 1314", "The first Grand Master of the Grand Lodge of England", "The compiler of Anderson's Constitutions", "The founder of the Roman Collegia"], correctAnswer: "The last Grand Master of the medieval Knights Templar, executed in Paris in 1314",
    sourceQuestionNumber: 282, sourcePage: 35, source: "Freemasonry at a Glance, question 282, printed page 35; incorrect March 11 date omitted"
  },
  {
    id: "book-283", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "What is the earliest recorded governmental opposition to Masonic assemblies in England?",
    choices: ["A 1425 law under Henry VI forbidding Masons to gather in chapters and congregations", "A 1314 order issued after the death of Jacques de Molay", "A 1598 proclamation by James VI closing every lodge", "A 1717 act banning the new Grand Lodge"], correctAnswer: "A 1425 law under Henry VI forbidding Masons to gather in chapters and congregations",
    sourceQuestionNumber: 283, sourcePage: 35, source: "Freemasonry at a Glance, question 283, printed page 35"
  },
  {
    id: "book-284", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Which English queen is traditionally said to have sent an armed force to dissolve a Masonic assembly?",
    choices: ["Elizabeth I", "Mary I", "Anne", "Victoria"], correctAnswer: "Elizabeth I",
    sourceQuestionNumber: 284, sourcePage: 35, source: "Freemasonry at a Glance, question 284, printed page 35; story explicitly presented as tradition"
  },
  {
    id: "book-285", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Which lodge is generally credited with the oldest surviving Masonic lodge minutes?",
    choices: ["Lodge of Edinburgh (Mary's Chapel) No. 1", "Lodge of Antiquity No. 2", "St. Andrew's Lodge of Boston", "Royal Somerset House and Inverness Lodge"], correctAnswer: "Lodge of Edinburgh (Mary's Chapel) No. 1",
    sourceQuestionNumber: 285, sourcePage: 35, source: "Freemasonry at a Glance, question 285, printed page 35; inaccurate 1598 entry date omitted"
  },
  {
    id: "book-286", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "Why is John Boswell of Auchinleck significant in Masonic history?",
    choices: ["His 1600 attendance at the Lodge of Edinburgh is an early record of a non-operative Mason", "He wrote the Regius Manuscript", "He organized the York Assembly of 926", "He founded the first Grand Lodge in 1717"], correctAnswer: "His 1600 attendance at the Lodge of Edinburgh is an early record of a non-operative Mason",
    sourceQuestionNumber: 286, sourcePage: 35, source: "Freemasonry at a Glance, question 286, printed page 35; spelling and wording corrected"
  },
  {
    id: "book-287", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "What evidence did Robert Plot give in 1686 that Freemasonry was widespread?",
    choices: ["He wrote that it was spread more or less throughout the nation", "He listed ninety Grand Lodges in London", "He described four lodges meeting at the Goose and Gridiron", "He recorded a royal charter issued to every English lodge"], correctAnswer: "He wrote that it was spread more or less throughout the nation",
    sourceQuestionNumber: 287, sourcePage: 35, source: "Freemasonry at a Glance, question 287, printed page 35; author identified as Robert Plot"
  },
  {
    id: "book-288", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Who was Elias Ashmole?",
    choices: ["An English antiquarian, founder of the Ashmolean Museum, and early recorded non-operative Freemason", "A French ritualist who created Egyptian Masonry", "The last Grand Master of the Knights Templar", "An Irish Mason who compiled the Ahiman Rezon"], correctAnswer: "An English antiquarian, founder of the Ashmolean Museum, and early recorded non-operative Freemason",
    sourceQuestionNumber: 288, sourcePage: 36, source: "Freemasonry at a Glance, question 288, printed page 36"
  },
  {
    id: "book-289", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "Which great English architect has traditionally been claimed as a Freemason and Grand Master?",
    choices: ["Sir Christopher Wren", "Inigo Jones", "Nicholas Hawksmoor", "John Vanbrugh"], correctAnswer: "Sir Christopher Wren",
    sourceQuestionNumber: 289, sourcePage: 36, source: "Freemasonry at a Glance, question 289, printed page 36; Wren's Masonic membership presented as a traditional claim because it is disputed"
  },
  {
    id: "book-290", category: "Ancient Mysteries and Early Masonic History", difficulty: "hard",
    question: "Who was Chevalier Andrew Michael Ramsay?",
    choices: ["A Scottish-born writer whose influential 1737 oration linked Freemasonry with Crusading chivalry", "An English architect who designed St. Paul's Cathedral", "An antiquarian who founded the Ashmolean Museum", "An Irish compiler of the Constitutions of the Antients"], correctAnswer: "A Scottish-born writer whose influential 1737 oration linked Freemasonry with Crusading chivalry",
    sourceQuestionNumber: 290, sourcePage: 36, source: "Freemasonry at a Glance, question 290, printed page 36; historically unreliable claim that Ramsay invented rejected English degrees modernized"
  },
  {
    id: "book-291", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "When and where is modern organized English Freemasonry traditionally dated?",
    choices: ["June 24, 1717, at the Goose and Gridiron Tavern in London", "December 28, 1598, at Mary's Chapel in Edinburgh", "March 11, 1314, in Paris", "September 18, 1793, in Washington"], correctAnswer: "June 24, 1717, at the Goose and Gridiron Tavern in London",
    sourceQuestionNumber: 291, sourcePage: 36, source: "Freemasonry at a Glance, question 291, printed page 36; conventional founding account identified as traditional"
  },
  {
    id: "book-292", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "How many of the four lodges associated with the formation of the Grand Lodge of England still exist?",
    choices: ["Three", "One", "Two", "All four"], correctAnswer: "Three",
    sourceQuestionNumber: 292, sourcePage: 36, source: "Freemasonry at a Glance, question 292, printed page 36"
  },
  {
    id: "book-293", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Does the original Goose and Gridiron Alehouse still stand?",
    choices: ["No; it was demolished in the 1890s", "Yes; it remains an operating tavern", "Yes; it is part of Freemasons' Hall", "No; it was destroyed in the Great Fire of 1666"], correctAnswer: "No; it was demolished in the 1890s",
    sourceQuestionNumber: 293, sourcePage: 36, source: "Freemasonry at a Glance, question 293, printed page 36"
  },
  {
    id: "book-294", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Where did many early English lodges meet?",
    choices: ["In taverns", "In royal palaces", "In purpose-built Masonic temples", "In university lecture halls"], correctAnswer: "In taverns",
    sourceQuestionNumber: 294, sourcePage: 36, source: "Freemasonry at a Glance, question 294, printed page 36"
  },
  {
    id: "book-295", category: "Ancient Mysteries and Early Masonic History", difficulty: "hard",
    question: "Which group consists entirely of names used by old English taverns associated with lodge meetings?",
    choices: ["Bath Chair, Busy Body, Cock and Bottle, Green Man and Bell", "Goose and Crown, Golden Compass, Silver Trowel, Blue Apron", "King's Ashlar, Mason's Arms, Three Gavels, Royal Square", "Lion and Pillar, Seven Stars, Red Level, White Glove"], correctAnswer: "Bath Chair, Busy Body, Cock and Bottle, Green Man and Bell",
    sourceQuestionNumber: 295, sourcePage: 36, source: "Freemasonry at a Glance, question 295, printed page 36; representative names selected from the source's longer list"
  },
  {
    id: "book-296", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Who became the first Grand Master after the formation of the Grand Lodge in 1717?",
    choices: ["Anthony Sayer", "James Anderson", "John Theophilus Desaguliers", "George Payne"], correctAnswer: "Anthony Sayer",
    sourceQuestionNumber: 296, sourcePage: 36, source: "Freemasonry at a Glance, question 296, printed page 36; surname corrected from Sayre to Sayer"
  },
  {
    id: "book-297", category: "Ancient Mysteries and Early Masonic History", difficulty: "medium",
    question: "Who was John Theophilus Desaguliers?",
    choices: ["A French-born English scientist and influential Masonic leader who served as Grand Master in 1719", "A Scottish architect who built St. Paul's Cathedral", "An Italian adventurer who created Egyptian Masonry", "An Irish writer who founded the Gormogons"], correctAnswer: "A French-born English scientist and influential Masonic leader who served as Grand Master in 1719",
    sourceQuestionNumber: 297, sourcePage: 37, source: "Freemasonry at a Glance, question 297, printed page 37; name and biographical description modernized"
  },
  {
    id: "book-298", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Which controversial eighteenth-century figure was better known as Cagliostro?",
    choices: ["Giuseppe Balsamo", "James Anderson", "Laurence Dermott", "Andrew Michael Ramsay"], correctAnswer: "Giuseppe Balsamo",
    sourceQuestionNumber: 298, sourcePage: 37, source: "Freemasonry at a Glance, question 298, printed page 37; first name corrected from Joseph to Giuseppe"
  },
  {
    id: "book-299", category: "Ancient Mysteries and Early Masonic History", difficulty: "hard",
    question: "Which description best identifies Cagliostro?",
    choices: ["An Italian adventurer and occultist associated with an Egyptian Rite who died while imprisoned by the Inquisition", "A Scottish scholar whose 1737 oration linked Masonry with chivalry", "An English scientist elected Grand Master in 1719", "A medieval Templar executed in Paris in 1314"], correctAnswer: "An Italian adventurer and occultist associated with an Egyptian Rite who died while imprisoned by the Inquisition",
    sourceQuestionNumber: 299, sourcePage: 37, source: "Freemasonry at a Glance, question 299, printed page 37; polemical martyr/impostor language removed"
  },
  {
    id: "book-300", category: "Ancient Mysteries and Early Masonic History", difficulty: "easy",
    question: "Who were the Gormogons?",
    choices: ["An eighteenth-century English society that mocked and opposed Freemasonry", "A medieval brotherhood of builders from Lake Como", "A group of Irish Masons known as the Antients", "A Roman association of stoneworkers"], correctAnswer: "An eighteenth-century English society that mocked and opposed Freemasonry",
    sourceQuestionNumber: 300, sourcePage: 37, source: "Freemasonry at a Glance, question 300, printed page 37; disputed 1723 founding date omitted"
  }
];
