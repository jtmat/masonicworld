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
    "bible-001", "quotation-to-reference",
    "The Tiler is illustrated by the words, ‘He placed at the east of the garden of Eden Cherubims, and a flaming sword which turned every way.’ Where is this found?",
    ["Genesis 3:24", "Numbers 22:31", "Psalm 84:9-10", "Joshua 5:13-15"], "Genesis 3:24", 7, "Opening the Lodge - The Tiler - Genesis 3:24"
  ),
  bibleMasonryQuestion(
    "bible-002", "reference-to-masonic-subject",
    "Numbers 22:31 describes an angel standing in the way with a drawn sword. Which Lodge office does this illustrate?",
    ["The Tiler", "The Visitor", "Before the Throne", "The Candidate"], "The Tiler", 7, "Opening the Lodge - The Tiler - Numbers 22:31"
  ),
  bibleMasonryQuestion(
    "bible-003", "quotation-to-reference",
    "‘I had rather be a doorkeeper in the house of my God, than to dwell in the tents of wickedness.’ Identify this Tiler reference.",
    ["Psalm 84:9-10", "Psalm 68:5", "Psalm 82:3-4", "Psalm 19:1-6"], "Psalm 84:9-10", 7, "Opening the Lodge - The Tiler - Psalm 84:9-10"
  ),
  bibleMasonryQuestion(
    "bible-004", "reference-to-masonic-subject",
    "The instruction in Leviticus 19:33-34 to welcome and love a stranger is listed beneath which heading?",
    ["The Visitor", "The Tiler", "Widows and Orphans", "Self-Support"], "The Visitor", 7, "Opening the Lodge - The Visitor - Leviticus 19:33-34"
  ),
  bibleMasonryQuestion(
    "bible-005", "quotation-to-reference",
    "The Visitor is connected with the warning not to forget to entertain strangers, since some have entertained angels unawares. Select the citation.",
    ["Hebrews 13:2", "Leviticus 19:33-34", "Matthew 18:15-20", "James 1:27"], "Hebrews 13:2", 7, "Opening the Lodge - The Visitor - Hebrews 13:2"
  ),
  bibleMasonryQuestion(
    "bible-006", "reference-to-masonic-subject",
    "Tubal-cain is called ‘an instructor of every artificer in brass and iron’ in Genesis 4:22. What Masonic heading accompanies this passage?",
    ["The First Master Craftsman", "The Daily Wage", "The Candidate", "The Altar"], "The First Master Craftsman", 7, "Opening the Lodge - The First Master Craftsman - Genesis 4:22"
  ),
  bibleMasonryQuestion(
    "bible-007", "quotation-to-reference",
    "Confusion in the Craft includes the account in which Satan came among the sons of God. Where is that account found?",
    ["Job 1:6-12", "Joshua 7:13-15", "Matthew 22:11-14", "Leviticus 10:8-11"], "Job 1:6-12", 7, "Opening the Lodge - Confusion in the Craft - Job 1:6-12"
  ),
  bibleMasonryQuestion(
    "bible-008", "reference-to-masonic-subject",
    "Match Joshua 7:13-15, concerning an accursed thing in the midst of Israel, to its Masonic heading.",
    ["Confusion in the Craft", "The Tiler", "The Lodge", "The Obligation"], "Confusion in the Craft", 7, "Opening the Lodge - Confusion in the Craft - Joshua 7:13-15"
  ),
  bibleMasonryQuestion(
    "bible-009", "quotation-to-reference",
    "‘Friend, how camest thou in hither not having a wedding garment?’ supplies an illustration of Confusion in the Craft. Choose its citation.",
    ["Matthew 22:11-14", "Job 1:6-12", "Joshua 7:13-15", "Matthew 18:15-20"], "Matthew 22:11-14", 7, "Opening the Lodge - Confusion in the Craft - Matthew 22:11-14"
  ),
  bibleMasonryQuestion(
    "bible-010", "reference-to-masonic-subject",
    "A person who fails to provide for his own household is addressed in 1 Timothy 5:8. Under what heading is this passage placed?",
    ["Self-Support", "The Daily Wage", "Widows and Orphans", "The Poor"], "Self-Support", 7, "Opening the Lodge - Self-Support - 1 Timothy 5:8"
  ),
  bibleMasonryQuestion(
    "bible-011", "quotation-to-reference",
    "Widows and Orphans is supported by the declaration that God is ‘a father of the fatherless, and a judge of the widows.’ Select the reference.",
    ["Psalm 68:5", "Isaiah 1:16-17", "Psalm 82:3-4", "James 1:27"], "Psalm 68:5", 7, "Opening the Lodge - Widows and Orphans - Psalm 68:5"
  ),
  bibleMasonryQuestion(
    "bible-012", "reference-to-masonic-subject",
    "Isaiah 1:16-17 directs the reader to relieve the oppressed, judge the fatherless, and plead for the widow. Which Masonic concern does it support?",
    ["Widows and Orphans", "Glory and Beauty of the Day", "The Visitor", "The Poor"], "Widows and Orphans", 7, "Opening the Lodge - Widows and Orphans - Isaiah 1:16-17"
  ),
  bibleMasonryQuestion(
    "bible-013", "quotation-to-reference",
    "Where is the instruction ‘Defend the poor and fatherless; do justice to the afflicted and needy’ found?",
    ["Psalm 82:3-4", "Psalm 68:5", "Isaiah 1:16-17", "Psalm 146:5-9"], "Psalm 82:3-4", 7, "Opening the Lodge - Widows and Orphans - Psalm 82:3-4"
  ),
  bibleMasonryQuestion(
    "bible-014", "reference-to-masonic-subject",
    "‘The heavens declare the glory of God’ appears under which Masonic heading?",
    ["Glory and Beauty of the Day", "Before the Throne", "The Light of Life", "Dew of Hermon"], "Glory and Beauty of the Day", 7, "Opening the Lodge - Glory and Beauty of the Day - Psalm 19:1-6"
  ),
  bibleMasonryQuestion(
    "bible-015", "quotation-to-reference",
    "The Daily Wage includes the command to give a laborer his hire before the sun goes down. Identify the passage containing that command.",
    ["Deuteronomy 24:14-15", "1 Kings 5:10-12", "Matthew 20:1-16", "Exodus 30:11-16"], "Deuteronomy 24:14-15", 7, "Opening the Lodge - The Daily Wage - Deuteronomy 24:14-15"
  ),
  bibleMasonryQuestion(
    "bible-016", "reference-to-masonic-subject",
    "Solomon’s yearly payment of wheat and oil to Hiram in 1 Kings 5:10-12 illustrates which subject?",
    ["The Daily Wage", "The First Master Craftsman", "The Altar", "The Master"], "The Daily Wage", 7, "Opening the Lodge - The Daily Wage - 1 Kings 5:10-12"
  ),
  bibleMasonryQuestion(
    "bible-017", "quotation-to-reference",
    "The Lodge is associated with the promise, ‘Where two or three are gathered together in my name, there am I in the midst of them.’ Where does it appear?",
    ["Matthew 18:15-20", "Matthew 22:11-14", "Psalm 133:1-3", "Hebrews 13:2"], "Matthew 18:15-20", 7, "Opening the Lodge - The Lodge - Matthew 18:15-20"
  ),
  bibleMasonryQuestion(
    "bible-018", "reference-to-masonic-subject",
    "Isaiah’s vision of the Lord upon a throne, with seraphim proclaiming ‘Holy, Holy, Holy,’ is placed under what heading?",
    ["Before the Throne", "Glory and Beauty of the Day", "Fatherhood of God", "The Great White Throne"], "Before the Throne", 7, "Opening the Lodge - Before the Throne - Isaiah 6:1-4"
  ),
  bibleMasonryQuestion(
    "bible-019", "quotation-to-reference",
    "Match ‘As the dew of Hermon, and as the dew that descended upon the mountains of Zion’ with its scriptural citation.",
    ["Psalm 133:1-3", "Psalm 19:1-6", "Psalm 84:9-10", "Psalm 68:5"], "Psalm 133:1-3", 7, "Opening the Lodge - Dew of Hermon - Psalm 133:1-3"
  ),
  bibleMasonryQuestion(
    "bible-020", "reference-to-masonic-subject",
    "In the Preparation Room section, Leviticus 21:16-24 is used in connection with whom?",
    ["The Candidate", "Clothing", "The Obligation", "The Visitor"], "The Candidate", 7, "The Preparation Room - The Candidate - Leviticus 21:16-24"
  ),
  bibleMasonryQuestion(
    "bible-021", "quotation-to-reference",
    "The Candidate is illustrated by the rule that an offering with a blemish is not acceptable. Choose the cited passage.",
    ["Leviticus 22:19-25", "Leviticus 21:16-24", "Deuteronomy 23:1-2", "Leviticus 8:1-11"], "Leviticus 22:19-25", 7, "The Preparation Room - The Candidate - Leviticus 22:19-25"
  ),
  bibleMasonryQuestion(
    "bible-022", "reference-to-masonic-subject",
    "Moses washing, coating, and girding Aaron in Leviticus 8:1-11 provides the biblical analogy for which topic?",
    ["Clothing", "The Candidate", "Emblem of Innocence", "The Tiler"], "Clothing", 7, "The Preparation Room - Clothing - Leviticus 8:1-11"
  ),
  bibleMasonryQuestion(
    "bible-023", "quotation-to-reference",
    "Fatherhood of God includes the words, ‘Let us make man in our image, after our likeness.’ Identify their location.",
    ["Genesis 1:26-28", "Genesis 2:7", "Genesis 5:1-2", "Genesis 9:6-8"], "Genesis 1:26-28", 7, "The Preparation Room - Fatherhood of God - Genesis 1:26-28"
  ),
  bibleMasonryQuestion(
    "bible-024", "reference-to-masonic-subject",
    "God forming man from the dust and breathing into him the breath of life in Genesis 2:7 supports which heading?",
    ["Fatherhood of God", "Races of Men", "The Candidate", "From Darkness to Light"], "Fatherhood of God", 7, "The Preparation Room - Fatherhood of God - Genesis 2:7"
  ),
  bibleMasonryQuestion(
    "bible-025", "quotation-to-reference",
    "‘In the day that God created man, in the likeness of God made he him’ continues the discussion of Fatherhood of God. Select the reference.",
    ["Genesis 5:1-2", "Genesis 1:26-28", "Genesis 2:7", "Genesis 9:6-8"], "Genesis 5:1-2", 8, "The Preparation Room - Fatherhood of God - Genesis 5:1-2"
  ),
  bibleMasonryQuestion(
    "bible-026", "reference-to-masonic-subject",
    "The statement in Genesis 9:6-8 that man was made in God’s image belongs to which subject?",
    ["Fatherhood of God", "Races of Men", "Level of Equality", "The Altar"], "Fatherhood of God", 8, "The Preparation Room - Fatherhood of God - Genesis 9:6-8"
  ),
  bibleMasonryQuestion(
    "bible-027", "quotation-to-reference",
    "Races of Men is illustrated by Peter’s realization that God accepts the righteous in every nation. Where is the passage found?",
    ["Acts 10:9-35", "Romans 2:11", "1 Samuel 16:7", "Proverbs 22:2"], "Acts 10:9-35", 8, "The Preparation Room - Races of Men - Acts 10:9-35"
  ),
  bibleMasonryQuestion(
    "bible-028", "reference-to-masonic-subject",
    "The rich giving no more and the poor giving no less than half a shekel in Exodus 30:11-16 demonstrates which principle?",
    ["Level of Equality", "The Daily Wage", "The Obligation", "The Altar"], "Level of Equality", 8, "The Preparation Room - Level of Equality - Exodus 30:11-16"
  ),
  bibleMasonryQuestion(
    "bible-029", "quotation-to-reference",
    "‘Ye shall not respect persons in judgment; but ye shall hear the small as well as the great’ supports Level of Equality. Choose its citation.",
    ["Deuteronomy 1:16-17", "Romans 2:11", "Proverbs 22:2", "1 Samuel 16:7"], "Deuteronomy 1:16-17", 8, "The Preparation Room - Level of Equality - Deuteronomy 1:16-17"
  ),
  bibleMasonryQuestion(
    "bible-030", "reference-to-masonic-subject",
    "‘The rich and poor meet together; the Lord is the maker of them all’ appears in Proverbs 22:2 under what heading?",
    ["Level of Equality", "Races of Men", "Childlike Attitude", "Self-Support"], "Level of Equality", 8, "The Preparation Room - Level of Equality - Proverbs 22:2"
  ),
  bibleMasonryQuestion(
    "bible-031", "quotation-to-reference",
    "Level of Equality draws upon the contrast between outward appearance and the Lord looking upon the heart. Identify the reference.",
    ["1 Samuel 16:7", "Romans 2:11", "Proverbs 22:2", "Deuteronomy 1:16-17"], "1 Samuel 16:7", 8, "The Preparation Room - Level of Equality - 1 Samuel 16:7"
  ),
  bibleMasonryQuestion(
    "bible-032", "reference-to-masonic-subject",
    "‘There is no respect of persons with God’ in Romans 2:11 reinforces which Masonic principle?",
    ["Level of Equality", "Races of Men", "Fatherhood of God", "Universal Charity"], "Level of Equality", 8, "The Preparation Room - Level of Equality - Romans 2:11"
  ),
  bibleMasonryQuestion(
    "bible-033", "quotation-to-reference",
    "Childlike Attitude includes the warning that the kingdom of God must be received as a little child. Select the citation used.",
    ["Luke 18:15-18", "Mark 10:13-16", "Matthew 19:13-15", "Mark 9:33-37"], "Luke 18:15-18", 8, "The Preparation Room - Childlike Attitude - Luke 18:15-18"
  ),
  bibleMasonryQuestion(
    "bible-034", "reference-to-masonic-subject",
    "Jesus receiving and blessing the children in Mark 10:13-16 is grouped beneath which heading?",
    ["Childlike Attitude", "The Candidate", "The Visitor", "The Aid of Deity"], "Childlike Attitude", 8, "The Preparation Room - Childlike Attitude - Mark 10:13-16"
  ),
  bibleMasonryQuestion(
    "bible-035", "quotation-to-reference",
    "From Darkness to Light begins with the warning that a person may not realize he is ‘poor, and blind, and naked.’ Where is it found?",
    ["Revelation 3:14-18", "Matthew 15:14", "John 8:12", "2 Peter 1:1-9"], "Revelation 3:14-18", 8, "Initiation, First Degree: First Section - From Darkness to Light - Revelation 3:14-18"
  ),
  bibleMasonryQuestion(
    "bible-036", "reference-to-masonic-subject",
    "The warning that blind leaders and their followers may both fall into a ditch illustrates which First Degree topic?",
    ["From Darkness to Light", "The Light of Life", "Light", "The Inner Door"], "From Darkness to Light", 8, "Initiation, First Degree: First Section - From Darkness to Light - Matthew 15:14 (the PDF citation is misprinted)"
  ),
  bibleMasonryQuestion(
    "bible-037", "quotation-to-reference",
    "The Aid of Deity includes Jacob’s declaration, ‘I will not let thee go, except thou bless me.’ Choose the biblical account.",
    ["Genesis 32:24-32", "1 Chronicles 29:19", "1 Kings 3:9", "Matthew 21:22"], "Genesis 32:24-32", 8, "Initiation, First Degree: First Section - The Aid of Deity - Genesis 32:24-32"
  ),
  bibleMasonryQuestion(
    "bible-038", "reference-to-masonic-subject",
    "David’s prayer that Solomon receive a perfect heart in 1 Chronicles 29:19 is used to illustrate what?",
    ["The Aid of Deity", "The Altar", "The Obligation", "Trust in God"], "The Aid of Deity", 8, "Initiation, First Degree: First Section - The Aid of Deity - 1 Chronicles 29:19"
  ),
  bibleMasonryQuestion(
    "bible-039", "quotation-to-reference",
    "Solomon’s request for ‘an understanding heart to judge thy people’ is included under The Aid of Deity. Identify the citation.",
    ["1 Kings 3:9", "1 Chronicles 29:19", "Matthew 6:5-16", "Matthew 21:22"], "1 Kings 3:9", 8, "Initiation, First Degree: First Section - The Aid of Deity - 1 Kings 3:9"
  ),
  bibleMasonryQuestion(
    "bible-040", "reference-to-masonic-subject",
    "The Lord’s Prayer in Matthew 6:5-16 appears in the First Degree discussion of which subject?",
    ["The Aid of Deity", "The Obligation", "The Inner Door", "Trust in God"], "The Aid of Deity", 8, "Initiation, First Degree: First Section - The Aid of Deity - Matthew 6:5-16"
  ),
  bibleMasonryQuestion(
    "bible-041", "quotation-to-reference",
    "‘All things, whatsoever ye shall ask in prayer, believing, ye shall receive’ supports The Aid of Deity. Where is it written?",
    ["Matthew 21:22", "Matthew 6:5-16", "Mark 11:22-26", "Genesis 32:24-32"], "Matthew 21:22", 8, "Initiation, First Degree: First Section - The Aid of Deity - Matthew 21:22"
  ),
  bibleMasonryQuestion(
    "bible-042", "reference-to-masonic-subject",
    "In the First Degree, First Section, ‘Behold, how good and how pleasant it is for brethren to dwell together’ expresses what?",
    ["Unity", "Dew of Hermon", "Brotherly Love", "The Lodge"], "Unity", 8, "Initiation, First Degree: First Section - Unity - Psalm 133:1-3"
  ),
  bibleMasonryQuestion(
    "bible-043", "quotation-to-reference",
    "Trust in God includes the profession, ‘I will not be afraid what man can do unto me.’ Select the cited Psalm.",
    ["Psalm 56:11-13", "Proverbs 3:5-6", "Isaiah 26:3-5", "Psalm 121:1-8"], "Psalm 56:11-13", 8, "Initiation, First Degree: First Section - Trust in God - Psalm 56:11-13"
  ),
  bibleMasonryQuestion(
    "bible-044", "reference-to-masonic-subject",
    "The instruction to trust in the Lord rather than lean upon one’s own understanding belongs to which heading?",
    ["Trust in God", "The Aid of Deity", "Unity", "The Obligation"], "Trust in God", 8, "Initiation, First Degree: First Section - Trust in God - Proverbs 3:5-6"
  ),
  bibleMasonryQuestion(
    "bible-045", "quotation-to-reference",
    "‘Thou wilt keep him in perfect peace, whose mind is stayed on thee’ is one of the Trust in God passages. Identify it.",
    ["Isaiah 26:3-5", "Psalm 56:11-13", "Proverbs 3:5-6", "Jeremiah 17:7-8"], "Isaiah 26:3-5", 8, "Initiation, First Degree: First Section - Trust in God - Isaiah 26:3-5"
  ),
  bibleMasonryQuestion(
    "bible-046", "reference-to-masonic-subject",
    "Noah building an altar to the Lord in Genesis 8:20-22 introduces which First Degree subject?",
    ["The Altar", "The Obligation", "The Candidate", "Fatherhood of God"], "The Altar", 8, "Initiation, First Degree: First Section - The Altar - Genesis 8:20-22"
  ),
  bibleMasonryQuestion(
    "bible-047", "quotation-to-reference",
    "Abram built an altar to the Lord after God promised the land to his seed. Which citation is used under The Altar?",
    ["Genesis 12:7", "Genesis 8:20-22", "Genesis 22:1-2", "Genesis 26:24-25"], "Genesis 12:7", 8, "Initiation, First Degree: First Section - The Altar - Genesis 12:7"
  ),
  bibleMasonryQuestion(
    "bible-048", "reference-to-masonic-subject",
    "Abraham being directed toward Moriah with Isaac in Genesis 22:1-2 appears in the discussion of what?",
    ["The Altar", "The Obligation", "The Aid of Deity", "The Candidate"], "The Altar", 8, "Initiation, First Degree: First Section - The Altar - Genesis 22:1-2"
  ),
  bibleMasonryQuestion(
    "bible-049", "quotation-to-reference",
    "Isaac ‘builded an altar there, and called upon the name of the Lord.’ Match this quotation to its reference.",
    ["Genesis 26:24-25", "Genesis 12:7", "Genesis 8:20-22", "Exodus 24:4"], "Genesis 26:24-25", 8, "Initiation, First Degree: First Section - The Altar - Genesis 26:24-25"
  ),
  bibleMasonryQuestion(
    "bible-050", "reference-to-masonic-subject",
    "Moses building an altar beneath the hill and setting up twelve pillars in Exodus 24:4 is included under which subject?",
    ["The Altar", "The Obligation", "The Tabernacle", "The Cornerstone"], "The Altar", 8, "Initiation, First Degree: First Section - The Altar - Exodus 24:4"
  )
];
