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
    "bible-051", "quotation-to-reference",
    "The Altar includes the command, ‘Seven days thou shalt make an atonement for the altar, and sanctify it.’ Where is this found?",
    ["Exodus 29:37", "Exodus 30:10", "Exodus 24:4", "2 Chronicles 8:12"], "Exodus 29:37", 8, "Initiation, First Degree: First Section - The Altar - Exodus 29:37"
  ),
  bibleMasonryQuestion(
    "bible-052", "reference-to-masonic-subject",
    "Aaron making yearly atonement upon the horns in Exodus 30:10 appears in the discussion of what?",
    ["The Altar", "The Obligation", "The Tabernacle", "The Great and Sacred Name"], "The Altar", 8, "Initiation, First Degree: First Section - The Altar - Exodus 30:10"
  ),
  bibleMasonryQuestion(
    "bible-053", "quotation-to-reference",
    "David tells Araunah that he has come ‘to buy the threshing floor ... to build an altar unto the Lord.’ Select the citation.",
    ["2 Samuel 24:21", "2 Chronicles 8:12", "Genesis 22:1-2", "Exodus 24:4"], "2 Samuel 24:21", 8, "Initiation, First Degree: First Section - The Altar - 2 Samuel 24:21"
  ),
  bibleMasonryQuestion(
    "bible-054", "reference-to-masonic-subject",
    "Solomon offering burnt offerings on the altar before the porch in 2 Chronicles 8:12 completes which group of references?",
    ["The Altar", "The Obligation", "The Daily Wage", "The Master"], "The Altar", 8, "Initiation, First Degree: First Section - The Altar - 2 Chronicles 8:12"
  ),
  bibleMasonryQuestion(
    "bible-055", "quotation-to-reference",
    "The Obligation opens with the words, ‘I will make thee swear by the Lord, the God of heaven, and the God of the earth.’ Identify the passage.",
    ["Genesis 24:3", "Numbers 30:2", "Deuteronomy 23:21", "Hebrews 6:13-16"], "Genesis 24:3", 8, "Initiation, First Degree: First Section - The Obligation - Genesis 24:3"
  ),
  bibleMasonryQuestion(
    "bible-056", "reference-to-masonic-subject",
    "Numbers 30:2 requires a man who binds his soul with an oath not to break his word. Which Masonic subject does it support?",
    ["The Obligation", "Trust in God", "The Aid of Deity", "The Great and Sacred Name"], "The Obligation", 8, "Initiation, First Degree: First Section - The Obligation - Numbers 30:2"
  ),
  bibleMasonryQuestion(
    "bible-057", "quotation-to-reference",
    "‘When thou shalt vow a vow unto the Lord thy God, thou shalt not slack to pay it’ is listed under The Obligation. Choose its source.",
    ["Deuteronomy 23:21", "Numbers 30:2", "Leviticus 19:12", "Genesis 24:3"], "Deuteronomy 23:21", 8, "Initiation, First Degree: First Section - The Obligation - Deuteronomy 23:21"
  ),
  bibleMasonryQuestion(
    "bible-058", "reference-to-masonic-subject",
    "Swearing ‘by the God of truth’ in Isaiah 65:16 is associated with which heading?",
    ["The Obligation", "Trust in God", "The Atheist", "The Aid of Deity"], "The Obligation", 8, "Initiation, First Degree: First Section - The Obligation - Isaiah 65:16"
  ),
  bibleMasonryQuestion(
    "bible-059", "quotation-to-reference",
    "God swore by himself because he could swear by no greater. Which passage supplies this illustration of The Obligation?",
    ["Hebrews 6:13-16", "Genesis 24:3", "Isaiah 65:16", "Leviticus 19:12"], "Hebrews 6:13-16", 8, "Initiation, First Degree: First Section - The Obligation - Hebrews 6:13-16"
  ),
  bibleMasonryQuestion(
    "bible-060", "reference-to-masonic-subject",
    "The prohibition against swearing falsely by God’s name in Leviticus 19:12 concludes the references for what?",
    ["The Obligation", "The Great and Sacred Name", "The Atheist", "Testimony"], "The Obligation", 8, "Initiation, First Degree: First Section - The Obligation - Leviticus 19:12"
  ),
  bibleMasonryQuestion(
    "bible-061", "quotation-to-reference",
    "Light is introduced with, ‘In the beginning God created the heaven and the earth ... And God said, Let there be light.’ Where is it written?",
    ["Genesis 1:1-3", "Exodus 13:20-22", "Isaiah 60:19", "Psalm 119:105"], "Genesis 1:1-3", 8, "Initiation, First Degree: First Section - Light - Genesis 1:1-3"
  ),
  bibleMasonryQuestion(
    "bible-062", "reference-to-masonic-subject",
    "The pillar of cloud by day and pillar of fire by night in Exodus 13:20-22 illustrates which First Degree topic?",
    ["Light", "From Darkness to Light", "The Light of Life", "The Master"], "Light", 9, "Initiation, First Degree: First Section - Light - Exodus 13:20-22"
  ),
  bibleMasonryQuestion(
    "bible-063", "quotation-to-reference",
    "‘The Lord shall be unto thee an everlasting light, and thy God thy glory’ is included under Light. Select the reference.",
    ["Isaiah 60:19", "Genesis 1:1-3", "Exodus 13:20-22", "Isaiah 30:18-21"], "Isaiah 60:19", 9, "Initiation, First Degree: First Section - Light - Isaiah 60:19"
  ),
  bibleMasonryQuestion(
    "bible-064", "reference-to-masonic-subject",
    "God making the greater light to rule the day and the lesser light to rule the night in Genesis 1:14-18 is placed beneath which heading?",
    ["The Master", "Light", "Glory and Beauty of the Day", "The Light of Life"], "The Master", 9, "Initiation, First Degree: First Section - The Master - Genesis 1:14-18"
  ),
  bibleMasonryQuestion(
    "bible-065", "quotation-to-reference",
    "The Master is associated with the Lord giving ‘the sun for a light by day’ and ‘the moon and the stars for a light by night.’ Identify the citation.",
    ["Jeremiah 31:33-37", "Genesis 1:14-18", "2 Samuel 23:3-4", "Psalm 136:5-9"], "Jeremiah 31:33-37", 9, "Initiation, First Degree: First Section - The Master - Jeremiah 31:33-37"
  ),
  bibleMasonryQuestion(
    "bible-066", "reference-to-masonic-subject",
    "A just ruler who fears God is compared with the light of a cloudless morning in 2 Samuel 23:3-4. What does this illustrate?",
    ["The Master", "The Faithful Servant", "The Mason as Citizen", "Before the Throne"], "The Master", 9, "Initiation, First Degree: First Section - The Master - 2 Samuel 23:3-4"
  ),
  bibleMasonryQuestion(
    "bible-067", "quotation-to-reference",
    "The Light of Life is expressed by, ‘Thy word is a lamp unto my feet, and a light unto my path.’ Choose the Psalm.",
    ["Psalm 119:105", "Psalm 19:1-6", "Psalm 56:11-13", "Psalm 133:1-3"], "Psalm 119:105", 9, "Initiation, First Degree: First Section - The Light of Life - Psalm 119:105"
  ),
  bibleMasonryQuestion(
    "bible-068", "reference-to-masonic-subject",
    "The twelve gates described as twelve pearls in Revelation 21:21 correspond to which heading?",
    ["The Pearly Gates", "The New Name", "The Great White Throne", "The Inner Door"], "The Pearly Gates", 9, "Initiation, First Degree: First Section - The Pearly Gates - Revelation 21:21"
  ),
  bibleMasonryQuestion(
    "bible-069", "quotation-to-reference",
    "‘The clods of the valley shall be sweet unto him’ is the quotation used for The Clods of the Valley. Locate it.",
    ["Job 21:33", "Job 14:13-15", "Ecclesiastes 4:9-12", "Psalm 41:1-4"], "Job 21:33", 9, "Initiation, First Degree: First Section - The Clods of the Valley - Job 21:33"
  ),
  bibleMasonryQuestion(
    "bible-070", "reference-to-masonic-subject",
    "John’s vision in Revelation 20:11-15 is used for which named symbol?",
    ["The Great White Throne", "Before the Throne", "The Pearly Gates", "The New Name"], "The Great White Throne", 9, "Initiation, First Degree: First Section - The Great White Throne - Revelation 20:11-15"
  ),
  bibleMasonryQuestion(
    "bible-071", "quotation-to-reference",
    "The Faithful Servant receives the words, ‘Well done, thou good and faithful servant ... enter thou into the joy of thy lord.’ Select the account.",
    ["Matthew 25:14-30", "Matthew 25:31-46", "Luke 19:11-27", "Matthew 20:1-16"], "Matthew 25:14-30", 9, "Initiation, First Degree: First Section - The Faithful Servant - Matthew 25:14-30"
  ),
  bibleMasonryQuestion(
    "bible-072", "reference-to-masonic-subject",
    "A wall daubed with untempered mortar appears in Ezekiel 13:10-16 under what heading?",
    ["Untempered Morter", "The Plumbline", "The Cornerstone", "The House Not Made with Hands"], "Untempered Morter", 9, "Initiation, First Degree: First Section - Untempered Morter - Ezekiel 13:10-16"
  ),
  bibleMasonryQuestion(
    "bible-073", "quotation-to-reference",
    "False prophets ‘daubed them with untempered morter’ while claiming the Lord had spoken. Which passage is cited?",
    ["Ezekiel 22:28", "Ezekiel 13:10-16", "Isaiah 28:16-17", "Amos 7:7-9"], "Ezekiel 22:28", 9, "Initiation, First Degree: First Section - Untempered Morter - Ezekiel 22:28"
  ),
  bibleMasonryQuestion(
    "bible-074", "reference-to-masonic-subject",
    "Psalm 41:1-4 promises deliverance to the person who considers whom?",
    ["The Poor", "Widows and Orphans", "The Distressed Worthy Brother", "The Faithful Servant"], "The Poor", 9, "Initiation, First Degree: First Section - The Poor - Psalm 41:1-4"
  ),
  bibleMasonryQuestion(
    "bible-075", "quotation-to-reference",
    "Dealing bread to the hungry and covering the naked are included under The Poor. Where is this instruction found?",
    ["Isaiah 58:6-7", "Psalm 41:1-4", "Matthew 25:31-46", "James 2:14-17"], "Isaiah 58:6-7", 9, "Initiation, First Degree: First Section - The Poor - Isaiah 58:6-7"
  ),
  bibleMasonryQuestion(
    "bible-076", "reference-to-masonic-subject",
    "‘Inasmuch as ye have done it unto one of the least of these my brethren’ appears in Matthew 25:31-46 beneath which subject?",
    ["The Poor", "The Faithful Servant", "Universal Charity", "Widows and Orphans"], "The Poor", 9, "Initiation, First Degree: First Section - The Poor - Matthew 25:31-46"
  ),
  bibleMasonryQuestion(
    "bible-077", "quotation-to-reference",
    "The Poor includes the warning that kind words without needed food or clothing do not profit a brother or sister. Choose the reference.",
    ["James 2:14-17", "Isaiah 58:6-7", "Matthew 25:31-46", "Psalm 41:1-4"], "James 2:14-17", 9, "Initiation, First Degree: First Section - The Poor - James 2:14-17"
  ),
  bibleMasonryQuestion(
    "bible-078", "reference-to-masonic-subject",
    "The ‘building of God, an house not made with hands, eternal in the heavens’ in 2 Corinthians 5:1-4 names which topic?",
    ["The House Not Made with Hands", "The Lodge", "The Tabernacle", "The Cornerstone"], "The House Not Made with Hands", 9, "Initiation, First Degree: First Section - The House Not Made with Hands - 2 Corinthians 5:1-4"
  ),
  bibleMasonryQuestion(
    "bible-079", "quotation-to-reference",
    "‘Ye are the temple of the living God’ is one of the passages for The House Not Made with Hands. Identify the citation.",
    ["2 Corinthians 6:16-18", "2 Corinthians 5:1-4", "1 Peter 2:1-8", "1 Corinthians 3:10-20"], "2 Corinthians 6:16-18", 9, "Initiation, First Degree: First Section - The House Not Made with Hands - 2 Corinthians 6:16-18"
  ),
  bibleMasonryQuestion(
    "bible-080", "reference-to-masonic-subject",
    "The ‘living stone ... chosen of God, and precious’ in 1 Peter 2:1-8 supports which heading?",
    ["The House Not Made with Hands", "The Cornerstone", "Emblem of Innocence", "The Altar"], "The House Not Made with Hands", 9, "Initiation, First Degree: First Section - The House Not Made with Hands - 1 Peter 2:1-8"
  ),
  bibleMasonryQuestion(
    "bible-081", "quotation-to-reference",
    "The Northeast Corner includes the direction, ‘This is the way, walk ye in it,’ whether turning right or left. Select the source.",
    ["Isaiah 30:18-21", "Matthew 7:13-14", "Jeremiah 29:10-14", "Proverbs 3:5-6"], "Isaiah 30:18-21", 9, "Initiation, First Degree: First Section - The Northeast Corner - Isaiah 30:18-21"
  ),
  bibleMasonryQuestion(
    "bible-082", "reference-to-masonic-subject",
    "The strait gate and narrow way in Matthew 7:13-14 are associated with what location?",
    ["The Northeast Corner", "The Inner Door", "The Pearly Gates", "The Altar"], "The Northeast Corner", 9, "Initiation, First Degree: First Section - The Northeast Corner - Matthew 7:13-14"
  ),
  bibleMasonryQuestion(
    "bible-083", "quotation-to-reference",
    "The New Name is represented by a white stone bearing a name known only to its receiver. Where does this appear?",
    ["Revelation 2:17", "Revelation 21:21", "Revelation 20:11-15", "Isaiah 28:16-17"], "Revelation 2:17", 9, "Initiation, First Degree: First Section - The New Name - Revelation 2:17"
  ),
  bibleMasonryQuestion(
    "bible-084", "reference-to-masonic-subject",
    "Cain’s question, ‘Am I my brother’s keeper?’ in Genesis 4:9-10 introduces which Masonic concern?",
    ["Distressed Worthy Brother", "Brotherly Love", "Widows and Orphans", "The Poor"], "Distressed Worthy Brother", 9, "Initiation, First Degree: First Section - Distressed Worthy Brother - Genesis 4:9-10"
  ),
  bibleMasonryQuestion(
    "bible-085", "quotation-to-reference",
    "‘Two are better than one ... for if they fall, the one will lift up his fellow’ supports the Distressed Worthy Brother. Choose the passage.",
    ["Ecclesiastes 4:9-12", "Galatians 6:1-2", "Hebrews 13:1-3", "Genesis 4:9-10"], "Ecclesiastes 4:9-12", 9, "Initiation, First Degree: First Section - Distressed Worthy Brother - Ecclesiastes 4:9-12"
  ),
  bibleMasonryQuestion(
    "bible-086", "reference-to-masonic-subject",
    "Giving alms without letting the left hand know what the right hand does, in Matthew 6:1-4, is connected with whom?",
    ["Distressed Worthy Brother", "The Poor", "The Faithful Servant", "Universal Charity"], "Distressed Worthy Brother", 9, "Initiation, First Degree: First Section - Distressed Worthy Brother - Matthew 6:1-4"
  ),
  bibleMasonryQuestion(
    "bible-087", "quotation-to-reference",
    "The command ‘Bear ye one another’s burdens’ is placed under Distressed Worthy Brother. Identify the reference.",
    ["Galatians 6:1-2", "Hebrews 13:1-3", "Ecclesiastes 4:9-12", "James 2:14-17"], "Galatians 6:1-2", 9, "Initiation, First Degree: First Section - Distressed Worthy Brother - Galatians 6:1-2"
  ),
  bibleMasonryQuestion(
    "bible-088", "reference-to-masonic-subject",
    "Hebrews 13:1-3 asks readers to remember prisoners and those suffering adversity. Which heading includes it?",
    ["Distressed Worthy Brother", "Brotherly Love", "The Poor", "Widows and Orphans"], "Distressed Worthy Brother", 9, "Initiation, First Degree: First Section - Distressed Worthy Brother - Hebrews 13:1-3"
  ),
  bibleMasonryQuestion(
    "bible-089", "quotation-to-reference",
    "First Preparation begins with a prayer that God forgive and give each person according to his ways, since God knows every heart. Select the citation.",
    ["1 Kings 8:39-40", "1 Kings 8:61", "2 Chronicles 30:17-19", "Jeremiah 17:9-10"], "1 Kings 8:39-40", 9, "Initiation, First Degree: Second Section - First Preparation - 1 Kings 8:39-40"
  ),
  bibleMasonryQuestion(
    "bible-090", "reference-to-masonic-subject",
    "‘Let your heart therefore be perfect with the Lord our God’ in 1 Kings 8:61 is used for which part of the First Degree?",
    ["First Preparation", "The Candidate", "The Aid of Deity", "Trust in God"], "First Preparation", 9, "Initiation, First Degree: Second Section - First Preparation - 1 Kings 8:61"
  ),
  bibleMasonryQuestion(
    "bible-091", "quotation-to-reference",
    "A person who ‘prepareth his heart to seek God’ despite not being cleansed according to the sanctuary appears under First Preparation. Locate it.",
    ["2 Chronicles 30:17-19", "1 Kings 8:39-40", "1 Kings 8:61", "Psalm 51:5-7"], "2 Chronicles 30:17-19", 9, "Initiation, First Degree: Second Section - First Preparation - 2 Chronicles 30:17-19"
  ),
  bibleMasonryQuestion(
    "bible-092", "reference-to-masonic-subject",
    "The former Israelite custom of removing a shoe to confirm a transaction, recorded in Ruth 4:1-12, represents what?",
    ["Testimony", "The Obligation", "First Preparation", "The Inner Door"], "Testimony", 9, "Initiation, First Degree: Second Section - Testimony - Ruth 4:1-12"
  ),
  bibleMasonryQuestion(
    "bible-093", "quotation-to-reference",
    "The Inner Door includes God’s promise, ‘Ye shall seek me, and find me, when ye shall search for me with all your heart.’ Where is it found?",
    ["Jeremiah 29:10-14", "Matthew 7:7-8", "Luke 11:9-10", "Revelation 3:20"], "Jeremiah 29:10-14", 9, "Initiation, First Degree: Second Section - The Inner Door - Jeremiah 29:10-14"
  ),
  bibleMasonryQuestion(
    "bible-094", "reference-to-masonic-subject",
    "‘Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened’ in Matthew 7:7-8 illustrates what?",
    ["The Inner Door", "The Northeast Corner", "The Pearly Gates", "The Aid of Deity"], "The Inner Door", 9, "Initiation, First Degree: Second Section - The Inner Door - Matthew 7:7-8"
  ),
  bibleMasonryQuestion(
    "bible-095", "quotation-to-reference",
    "The Atheist is introduced by, ‘The fool hath said in his heart, There is no God.’ Identify the Psalm.",
    ["Psalm 53:1", "Proverbs 1:7", "Psalm 41:1-4", "Psalm 119:105"], "Psalm 53:1", 9, "Initiation, First Degree: Second Section - The Atheist - Psalm 53:1"
  ),
  bibleMasonryQuestion(
    "bible-096", "reference-to-masonic-subject",
    "The declaration that fear of the Lord is the beginning of knowledge in Proverbs 1:7 is paired with which heading?",
    ["The Atheist", "Trust in God", "The Aid of Deity", "The Master"], "The Atheist", 9, "Initiation, First Degree: Second Section - The Atheist - Proverbs 1:7"
  ),
  bibleMasonryQuestion(
    "bible-097", "quotation-to-reference",
    "The Cornerstone includes God’s promise to lay in Zion ‘a tried stone, a precious corner stone, a sure foundation.’ Choose the source.",
    ["Isaiah 28:16-17", "Psalm 118:22-24", "1 Peter 2:1-8", "Matthew 21:42"], "Isaiah 28:16-17", 9, "Initiation, First Degree: Second Section - The Cornerstone - Isaiah 28:16-17"
  ),
  bibleMasonryQuestion(
    "bible-098", "reference-to-masonic-subject",
    "‘The stone which the builders refused is become the head stone of the corner’ in Psalm 118:22-24 concerns which symbol?",
    ["The Cornerstone", "The House Not Made with Hands", "The Northeast Corner", "The Altar"], "The Cornerstone", 9, "Initiation, First Degree: Second Section - The Cornerstone - Psalm 118:22-24"
  ),
  bibleMasonryQuestion(
    "bible-099", "quotation-to-reference",
    "Emblem of Innocence begins with the simple statement, ‘The lambs are for thy clothing.’ Locate the verse.",
    ["Proverbs 27:26", "Isaiah 53:4-9", "John 1:35-36", "Isaiah 65:25"], "Proverbs 27:26", 9, "Initiation, First Degree: Second Section - Emblem of Innocence - Proverbs 27:26"
  ),
  bibleMasonryQuestion(
    "bible-100", "reference-to-masonic-subject",
    "The figure brought ‘as a lamb to the slaughter’ in Isaiah 53:4-9 is used for which Masonic emblem?",
    ["Emblem of Innocence", "The Faithful Servant", "The Candidate", "The House Not Made with Hands"], "Emblem of Innocence", 9, "Initiation, First Degree: Second Section - Emblem of Innocence - Isaiah 53:4-9"
  )
];
