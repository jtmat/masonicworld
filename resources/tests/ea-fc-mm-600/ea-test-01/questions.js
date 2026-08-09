/*
  ENTERED APPRENTICE QUESTION BANK - SET 1

  Source: Oliver Day Street, Symbolism of the Three Degrees,
  Part One: The Entered Apprentice Degree (1922).

  sourcePage and sourcePrompt are private maintenance notes. They are not
  displayed to test-takers. The source contains unnumbered discussion prompts,
  so descriptive prompt labels are retained instead of invented numbers.
*/

const QUESTION_BANK = [
  {
    id: "ea-001", category: "Entered Apprentice", difficulty: "easy",
    question: "What is a symbol?",
    choices: ["A visible representation used to convey an idea", "A literal statement requiring no interpretation", "A rule adopted by a Grand Lodge", "A historical claim supported by written records"],
    correctAnswer: "A visible representation used to convey an idea",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "2", sourcePrompt: "Relationship of symbols to thoughts", verified: "2026-08-05"
  },
  {
    id: "ea-002", category: "Entered Apprentice", difficulty: "easy",
    question: "Why can ordinary writing be described as symbolic?",
    choices: ["Written characters represent ideas by accepted usage", "Every written work contains a hidden ritual", "Writing originated exclusively in operative lodges", "Only sacred books use representative language"],
    correctAnswer: "Written characters represent ideas by accepted usage",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "3", sourcePrompt: "Relationship of symbols to written language", verified: "2026-08-05"
  },
  {
    id: "ea-003", category: "Entered Apprentice", difficulty: "medium",
    question: "What distinguishes an allegory from a simple, direct statement?",
    choices: ["It presents its real subject indirectly through an extended comparison", "It always describes an actual historical event", "It uses numbers instead of words", "It can have only one possible sentence"],
    correctAnswer: "It presents its real subject indirectly through an extended comparison",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "4", sourcePrompt: "Difference between symbols and figures of speech", verified: "2026-08-05"
  },
  {
    id: "ea-004", category: "Entered Apprentice", difficulty: "medium",
    question: "Why is memorizing Masonic ritual alone insufficient for understanding Freemasonry?",
    choices: ["The meaning of its ceremonies, words, and emblems must also be studied", "The ritual is intended only for lodge officers", "The ritual contains no moral instruction", "Written ritual is more important than its symbolism"],
    correctAnswer: "The meaning of its ceremonies, words, and emblems must also be studied",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "5-7", sourcePrompt: "Why Masons must study symbolism", verified: "2026-08-05"
  },
  {
    id: "ea-005", category: "Entered Apprentice", difficulty: "easy",
    question: "What does the word Mason literally mean?",
    choices: ["Builder in stone", "Teacher of geometry", "Keeper of secrets", "Traveler toward the East"],
    correctAnswer: "Builder in stone",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "7", sourcePrompt: "Name of the Fraternity", verified: "2026-08-05"
  },
  {
    id: "ea-006", category: "Entered Apprentice", difficulty: "easy",
    question: "What kind of building does the name Freemason symbolically suggest?",
    choices: ["The building of human character", "The construction of a lodge hall", "The restoration of Solomon's Temple", "The design of public monuments"],
    correctAnswer: "The building of human character",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "7-8", sourcePrompt: "Why we are Freemasons", verified: "2026-08-05"
  },
  {
    id: "ea-007", category: "Entered Apprentice", difficulty: "medium",
    question: "After the ceremonies indicate the path to Masonic knowledge, how is a Mason expected to continue?",
    choices: ["Through personal reading and reflection", "By waiting for another degree to supply every answer", "By memorizing titles and dates only", "Through public debate about private ritual"],
    correctAnswer: "Through personal reading and reflection",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "8", sourcePrompt: "Purpose of the ceremonies", verified: "2026-08-05"
  },
  {
    id: "ea-008", category: "Entered Apprentice", difficulty: "medium",
    question: "What central idea unifies the three degrees when they are considered together?",
    choices: ["An allegorical representation of human existence", "A literal history of medieval trade guilds", "A system for ranking occupations", "A record of architectural techniques"],
    correctAnswer: "An allegorical representation of human existence",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "9-10", sourcePrompt: "Symbolism of all three degrees together", verified: "2026-08-05"
  },
  {
    id: "ea-009", category: "Entered Apprentice", difficulty: "easy",
    question: "Which familiar phrase is commonly used to define Freemasonry?",
    choices: ["A system of morality veiled in allegory and illustrated by symbols", "A school of architecture governed by ancient kings", "A charitable order devoted only to relief", "A historical society preserving medieval customs"],
    correctAnswer: "A system of morality veiled in allegory and illustrated by symbols",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "10-11", sourcePrompt: "Definition of Masonry", verified: "2026-08-05"
  },
  {
    id: "ea-010", category: "Entered Apprentice", difficulty: "easy",
    question: "In the definition of Freemasonry, what does morality concern?",
    choices: ["Right and wrong in human conduct", "The design of operative tools", "The dates of Masonic events", "The authority of lodge officers"],
    correctAnswer: "Right and wrong in human conduct",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "11", sourcePrompt: "Meaning of morality", verified: "2026-08-05"
  },
  {
    id: "ea-011", category: "Entered Apprentice", difficulty: "medium",
    question: "What does the phrase veiled in allegory mean?",
    choices: ["The real subject is presented indirectly through figurative language", "The teaching is deliberately made impossible to understand", "Every story must be accepted as literal history", "The subject can be discussed only in writing"],
    correctAnswer: "The real subject is presented indirectly through figurative language",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "11", sourcePrompt: "Meaning of allegory", verified: "2026-08-05"
  },
  {
    id: "ea-012", category: "Entered Apprentice", difficulty: "medium",
    question: "What role do symbols play within Masonic allegory?",
    choices: ["They help make its lessons understandable", "They replace the need for moral teaching", "They prove every traditional claim historically", "They limit each lesson to an operative meaning"],
    correctAnswer: "They help make its lessons understandable",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "11", sourcePrompt: "Meaning of symbols in the definition", verified: "2026-08-05"
  },
  {
    id: "ea-013", category: "Entered Apprentice", difficulty: "hard",
    question: "Which two considerations help restrain overly fanciful interpretations of Masonic symbols?",
    choices: ["Masonry's operative origin and its moral and religious purpose", "The age of a lodge and the rank of its officers", "The language of a ritual and the size of a jurisdiction", "The architecture of a temple and the wealth of its builders"],
    correctAnswer: "Masonry's operative origin and its moral and religious purpose",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "11-12", sourcePrompt: "Whether all meanings of symbols are known", verified: "2026-08-05"
  },
  {
    id: "ea-014", category: "Entered Apprentice", difficulty: "medium",
    question: "From what earlier organizations did Speculative Freemasonry develop?",
    choices: ["Operative masons' guilds", "Naval trading companies", "Universities of philosophy", "Orders of mounted knights"],
    correctAnswer: "Operative masons' guilds",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "12", sourcePrompt: "Development of Speculative Masonry", verified: "2026-08-05"
  },
  {
    id: "ea-015", category: "Entered Apprentice", difficulty: "hard",
    question: "By approximately what date was Speculative Masonry certainly in existence, though still connected in some way with the operative craft?",
    choices: ["About 1600", "About 1066", "About 1450", "About 1813"],
    correctAnswer: "About 1600",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "12", sourcePrompt: "Transition from operative to Speculative Masonry", verified: "2026-08-05"
  },
  {
    id: "ea-016", category: "Entered Apprentice", difficulty: "hard",
    question: "When did Speculative Masonry apparently separate completely from operative Masonry?",
    choices: ["A few years before 1717", "Immediately after 1066", "During the building of Solomon's Temple", "Near the end of the nineteenth century"],
    correctAnswer: "A few years before 1717",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "12", sourcePrompt: "Transition from operative to Speculative Masonry", verified: "2026-08-05"
  },
  {
    id: "ea-017", category: "Entered Apprentice", difficulty: "easy",
    question: "Which stage of life is represented by the Entered Apprentice Degree in the three-degree allegory?",
    choices: ["Youth and preparation", "Manhood and construction", "Old age and reflection", "Death and resurrection"],
    correctAnswer: "Youth and preparation",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "13", sourcePrompt: "Symbolism of the Entered Apprentice Degree", verified: "2026-08-05"
  },
  {
    id: "ea-018", category: "Entered Apprentice", difficulty: "easy",
    question: "Which stage of life is represented by the Fellow Craft Degree in the three-degree allegory?",
    choices: ["Manhood and constructive work", "Birth and helplessness", "Old age and reflection", "Death and everlasting life"],
    correctAnswer: "Manhood and constructive work",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "13", sourcePrompt: "Symbolism of the Fellow Craft Degree", verified: "2026-08-05"
  },
  {
    id: "ea-019", category: "Entered Apprentice", difficulty: "easy",
    question: "What does the Master Mason Degree represent in the three-degree allegory?",
    choices: ["Old age, death, resurrection, and everlasting life", "Youth and the preparation for life", "Manhood and constructive labor", "The founding of an operative guild"],
    correctAnswer: "Old age, death, resurrection, and everlasting life",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "13", sourcePrompt: "Symbolism of the Master Mason Degree", verified: "2026-08-05"
  },
  {
    id: "ea-020", category: "Entered Apprentice", difficulty: "easy",
    question: "What does the lodge symbolically represent?",
    choices: ["The world in which humanity works", "Only the room where a lodge meets", "Solomon's private residence", "A medieval quarry"],
    correctAnswer: "The world in which humanity works",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "13-15", sourcePrompt: "The Lodge", verified: "2026-08-05"
  },
  {
    id: "ea-021", category: "Entered Apprentice", difficulty: "easy",
    question: "How is the symbolic extent of a lodge described?",
    choices: ["East to West, North to South, earth to heaven, and surface to center", "North to South and floor to ceiling only", "Altar to East and door to West", "Within the four walls of the lodge room"],
    correctAnswer: "East to West, North to South, earth to heaven, and surface to center",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "14", sourcePrompt: "Oblong square", verified: "2026-08-05"
  },
  {
    id: "ea-022", category: "Entered Apprentice", difficulty: "easy",
    question: "What is the symbolic covering of a lodge?",
    choices: ["A clouded canopy or starry-decked heaven", "A roof of polished stone", "A blue cloth supported by pillars", "The floor of the lodge above it"],
    correctAnswer: "A clouded canopy or starry-decked heaven",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "15", sourcePrompt: "Covering of the Lodge", verified: "2026-08-05"
  },
  {
    id: "ea-023", category: "Entered Apprentice", difficulty: "easy",
    question: "If the lodge symbolizes the world and the Mason symbolizes man, what does initiation symbolize?",
    choices: ["The individual's birth into the world", "The completion of all learning", "The construction of a temple", "The election of a lodge officer"],
    correctAnswer: "The individual's birth into the world",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "15", sourcePrompt: "Why initiation symbolizes birth", verified: "2026-08-05"
  },
  {
    id: "ea-024", category: "Entered Apprentice", difficulty: "easy",
    question: "What condition does the candidate's preparation initially represent?",
    choices: ["The helpless and uninstructed condition of a newborn child", "The authority of an experienced ruler", "The skill of a trained operative mason", "The independence of a completed scholar"],
    correctAnswer: "The helpless and uninstructed condition of a newborn child",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "15-16", sourcePrompt: "Preparation", verified: "2026-08-05"
  },
  {
    id: "ea-025", category: "Entered Apprentice", difficulty: "medium",
    question: "Beyond individual birth and education, what broader development does the candidate's preparation symbolize?",
    choices: ["Humanity's progress from ignorance toward civilization", "The growth of a lodge from small to large", "The spread of one jurisdiction into another", "The replacement of stone buildings by wooden ones"],
    correctAnswer: "Humanity's progress from ignorance toward civilization",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "16-17", sourcePrompt: "Individual and racial progress", verified: "2026-08-05"
  },
  {
    id: "ea-026", category: "Entered Apprentice", difficulty: "medium",
    question: "How does the candidate's preparation illustrate equality?",
    choices: ["It removes visible distinctions of fashion, station, and wealth", "It gives every candidate identical talents", "It eliminates differences in character", "It assigns every Mason the same office"],
    correctAnswer: "It removes visible distinctions of fashion, station, and wealth",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "17", sourcePrompt: "Preparation in terms of equality", verified: "2026-08-05"
  },
  {
    id: "ea-027", category: "Entered Apprentice", difficulty: "medium",
    question: "Which differences does Masonic equality leave intact?",
    choices: ["Differences of heart, mind, and character", "Differences created solely by wealth", "Differences created solely by social title", "Differences in legal rights"],
    correctAnswer: "Differences of heart, mind, and character",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "17", sourcePrompt: "Preparation in terms of equality", verified: "2026-08-05"
  },
  {
    id: "ea-028", category: "Entered Apprentice", difficulty: "easy",
    question: "What duty is among the first lessons impressed upon an Entered Apprentice?",
    choices: ["Secrecy", "Public recognition", "Political advocacy", "Architectural design"],
    correctAnswer: "Secrecy",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "17-18", sourcePrompt: "Secrecy", verified: "2026-08-05"
  },
  {
    id: "ea-029", category: "Entered Apprentice", difficulty: "easy",
    question: "How important are secret signs, tokens, and words compared with Freemasonry's moral teachings?",
    choices: ["They are among its least important parts", "They are its entire purpose", "They are more important than moral instruction", "They are useful only to lodge officers"],
    correctAnswer: "They are among its least important parts",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "18", sourcePrompt: "Value of secrecy", verified: "2026-08-05"
  },
  {
    id: "ea-030", category: "Entered Apprentice", difficulty: "medium",
    question: "What practical purposes do Masonic signs, tokens, and words serve?",
    choices: ["Protection against impostors and recognition among the initiated", "Proof of a candidate's social standing", "Replacement of all written lodge records", "Authority to interpret every symbol"],
    correctAnswer: "Protection against impostors and recognition among the initiated",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "18", sourcePrompt: "Value of secrecy to Masons", verified: "2026-08-05"
  },
  {
    id: "ea-031", category: "Entered Apprentice", difficulty: "medium",
    question: "What is the chief value of the Masonic lesson of secrecy?",
    choices: ["Training a person to preserve confidences unless a higher duty requires disclosure", "Preventing any discussion of Masonic history", "Keeping the existence of lodges unknown", "Allowing a Mason to ignore civil law"],
    correctAnswer: "Training a person to preserve confidences unless a higher duty requires disclosure",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "18", sourcePrompt: "Chief value of secrecy", verified: "2026-08-05"
  },
  {
    id: "ea-032", category: "Entered Apprentice", difficulty: "easy",
    question: "What is the ancient symbol of secrecy?",
    choices: ["A finger laid across the lips", "A hand placed over the eyes", "A key held above the head", "A lamp covered by a square"],
    correctAnswer: "A finger laid across the lips",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "18", sourcePrompt: "Symbol of secrecy", verified: "2026-08-05"
  },
  {
    id: "ea-033", category: "Entered Apprentice", difficulty: "easy",
    question: "How are an operative mason's tools used in Masonic teaching?",
    choices: ["As emblems of moral qualities", "As proof of professional training", "As decorations without meaning", "As measurements of lodge rank"],
    correctAnswer: "As emblems of moral qualities",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "19", sourcePrompt: "Tool Symbols", verified: "2026-08-05"
  },
  {
    id: "ea-034", category: "Entered Apprentice", difficulty: "medium",
    question: "Why are tools fitting symbols for human virtues?",
    choices: ["Tools have been essential to material, intellectual, and artistic progress", "Tools were used only by wealthy builders", "Every tool has always had one universal meaning", "Tools eliminate the need for education"],
    correctAnswer: "Tools have been essential to material, intellectual, and artistic progress",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "19-22", sourcePrompt: "Importance of tool symbols", verified: "2026-08-05"
  },
  {
    id: "ea-035", category: "Entered Apprentice", difficulty: "easy",
    question: "Which familiar names for periods of human development come from their characteristic tools?",
    choices: ["Stone Age, Bronze Age, and Iron Age", "Ancient Age, Middle Age, and Modern Age", "Golden Age, Silver Age, and Copper Age", "Agricultural Age, Naval Age, and Space Age"],
    correctAnswer: "Stone Age, Bronze Age, and Iron Age",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "20", sourcePrompt: "Importance of tools to humanity", verified: "2026-08-05"
  },
  {
    id: "ea-036", category: "Entered Apprentice", difficulty: "medium",
    question: "Why is the use of working tools especially fitting in a system of character building?",
    choices: ["Tools shape a material building as virtues shape human character", "Every moral lesson originated in a quarry", "Only operative masons can develop character", "A finished building requires no plan"],
    correctAnswer: "Tools shape a material building as virtues shape human character",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "21-22", sourcePrompt: "Importance of tool symbols to Masons", verified: "2026-08-05"
  },
  {
    id: "ea-037", category: "Entered Apprentice", difficulty: "easy",
    question: "What does the twenty-four-inch gauge symbolize?",
    choices: ["Time wisely and properly used", "The speed with which life passes", "Equality among all people", "Advanced education and refinement"],
    correctAnswer: "Time wisely and properly used",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "22-23", sourcePrompt: "Twenty-four-inch Gauge", verified: "2026-08-05"
  },
  {
    id: "ea-038", category: "Entered Apprentice", difficulty: "easy",
    question: "How does the scythe's symbolism differ from that of the twenty-four-inch gauge?",
    choices: ["The scythe represents time's swift passage and the brevity of life", "The scythe represents time devoted to relief", "The scythe represents the equality of labor", "The scythe represents advanced study"],
    correctAnswer: "The scythe represents time's swift passage and the brevity of life",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "22", sourcePrompt: "Gauge compared with the Scythe", verified: "2026-08-05"
  },
  {
    id: "ea-039", category: "Entered Apprentice", difficulty: "easy",
    question: "Why does the twenty-four-inch gauge naturally represent a day?",
    choices: ["Its twenty-four divisions correspond to the day's twenty-four hours", "It was traditionally used only at sunrise", "It measures the length of a sundial", "Its two edges represent day and night"],
    correctAnswer: "Its twenty-four divisions correspond to the day's twenty-four hours",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "23", sourcePrompt: "Twenty-four-inch Gauge", verified: "2026-08-05"
  },
  {
    id: "ea-040", category: "Entered Apprentice", difficulty: "easy",
    question: "What was the operative use of the common gavel?",
    choices: ["Breaking unwanted corners and projections from rough stone", "Giving stone its final polish and ornament", "Testing whether a wall was vertical", "Spreading mortar between stones"],
    correctAnswer: "Breaking unwanted corners and projections from rough stone",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "23", sourcePrompt: "Common Gavel", verified: "2026-08-05"
  },
  {
    id: "ea-041", category: "Entered Apprentice", difficulty: "hard",
    question: "Before its symbolism was broadened in places where the chisel fell out of Blue Lodge use, what did the common gavel chiefly represent?",
    choices: ["The early training that removes crude habits and develops basic skill", "The advanced studies that produce polish and refinement", "The final judgment at the end of life", "The equality created by common labor"],
    correctAnswer: "The early training that removes crude habits and develops basic skill",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "23", sourcePrompt: "Common Gavel", verified: "2026-08-05"
  },
  {
    id: "ea-042", category: "Entered Apprentice", difficulty: "hard",
    question: "What does the chisel symbolize when compared with the common gavel?",
    choices: ["Advanced education that gives polish and refinement", "The first removal of rough projections", "The proper division of one's time", "The protection of a lodge from intrusion"],
    correctAnswer: "Advanced education that gives polish and refinement",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "24", sourcePrompt: "Chisel", verified: "2026-08-05"
  },
  {
    id: "ea-043", category: "Entered Apprentice", difficulty: "hard",
    question: "In American Masonry, in which degree did the chisel traditionally appear?",
    choices: ["The Mark Master Degree", "The Entered Apprentice Degree", "The Royal Arch Degree", "The Master Mason Degree"],
    correctAnswer: "The Mark Master Degree",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "24", sourcePrompt: "Degree in which the chisel is used", verified: "2026-08-05"
  },
  {
    id: "ea-044", category: "Entered Apprentice", difficulty: "hard",
    question: "In English Masonic symbolism, what does the key represent?",
    choices: ["The tongue, ready to defend a brother or remain silent", "The authority of the Worshipful Master", "The opening of Solomon's Temple", "The candidate's progress from West to East"],
    correctAnswer: "The tongue, ready to defend a brother or remain silent",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "25", sourcePrompt: "Key", verified: "2026-08-05"
  },
  {
    id: "ea-045", category: "Entered Apprentice", difficulty: "easy",
    question: "Why is Solomon's Temple used as a symbol in the character-building allegory?",
    choices: ["A supremely finished building can represent a perfected character", "It was the first structure made with tools", "It was built entirely by Entered Apprentices", "Its dimensions define every lodge room"],
    correctAnswer: "A supremely finished building can represent a perfected character",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "25-26", sourcePrompt: "Why Solomon's Temple was chosen", verified: "2026-08-05"
  },
  {
    id: "ea-046", category: "Entered Apprentice", difficulty: "hard",
    question: "How should the traditional connection between Freemasonry and the building of Solomon's Temple be regarded?",
    choices: ["As a plausible tradition rather than established historical fact", "As a fact accepted without qualification by all historians", "As a modern invention with no possible basis", "As an operative record preserved continuously since Solomon"],
    correctAnswer: "As a plausible tradition rather than established historical fact",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "26-28", sourcePrompt: "Whether the Temple legend is true or fiction", verified: "2026-08-05"
  },
  {
    id: "ea-047", category: "Entered Apprentice", difficulty: "hard",
    question: "What moral lesson is drawn from the tradition that no iron tool was heard during the building of Solomon's Temple?",
    choices: ["True character is built quietly, without bluster or show", "Moral improvement requires complete isolation", "Only ancient tools can teach virtue", "Silence is more important than honest labor"],
    correctAnswer: "True character is built quietly, without bluster or show",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "29", sourcePrompt: "Modesty of True Character", verified: "2026-08-05"
  },
  {
    id: "ea-048", category: "Entered Apprentice", difficulty: "medium",
    question: "What is the accepted etymological meaning of hale or hele?",
    choices: ["To cover or conceal", "To greet or salute", "To heal an injury", "To summon assistance"],
    correctAnswer: "To cover or conceal",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "29-30", sourcePrompt: "Hale", verified: "2026-08-05"
  },
  {
    id: "ea-049", category: "Entered Apprentice", difficulty: "easy",
    question: "Why is the officer guarding a lodge called the Tiler?",
    choices: ["Like a roof tiler who covers a building, he covers and protects the lodge", "He arranges the lodge floor in geometric patterns", "He records the names of visiting brethren", "He measures the dimensions of the lodge"],
    correctAnswer: "Like a roof tiler who covers a building, he covers and protects the lodge",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "30", sourcePrompt: "Tile, Tiler, Tyler", verified: "2026-08-05"
  },
  {
    id: "ea-050", category: "Entered Apprentice", difficulty: "hard",
    question: "What is known about the origin of the expression due guard?",
    choices: ["Its origin is uncertain, though one proposed derivation is the French Dieu me garde", "It is certainly an American phrase invented after 1717", "It comes directly from a Hebrew term for the Temple", "It was originally the title of a medieval lodge officer"],
    correctAnswer: "Its origin is uncertain, though one proposed derivation is the French Dieu me garde",
    source: "Oliver Day Street - Symbolism of the Three Degrees, Part One", sourcePage: "30", sourcePrompt: "Due Guard", verified: "2026-08-05"
  }
];
