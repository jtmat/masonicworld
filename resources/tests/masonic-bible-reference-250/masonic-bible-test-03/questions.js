"use strict";

function bibleMasonryQuestion(id, questionType, question, choices, correctAnswer, printedPage, sourceReference) {
  return {
    id,
    category: "The Bible in Masonry",
    questionType,
    question,
    choices,
    correctAnswer,
    source: `The Bible in Masonry, printed p. ${printedPage}`,
    sourceReference,
    verified: "2026-08-05"
  };
}

const QUESTION_BANK = [
  bibleMasonryQuestion(
    "bible-101", "quotation-to-reference",
    "Emblem of Innocence concludes with John declaring, ‘Behold the Lamb of God!’ Where is this found?",
    ["John 1:35-36", "Isaiah 53:4-9", "Proverbs 27:26", "John 21:15"], "John 1:35-36", 9, "Initiation, First Degree: Second Section - Emblem of Innocence - John 1:35-36"
  ),
  bibleMasonryQuestion(
    "bible-102", "reference-to-masonic-subject",
    "Ezekiel 43:12 declares the whole limit upon the mountaintop to be most holy. Which heading uses this passage?",
    ["Hills and Valleys", "The North Side", "The Valley of Jehoshaphat", "The Northeast Corner"], "Hills and Valleys", 10, "Passing - Hills and Valleys - Ezekiel 43:12"
  ),
  bibleMasonryQuestion(
    "bible-103", "quotation-to-reference",
    "The warning that people built high places and images ‘on every high hill, and under every green tree’ supports Hills and Valleys. Select the citation.",
    ["1 Kings 14:22-23", "Ezekiel 43:12", "Joel 3:2, 12", "Isaiah 14:12-23"], "1 Kings 14:22-23", 10, "Passing - Hills and Valleys - 1 Kings 14:22-23"
  ),
  bibleMasonryQuestion(
    "bible-104", "reference-to-masonic-subject",
    "The compassionate Samaritan in Luke 10:30-37 appears under which Masonic heading?",
    ["Universal Charity", "Brotherly Love", "Charity", "The Golden Rule"], "Universal Charity", 10, "Passing - Universal Charity - Luke 10:30-37"
  ),
  bibleMasonryQuestion(
    "bible-105", "quotation-to-reference",
    "The Pillar of Wisdom begins, ‘Wisdom hath builded her house, she hath hewn out her seven pillars.’ Identify the passage.",
    ["Proverbs 9:1-6", "Proverbs 8:1-36", "Job 28:12-28", "Ecclesiastes 12:13-14"], "Proverbs 9:1-6", 10, "Passing - The Pillar of Wisdom - Proverbs 9:1-6"
  ),
  bibleMasonryQuestion(
    "bible-106", "reference-to-masonic-subject",
    "Wisdom crying out and declaring, ‘By me kings reign,’ in Proverbs 8:1-36 belongs beneath which symbol?",
    ["The Pillar of Wisdom", "The Pillars", "The Master", "The Craftsmen"], "The Pillar of Wisdom", 10, "Passing - The Pillar of Wisdom - Proverbs 8:1-36"
  ),
  bibleMasonryQuestion(
    "bible-107", "quotation-to-reference",
    "‘The price of wisdom is above rubies’ is included under The Pillar of Wisdom. Locate the quotation.",
    ["Job 28:12-28", "Proverbs 9:1-6", "Proverbs 8:1-36", "James 1:5-8"], "Job 28:12-28", 10, "Passing - The Pillar of Wisdom - Job 28:12-28"
  ),
  bibleMasonryQuestion(
    "bible-108", "reference-to-masonic-subject",
    "The conclusion to fear God and keep his commandments in Ecclesiastes 12:13-14 supports which heading?",
    ["The Pillar of Wisdom", "The Obligation", "The Charge", "The Great and Sacred Name"], "The Pillar of Wisdom", 10, "Passing - The Pillar of Wisdom - Ecclesiastes 12:13-14"
  ),
  bibleMasonryQuestion(
    "bible-109", "quotation-to-reference",
    "A person who lacks wisdom is told to ask God, who gives liberally. Which corrected citation completes The Pillar of Wisdom references?",
    ["James 1:5-8", "Job 28:12-28", "Proverbs 8:1-36", "Ecclesiastes 12:13-14"], "James 1:5-8", 10, "Passing - The Pillar of Wisdom - James 1:5-8 (PDF misprints James 2:5-8)"
  ),
  bibleMasonryQuestion(
    "bible-110", "reference-to-masonic-subject",
    "The dream of angels ascending and descending a ladder in Genesis 28:10-22 represents what?",
    ["Jacob’s Ladder", "The Winding Stairs", "The Pillar of Wisdom", "The Spiritual Temple"], "Jacob’s Ladder", 10, "Passing - Jacob's Ladder - Genesis 28:10-22"
  ),
  bibleMasonryQuestion(
    "bible-111", "quotation-to-reference",
    "Charity is summarized by, ‘Now abideth faith, hope, charity, these three; but the greatest of these is charity.’ Choose the chapter.",
    ["1 Corinthians 13:1-13", "Luke 10:30-37", "James 2:14-17", "Galatians 6:1-2"], "1 Corinthians 13:1-13", 10, "Passing - Charity - 1 Corinthians 13:1-13"
  ),
  bibleMasonryQuestion(
    "bible-112", "reference-to-masonic-subject",
    "The ambition to sit ‘upon the mount of the congregation, in the sides of the north’ in Isaiah 14:12-23 relates to which location?",
    ["The North Side", "Hills and Valleys", "The Northeast Corner", "The Valley of Jehoshaphat"], "The North Side", 10, "Passing - The North Side - Isaiah 14:12-23"
  ),
  bibleMasonryQuestion(
    "bible-113", "quotation-to-reference",
    "The Tabernacle begins with God’s direction, ‘Let them make me a sanctuary; that I may dwell among them.’ Select the source.",
    ["Exodus 25:1-9", "Exodus 26:30", "Exodus 40:1-38", "Hebrews 9:1-12"], "Exodus 25:1-9", 10, "Passing - The Tabernacle - Exodus 25:1-9"
  ),
  bibleMasonryQuestion(
    "bible-114", "reference-to-masonic-subject",
    "Exodus 26:30 directs Moses to erect a structure according to the pattern shown on the mount. Which structure is meant?",
    ["The Tabernacle", "The Spiritual Temple", "The House Not Made with Hands", "The Lodge"], "The Tabernacle", 10, "Passing - The Tabernacle - Exodus 26:30"
  ),
  bibleMasonryQuestion(
    "bible-115", "quotation-to-reference",
    "A cloud covering the tent by day and fire appearing over it by night completes The Tabernacle discussion. Where is the account?",
    ["Exodus 40:1-38", "Exodus 25:1-9", "Exodus 26:30", "Numbers 9:15-20"], "Exodus 40:1-38", 10, "Passing - The Tabernacle - Exodus 40:1-38"
  ),
  bibleMasonryQuestion(
    "bible-116", "reference-to-masonic-subject",
    "Jonathan loving David as his own soul in 1 Samuel 18:1 introduces which principle?",
    ["Brotherly Love", "Universal Charity", "Charity", "Distressed Worthy Brother"], "Brotherly Love", 10, "Passing - Brotherly Love - 1 Samuel 18:1"
  ),
  bibleMasonryQuestion(
    "bible-117", "quotation-to-reference",
    "Jonathan made a covenant with David’s house and caused David to swear again because he loved him. Identify the Brotherly Love passage.",
    ["1 Samuel 20:16-17", "1 Samuel 18:1", "Proverbs 18:23-24", "1 John 4:19-21"], "1 Samuel 20:16-17", 10, "Passing - Brotherly Love - 1 Samuel 20:16-17"
  ),
  bibleMasonryQuestion(
    "bible-118", "reference-to-masonic-subject",
    "‘A man that hath friends must show himself friendly’ in Proverbs 18:23-24 is associated with what?",
    ["Brotherly Love", "Universal Charity", "The Golden Rule", "The Mason as Citizen"], "Brotherly Love", 10, "Passing - Brotherly Love - Proverbs 18:23-24"
  ),
  bibleMasonryQuestion(
    "bible-119", "quotation-to-reference",
    "The brief command ‘Let brotherly love continue’ is itself included under Brotherly Love. Choose the citation.",
    ["Hebrews 13:1", "1 John 2:9-11", "1 John 4:19-21", "Galatians 6:1-2"], "Hebrews 13:1", 10, "Passing - Brotherly Love - Hebrews 13:1"
  ),
  bibleMasonryQuestion(
    "bible-120", "reference-to-masonic-subject",
    "A person who hates his brother is described as walking in darkness in 1 John 2:9-11. Which virtue does this reinforce?",
    ["Brotherly Love", "Light", "Charity", "The Light of Life"], "Brotherly Love", 10, "Passing - Brotherly Love - 1 John 2:9-11"
  ),
  bibleMasonryQuestion(
    "bible-121", "quotation-to-reference",
    "‘He who loveth God love his brother also’ concludes the Brotherly Love references. Where is it written?",
    ["1 John 4:19-21", "1 John 2:9-11", "Hebrews 13:1", "1 Samuel 18:1"], "1 John 4:19-21", 10, "Passing - Brotherly Love - 1 John 4:19-21"
  ),
  bibleMasonryQuestion(
    "bible-122", "reference-to-masonic-subject",
    "Matthew 3:1-10 describes preaching in the wilderness and the call to repent. Which patron is represented?",
    ["St. John the Baptist", "St. John the Evangelist", "The Charge", "The Golden Rule"], "St. John the Baptist", 10, "Passing - St. John the Baptist - Matthew 3:1-10 (PDF misprints Matthew 4:1-10)"
  ),
  bibleMasonryQuestion(
    "bible-123", "quotation-to-reference",
    "St. John the Evangelist is presented as a companion in tribulation who was on Patmos ‘for the word of God.’ Select the account.",
    ["Revelation 1:9-20", "Revelation 1:1-3", "John 1:35-36", "Acts 8:14-17"], "Revelation 1:9-20", 10, "Passing - St. John the Evangelist - Revelation 1:9-20"
  ),
  bibleMasonryQuestion(
    "bible-124", "reference-to-masonic-subject",
    "Shadrach, Meshach, and Abednego refusing to worship Nebuchadnezzar’s image in Daniel 3:1-30 illustrates which virtue?",
    ["Fortitude", "Trust in God", "The Obligation", "The Faithful Servant"], "Fortitude", 10, "Passing - Fortitude - Daniel 3:1-30"
  ),
  bibleMasonryQuestion(
    "bible-125", "quotation-to-reference",
    "Daniel continued kneeling in prayer three times a day after the decree was signed. Which account supplies this second example of Fortitude?",
    ["Daniel 6:1-28", "Daniel 3:1-30", "Genesis 32:24-32", "Acts 10:9-35"], "Daniel 6:1-28", 10, "Passing - Fortitude - Daniel 6:1-28"
  ),
  bibleMasonryQuestion(
    "bible-126", "reference-to-masonic-subject",
    "Moses placing Joshua before Eleazar and laying his hands upon him in Numbers 27:22-23 illustrates what?",
    ["The Charge", "The Obligation", "The Master", "The Candidate"], "The Charge", 10, "Passing - The Charge - Numbers 27:22-23"
  ),
  bibleMasonryQuestion(
    "bible-127", "quotation-to-reference",
    "The Golden Rule is given as, ‘As ye would that men should do to you, do ye also to them likewise.’ Locate the passage.",
    ["Luke 6:27-38", "1 Corinthians 13:1-13", "Luke 10:30-37", "Romans 13:1-7"], "Luke 6:27-38", 10, "Passing - The Golden Rule - Luke 6:27-38"
  ),
  bibleMasonryQuestion(
    "bible-128", "reference-to-masonic-subject",
    "The commandment in Exodus 20:7 not to take God’s name in vain belongs to which heading?",
    ["The Great and Sacred Name", "The Obligation", "The Atheist", "The Letter G"], "The Great and Sacred Name", 10, "Passing - The Great and Sacred Name - Exodus 20:7"
  ),
  bibleMasonryQuestion(
    "bible-129", "quotation-to-reference",
    "The Mason as Citizen includes, ‘Render therefore unto Caesar the things which are Caesar’s; and unto God the things that are God’s.’ Select the citation.",
    ["Matthew 22:17-22", "Exodus 20:7", "Luke 6:27-38", "Numbers 27:22-23"], "Matthew 22:17-22", 10, "Passing - The Mason as Citizen - Matthew 22:17-22"
  ),
  bibleMasonryQuestion(
    "bible-130", "reference-to-masonic-subject",
    "Romans 13:1-7 directs payment of tribute, custom, fear, and honor to whom they are due. What does it illustrate?",
    ["The Mason as Citizen", "The Golden Rule", "The Daily Wage", "The Charge"], "The Mason as Citizen", 10, "Passing - The Mason as Citizen - Romans 13:1-7"
  ),
  bibleMasonryQuestion(
    "bible-131", "quotation-to-reference",
    "The Plumbline is introduced when the Lord asks Amos what he sees and declares, ‘I will set a plumbline in the midst of my people Israel.’ Choose the passage.",
    ["Amos 7:7-9", "Ezekiel 43:12", "Isaiah 28:16-17", "Joel 3:2, 12"], "Amos 7:7-9", 10, "Passing, Second Degree: First Section - The Plumbline - Amos 7:7-9"
  ),
  bibleMasonryQuestion(
    "bible-132", "reference-to-masonic-subject",
    "God gathering the nations for judgment in Joel 3:2, 12 gives its name to which location?",
    ["The Valley of Jehoshaphat", "Hills and Valleys", "The North Side", "The Clay Ground"], "The Valley of Jehoshaphat", 10, "Passing, Second Degree: First Section - The Valley of Jehoshaphat - Joel 3:2, 12"
  ),
  bibleMasonryQuestion(
    "bible-133", "quotation-to-reference",
    "Works of Creation opens with, ‘The heavens declare the glory of God; and the firmament sheweth his handywork.’ Identify the cited Psalm range.",
    ["Psalm 19:1-14", "Psalm 8:1-9", "Psalm 33:6-7", "Psalm 104:1-10"], "Psalm 19:1-14", 11, "Passing, Middle Chamber Lecture - Works of Creation - Psalm 19:1-14"
  ),
  bibleMasonryQuestion(
    "bible-134", "reference-to-masonic-subject",
    "Considering the heavens, moon, and stars in Psalm 8:1-9 prompts the question, ‘What is man?’ Under what heading does it appear?",
    ["Works of Creation", "The Sabbath", "The Human Senses", "The Letter G"], "Works of Creation", 11, "Passing, Middle Chamber Lecture - Works of Creation - Psalm 8:1-9"
  ),
  bibleMasonryQuestion(
    "bible-135", "quotation-to-reference",
    "The Sabbath discussion begins after God sees that everything he made is ‘very good’ at the close of the sixth day. Select the verse.",
    ["Genesis 1:31", "Genesis 2:1-3", "Exodus 20:8-11", "Leviticus 23:3"], "Genesis 1:31", 11, "Passing, Middle Chamber Lecture - The Sabbath - Genesis 1:31"
  ),
  bibleMasonryQuestion(
    "bible-136", "reference-to-masonic-subject",
    "God resting on the seventh day and blessing it in Genesis 2:1-3 establishes which subject?",
    ["The Sabbath", "Works of Creation", "The Daily Wage", "The Spiritual Temple"], "The Sabbath", 11, "Passing, Middle Chamber Lecture - The Sabbath - Genesis 2:1-3"
  ),
  bibleMasonryQuestion(
    "bible-137", "quotation-to-reference",
    "‘Remember the sabbath day, to keep it holy’ is one of The Sabbath references. Where is the commandment recorded?",
    ["Exodus 20:8-11", "Leviticus 23:3", "Genesis 2:1-3", "Ezekiel 20:19-20"], "Exodus 20:8-11", 11, "Passing, Middle Chamber Lecture - The Sabbath - Exodus 20:8-11"
  ),
  bibleMasonryQuestion(
    "bible-138", "reference-to-masonic-subject",
    "The holy convocation and prohibition of work on the seventh day in Leviticus 23:3 concern what?",
    ["The Sabbath", "The Obligation", "The Daily Wage", "The Charge"], "The Sabbath", 11, "Passing, Middle Chamber Lecture - The Sabbath - Leviticus 23:3"
  ),
  bibleMasonryQuestion(
    "bible-139", "quotation-to-reference",
    "God calls his sabbaths a sign ‘that ye may know that I am the Lord your God.’ Choose the final cited Sabbath passage.",
    ["Ezekiel 20:19-20", "Exodus 20:8-11", "Leviticus 23:3", "Genesis 2:1-3"], "Ezekiel 20:19-20", 11, "Passing, Middle Chamber Lecture - The Sabbath - Ezekiel 20:19-20"
  ),
  bibleMasonryQuestion(
    "bible-140", "reference-to-masonic-subject",
    "Solomon numbering burden bearers, mountain hewers, and overseers in 2 Chronicles 2:1-2 describes whom?",
    ["The Craftsmen", "The Master", "The Pillars", "Wages of Fellowcraft"], "The Craftsmen", 11, "Passing, Middle Chamber Lecture - The Craftsmen - 2 Chronicles 2:1-2"
  ),
  bibleMasonryQuestion(
    "bible-141", "quotation-to-reference",
    "Wages of Fellowcraft lists wheat, barley, wine, and oil provided for the timber hewers. Select the chapter used.",
    ["2 Chronicles 2:1-18", "1 Kings 5:10-12", "Deuteronomy 24:14-15", "Matthew 20:1-16"], "2 Chronicles 2:1-18", 11, "Passing, Middle Chamber Lecture - Wages of Fellowcraft - 2 Chronicles 2:1-18"
  ),
  bibleMasonryQuestion(
    "bible-142", "reference-to-masonic-subject",
    "The angelic proclamation of glory to God and peace on earth in Luke 2:1-20 corresponds to which heading?",
    ["Peace on Earth", "Glory and Beauty of the Day", "The Golden Rule", "Brotherly Love"], "Peace on Earth", 11, "Passing, Middle Chamber Lecture - Peace on Earth - Luke 2:1-20"
  ),
  bibleMasonryQuestion(
    "bible-143", "quotation-to-reference",
    "The Porch is described as twenty cubits long across the breadth of the house and ten cubits broad. Where are these dimensions given?",
    ["1 Kings 6:3-4", "1 Kings 6:5-6", "1 Kings 6:8-10", "2 Chronicles 3:15-17"], "1 Kings 6:3-4", 11, "Passing, Middle Chamber Lecture - The Porch - 1 Kings 6:3-4"
  ),
  bibleMasonryQuestion(
    "bible-144", "reference-to-masonic-subject",
    "The five-, six-, and seven-cubit widths in 1 Kings 6:5-6 describe which parts of the Temple?",
    ["The Three Chambers", "The Winding Stairs", "The Porch", "The Pillars"], "The Three Chambers", 11, "Passing, Middle Chamber Lecture - The Three Chambers - 1 Kings 6:5-6"
  ),
  bibleMasonryQuestion(
    "bible-145", "quotation-to-reference",
    "The Winding Stairs passage describes ascent into the middle chamber and then into the third. Identify the citation.",
    ["1 Kings 6:8-10", "1 Kings 6:5-6", "1 Kings 6:3-4", "2 Chronicles 3:15-17"], "1 Kings 6:8-10", 11, "Passing, Middle Chamber Lecture - The Winding Stairs - 1 Kings 6:8-10"
  ),
  bibleMasonryQuestion(
    "bible-146", "reference-to-masonic-subject",
    "Hiram casting two brass columns named Jachin and Boaz in 1 Kings 7:13-22 concerns what?",
    ["The Pillars", "The Pillar of Wisdom", "The Porch", "The Craftsmen"], "The Pillars", 11, "Passing, Middle Chamber Lecture - The Pillars - 1 Kings 7:13-22"
  ),
  bibleMasonryQuestion(
    "bible-147", "quotation-to-reference",
    "Two pillars thirty-five cubits high, with five-cubit chapiters and chains bearing pomegranates, are described in which passage?",
    ["2 Chronicles 3:15-17", "1 Kings 7:13-22", "1 Kings 6:3-4", "2 Chronicles 4:1-22"], "2 Chronicles 3:15-17", 11, "Passing, Middle Chamber Lecture - The Pillars - 2 Chronicles 3:15-17"
  ),
  bibleMasonryQuestion(
    "bible-148", "reference-to-masonic-subject",
    "Hiram completing the lavers, shovels, and basins for Solomon in 1 Kings 7:40-46 is grouped under which location?",
    ["The Clay Ground", "The Craftsmen", "The Pillars", "The Porch"], "The Clay Ground", 11, "Passing, Middle Chamber Lecture - The Clay Ground - 1 Kings 7:40-46"
  ),
  bibleMasonryQuestion(
    "bible-149", "quotation-to-reference",
    "‘In the plain of Jordan did the king cast them, in the clay ground between Succoth and Zeredathah.’ Select the citation.",
    ["2 Chronicles 4:1-22", "Ezekiel 43:12", "Judges 12:1-7", "2 Chronicles 3:15-17"], "2 Chronicles 4:1-22", 11, "Passing, Middle Chamber Lecture - The Clay Ground - 2 Chronicles 4:1-22"
  ),
  bibleMasonryQuestion(
    "bible-150", "reference-to-masonic-subject",
    "God asking who made the mouth, the deaf, the seeing, and the blind in Exodus 4:11 introduces which subject?",
    ["The Human Senses", "Works of Creation", "The Letter G", "The Craftsmen"], "The Human Senses", 11, "Passing, Middle Chamber Lecture - The Human Senses - Exodus 4:11"
  )
];
