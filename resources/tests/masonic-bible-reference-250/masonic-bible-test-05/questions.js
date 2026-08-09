"use strict";

function bibleMasonryQuestion(id, questionType, question, choices, correctAnswer, sourceReference) {
  return {
    id,
    category: "The Bible in Masonry",
    questionType,
    question,
    choices,
    correctAnswer,
    source: "The Bible in Masonry, printed p. 13",
    sourceReference,
    verified: "2026-08-05"
  };
}

const QUESTION_BANK = [
  bibleMasonryQuestion(
    "bible-201", "reference-to-masonic-subject",
    "The source lists 1 Kings 5:1-18 as an additional reference for whom?",
    ["The Master Builder", "The Letter G", "The Grave", "The Eternal Rest"], "The Master Builder", "Raising, Historical Lecture - The Master Builder - See also: 1 Kings 5:1-18"
  ),
  bibleMasonryQuestion(
    "bible-202", "reference-to-masonic-subject",
    "Match the additional citation 1 Kings 6:1-22 to its Masonic heading.",
    ["The Master Builder", "Beginning of the Temple", "Metal Tools", "The Spiritual Temple"], "The Master Builder", "Raising, Historical Lecture - The Master Builder - See also: 1 Kings 6:1-22"
  ),
  bibleMasonryQuestion(
    "bible-203", "reference-to-masonic-subject",
    "Under which historical topic does 2 Chronicles 5:1-14 appear as a cross-reference?",
    ["The Master Builder", "Building of the Temple", "David’s Plans for the Temple", "The Eternal Rest"], "The Master Builder", "Raising, Historical Lecture - The Master Builder - See also: 2 Chronicles 5:1-14"
  ),
  bibleMasonryQuestion(
    "bible-204", "reference-to-masonic-subject",
    "Second Chronicles 7:1-3 is included among the supporting passages for which figure?",
    ["The Master Builder", "King Solomon’s Levy", "The Craftsmen", "The Pillars"], "The Master Builder", "Raising, Historical Lecture - The Master Builder - See also: 2 Chronicles 7:1-3"
  ),
  bibleMasonryQuestion(
    "bible-205", "quotation-to-reference",
    "Building of the Temple begins with David gathering strangers and appointing masons to hew stones for God’s house. Select the account.",
    ["1 Chronicles 22:1-2", "1 Kings 5:8-9", "2 Chronicles 2:16", "Ezra 3:6-7"], "1 Chronicles 22:1-2", "Raising, Historical Lecture - Building of the Temple - 1 Chronicles 22:1-2"
  ),
  bibleMasonryQuestion(
    "bible-206", "quotation-to-reference",
    "Hiram promises to bring cedar and fir from Lebanon to the sea and convey them in floats. Where is this recorded?",
    ["1 Kings 5:8-9", "2 Chronicles 2:16", "1 Chronicles 22:1-2", "1 Kings 5:17-18"], "1 Kings 5:8-9", "Raising, Historical Lecture - Building of the Temple - 1 Kings 5:8-9"
  ),
  bibleMasonryQuestion(
    "bible-207", "quotation-to-reference",
    "The promise to cut wood in Lebanon and bring it by sea to Joppa completes the principal Building of the Temple passages. Choose the citation.",
    ["2 Chronicles 2:16", "1 Kings 5:8-9", "Ezra 3:6-7", "2 Chronicles 2:3-18"], "2 Chronicles 2:16", "Raising, Historical Lecture - Building of the Temple - 2 Chronicles 2:16"
  ),
  bibleMasonryQuestion(
    "bible-208", "reference-to-masonic-subject",
    "Ezra 3:6-7 is provided as an additional reference beneath which heading?",
    ["Building of the Temple", "Beginning of the Temple", "The Master Builder", "Metal Tools"], "Building of the Temple", "Raising, Historical Lecture - Building of the Temple - See also: Ezra 3:6-7"
  ),
  bibleMasonryQuestion(
    "bible-209", "quotation-to-reference",
    "Wisdom of Solomon opens with Solomon prospering upon ‘the throne of the Lord as king instead of David his father.’ Locate the passage.",
    ["1 Chronicles 29:16-23", "2 Chronicles 1:7-12", "1 Kings 3:5-15", "1 Kings 2:10-12"], "1 Chronicles 29:16-23", "Raising, Historical Lecture - Wisdom of Solomon - 1 Chronicles 29:16-23"
  ),
  bibleMasonryQuestion(
    "bible-210", "quotation-to-reference",
    "God tells Solomon, ‘Ask what I shall give thee,’ and Solomon requests wisdom and knowledge. Identify the account.",
    ["2 Chronicles 1:7-12", "1 Kings 3:5-15", "1 Chronicles 29:16-23", "1 Kings 3:9"], "2 Chronicles 1:7-12", "Raising, Historical Lecture - Wisdom of Solomon - 2 Chronicles 1:7-12"
  ),
  bibleMasonryQuestion(
    "bible-211", "quotation-to-reference",
    "Solomon receives ‘a wise and an understanding heart’ unlike any before or after him. Which passage concludes Wisdom of Solomon?",
    ["1 Kings 3:5-15", "2 Chronicles 1:7-12", "1 Chronicles 29:16-23", "1 Chronicles 29:19"], "1 Kings 3:5-15", "Raising, Historical Lecture - Wisdom of Solomon - 1 Kings 3:5-15"
  ),
  bibleMasonryQuestion(
    "bible-212", "quotation-to-reference",
    "Metal Tools begins with the requirement that no iron implement be lifted upon the stones of an altar. Select the source.",
    ["Deuteronomy 27:5-8", "Exodus 20:24-25", "1 Kings 5:17-18", "1 Kings 6:7"], "Deuteronomy 27:5-8", "Raising, Historical Lecture - Metal Tools - Deuteronomy 27:5-8"
  ),
  bibleMasonryQuestion(
    "bible-213", "quotation-to-reference",
    "An altar of earth for burnt and peace offerings is included under Metal Tools. Where is the instruction found?",
    ["Exodus 20:24-25", "Deuteronomy 27:5-8", "1 Kings 6:7", "Exodus 29:37"], "Exodus 20:24-25", "Raising, Historical Lecture - Metal Tools - Exodus 20:24-25"
  ),
  bibleMasonryQuestion(
    "bible-214", "quotation-to-reference",
    "The king commands that great, costly, hewn stones be brought for the foundation. Choose the Metal Tools citation.",
    ["1 Kings 5:17-18", "1 Kings 6:7", "Deuteronomy 27:5-8", "1 Chronicles 22:1-2"], "1 Kings 5:17-18", "Raising, Historical Lecture - Metal Tools - 1 Kings 5:17-18"
  ),
  bibleMasonryQuestion(
    "bible-215", "quotation-to-reference",
    "No hammer, axe, or iron tool was heard because the Temple stones were prepared before arrival. Identify the passage.",
    ["1 Kings 6:7", "1 Kings 5:17-18", "Exodus 20:24-25", "Deuteronomy 27:5-8"], "1 Kings 6:7", "Raising, Historical Lecture - Metal Tools - 1 Kings 6:7"
  ),
  bibleMasonryQuestion(
    "bible-216", "quotation-to-reference",
    "King Solomon’s Levy numbers thirty thousand in the levy, seventy thousand burden bearers, eighty thousand hewers, and 3,300 officers. Where is it recorded?",
    ["1 Kings 5:13-16", "2 Chronicles 2:1-2", "1 Kings 5:17-18", "1 Chronicles 22:1-2"], "1 Kings 5:13-16", "Raising, Historical Lecture - King Solomon's Levy - 1 Kings 5:13-16"
  ),
  bibleMasonryQuestion(
    "bible-217", "quotation-to-reference",
    "The Grave opens, ‘They shall lie down alike in the dust, and the worms shall cover them.’ Select the corrected verse.",
    ["Job 21:26", "Job 21:13-14", "Isaiah 14:4-11", "Isaiah 38:10"], "Job 21:26", "Raising, Third Degree: Symbolism - The Grave - Job 21:26 (PDF misprints Job 21:23-24)"
  ),
  bibleMasonryQuestion(
    "bible-218", "quotation-to-reference",
    "People who spend their days in wealth and ‘in a moment go down to the grave’ appear in which passage?",
    ["Job 21:13-14", "Job 21:26", "Job 14:13-15", "Ecclesiastes 9:10"], "Job 21:13-14", "Raising, Third Degree: Symbolism - The Grave - Job 21:13-14"
  ),
  bibleMasonryQuestion(
    "bible-219", "quotation-to-reference",
    "‘Thy pomp is brought down to the grave’ is one of The Grave quotations. Locate it.",
    ["Isaiah 14:4-11", "Isaiah 38:10", "Job 21:26", "Psalm 90:9-10"], "Isaiah 14:4-11", "Raising, Third Degree: Symbolism - The Grave - Isaiah 14:4-11"
  ),
  bibleMasonryQuestion(
    "bible-220", "quotation-to-reference",
    "A speaker facing the cutting off of his days says, ‘I shall go to the gates of the grave.’ Choose the citation.",
    ["Isaiah 38:10", "Isaiah 14:4-11", "Job 16:21-22", "Psalm 90:9-10"], "Isaiah 38:10", "Raising, Third Degree: Symbolism - The Grave - Isaiah 38:10"
  ),
  bibleMasonryQuestion(
    "bible-221", "reference-to-masonic-subject",
    "Job 3:11-26 is listed as supplementary material for which Third Degree symbol?",
    ["The Grave", "Immortality", "The Scythe", "Troubles of Life"], "The Grave", "Raising, Third Degree: Symbolism - The Grave - See also: Job 3:11-26"
  ),
  bibleMasonryQuestion(
    "bible-222", "reference-to-masonic-subject",
    "The source directs readers to Job 7:1-10 for further study of what?",
    ["The Grave", "Troubles of Life", "Immortality", "Dust to Dust"], "The Grave", "Raising, Third Degree: Symbolism - The Grave - See also: Job 7:1-10"
  ),
  bibleMasonryQuestion(
    "bible-223", "reference-to-masonic-subject",
    "Job 10:1-22 appears in the supporting-reference list beneath which heading?",
    ["The Grave", "Prayer", "The Scythe", "The Eternal Rest"], "The Grave", "Raising, Third Degree: Symbolism - The Grave - See also: Job 10:1-22"
  ),
  bibleMasonryQuestion(
    "bible-224", "reference-to-masonic-subject",
    "To which symbol does the document connect Job 16:21-22?",
    ["The Grave", "Immortality", "The Interment", "The Eternal Rest"], "The Grave", "Raising, Third Degree: Symbolism - The Grave - See also: Job 16:21-22"
  ),
  bibleMasonryQuestion(
    "bible-225", "reference-to-masonic-subject",
    "The additional citation Job 34:12-15 is grouped with which topic?",
    ["The Grave", "The Commandments", "Prayer", "The Scythe"], "The Grave", "Raising, Third Degree: Symbolism - The Grave - See also: Job 34:12-15"
  ),
  bibleMasonryQuestion(
    "bible-226", "reference-to-masonic-subject",
    "Psalm 90:9-10 supplements the passages associated with what?",
    ["The Grave", "The Eternal Rest", "Troubles of Life", "Dust to Dust"], "The Grave", "Raising, Third Degree: Symbolism - The Grave - See also: Psalm 90:9-10"
  ),
  bibleMasonryQuestion(
    "bible-227", "reference-to-masonic-subject",
    "Ecclesiastes 9:10 is the final cross-reference supplied under which symbol?",
    ["The Grave", "Immortality", "The Scythe", "Eternal Life"], "The Grave", "Raising, Third Degree: Symbolism - The Grave - See also: Ecclesiastes 9:10"
  ),
  bibleMasonryQuestion(
    "bible-228", "quotation-to-reference",
    "The Commandments is introduced with, ‘And God spake all these words, saying.’ Identify the cited passage.",
    ["Exodus 20:1-18", "Deuteronomy 5:1-21", "Exodus 20:7", "Deuteronomy 6:4-5"], "Exodus 20:1-18", "Raising, Third Degree: Symbolism - The Commandments - Exodus 20:1-18"
  ),
  bibleMasonryQuestion(
    "bible-229", "reference-to-masonic-subject",
    "Deuteronomy 5:1-21 is supplied as a parallel reference for which subject?",
    ["The Commandments", "The Obligation", "The Great and Sacred Name", "The Letter G"], "The Commandments", "Raising, Third Degree: Symbolism - The Commandments - See also: Deuteronomy 5:1-21"
  ),
  bibleMasonryQuestion(
    "bible-230", "quotation-to-reference",
    "Immortality begins with the question, ‘If a man die, shall he live again?’ Select the passage.",
    ["Job 14:13-15", "Job 19:23-27", "Job 33:23-24", "Luke 20:27-38"], "Job 14:13-15", "Raising, Third Degree: Symbolism - Immortality - Job 14:13-15"
  ),
  bibleMasonryQuestion(
    "bible-231", "quotation-to-reference",
    "‘Though after my skin worms destroy this body, yet in my flesh shall I see God’ appears under Immortality. Choose the source.",
    ["Job 19:23-27", "Job 14:13-15", "Job 33:23-24", "1 Corinthians 15:1-58"], "Job 19:23-27", "Raising, Third Degree: Symbolism - Immortality - Job 19:23-27"
  ),
  bibleMasonryQuestion(
    "bible-232", "quotation-to-reference",
    "A messenger and interpreter leads to the declaration, ‘Deliver him from going down to the pit: I have found a ransom.’ Locate it.",
    ["Job 33:23-24", "Job 19:23-27", "Job 14:13-15", "Luke 20:27-38"], "Job 33:23-24", "Raising, Third Degree: Symbolism - Immortality - Job 33:23-24"
  ),
  bibleMasonryQuestion(
    "bible-233", "quotation-to-reference",
    "God is described as God of the living because Abraham, Isaac, and Jacob all live unto him. Which passage supports Immortality?",
    ["Luke 20:27-38", "John 5:25", "1 Corinthians 15:1-58", "Hebrews 11:17-19"], "Luke 20:27-38", "Raising, Third Degree: Symbolism - Immortality - Luke 20:27-38"
  ),
  bibleMasonryQuestion(
    "bible-234", "quotation-to-reference",
    "Corruption putting on incorruption and mortality putting on immortality culminates in death being swallowed up in victory. Identify the chapter.",
    ["1 Corinthians 15:1-58", "Luke 20:27-38", "2 Timothy 1:6-10", "1 Timothy 6:16"], "1 Corinthians 15:1-58", "Raising, Third Degree: Symbolism - Immortality - 1 Corinthians 15:1-58"
  ),
  bibleMasonryQuestion(
    "bible-235", "reference-to-masonic-subject",
    "Job 32:8-9 appears among the supplementary references for which doctrine?",
    ["Immortality", "The Grave", "Eternal Life", "The Eternal Rest"], "Immortality", "Raising, Third Degree: Symbolism - Immortality - See also: Job 32:8-9"
  ),
  bibleMasonryQuestion(
    "bible-236", "reference-to-masonic-subject",
    "The document associates Ecclesiastes 3:20-22 with which subject?",
    ["Immortality", "Dust to Dust", "Troubles of Life", "The Scythe"], "Immortality", "Raising, Third Degree: Symbolism - Immortality - See also: Ecclesiastes 3:20-22"
  ),
  bibleMasonryQuestion(
    "bible-237", "reference-to-masonic-subject",
    "John 5:25 is recommended for further study beneath which heading?",
    ["Immortality", "Eternal Life", "The Eternal Rest", "The Word"], "Immortality", "Raising, Third Degree: Symbolism - Immortality - See also: John 5:25"
  ),
  bibleMasonryQuestion(
    "bible-238", "reference-to-masonic-subject",
    "Hebrews 11:17-19 serves as an additional biblical reference for what?",
    ["Immortality", "The Spiritual Temple", "The Obligation", "The Interment"], "Immortality", "Raising, Third Degree: Symbolism - Immortality - See also: Hebrews 11:17-19"
  ),
  bibleMasonryQuestion(
    "bible-239", "reference-to-masonic-subject",
    "Second Timothy 1:6-10 is included in the source’s cross-reference list for which doctrine?",
    ["Immortality", "Eternal Life", "The Commandments", "Reverence to God"], "Immortality", "Raising, Third Degree: Symbolism - Immortality - See also: 2 Timothy 1:6-10"
  ),
  bibleMasonryQuestion(
    "bible-240", "reference-to-masonic-subject",
    "First Timothy 6:16 completes the supporting references under which heading?",
    ["Immortality", "The Eternal Rest", "Eternal Life", "The Grave"], "Immortality", "Raising, Third Degree: Symbolism - Immortality - See also: 1 Timothy 6:16"
  ),
  bibleMasonryQuestion(
    "bible-241", "quotation-to-reference",
    "The Scythe is represented by man coming forth like a flower, being cut down, and fleeing like a shadow. Locate the verse.",
    ["Job 14:2", "Job 14:13-15", "Job 21:26", "Ecclesiastes 9:10"], "Job 14:2", "Raising, Third Degree: Symbolism - The Scythe - Job 14:2"
  ),
  bibleMasonryQuestion(
    "bible-242", "quotation-to-reference",
    "Eternal Life begins with the question, ‘Good Master, what good thing shall I do, that I may have eternal life?’ Select the account.",
    ["Matthew 19:16-22", "John 4:31-38", "Romans 6:1-23", "John 5:1-21"], "Matthew 19:16-22", "Raising, Third Degree: Symbolism - Eternal Life - Matthew 19:16-22"
  ),
  bibleMasonryQuestion(
    "bible-243", "quotation-to-reference",
    "Fields already white for harvest and reapers gathering fruit unto eternal life appear in which passage?",
    ["John 4:31-38", "Matthew 19:16-22", "John 5:25", "Revelation 21:1-27"], "John 4:31-38", "Raising, Third Degree: Symbolism - Eternal Life - John 4:31-38"
  ),
  bibleMasonryQuestion(
    "bible-244", "source-cross-reference",
    "Which ‘See also’ citation beneath Eternal Life spans the opening ten verses of John?",
    ["John 1:1-10", "John 5:1-21", "Romans 5:21", "Romans 6:1-23"], "John 1:1-10", "Raising, Third Degree: Symbolism - Eternal Life - See also: John 1:1-10"
  ),
  bibleMasonryQuestion(
    "bible-245", "source-cross-reference",
    "Which citation is listed under Eternal Life rather than among the supporting references for Immortality?",
    ["John 5:1-21", "Job 32:8-9", "Hebrews 11:17-19", "2 Timothy 1:6-10"], "John 5:1-21", "Raising, Third Degree: Symbolism - Eternal Life - See also: John 5:1-21"
  ),
  bibleMasonryQuestion(
    "bible-246", "reference-to-masonic-subject",
    "Romans 5:21 is connected by the source with which doctrine?",
    ["Eternal Life", "Immortality", "Reverence to God", "The Commandments"], "Eternal Life", "Raising, Third Degree: Symbolism - Eternal Life - See also: Romans 5:21"
  ),
  bibleMasonryQuestion(
    "bible-247", "reference-to-masonic-subject",
    "Romans 6:1-23 is the final additional citation supplied under which heading?",
    ["Eternal Life", "Immortality", "The Grave", "Dust to Dust"], "Eternal Life", "Raising, Third Degree: Symbolism - Eternal Life - See also: Romans 6:1-23"
  ),
  bibleMasonryQuestion(
    "bible-248", "quotation-to-reference",
    "The Eternal Rest opens with God’s heavenly temple and the ark of his testament appearing within it. Choose the citation.",
    ["Revelation 11:19", "Revelation 21:1-27", "Revelation 22:1-21", "Hebrews 11:8-10"], "Revelation 11:19", "Raising, Third Degree: Symbolism - The Eternal Rest - Revelation 11:19"
  ),
  bibleMasonryQuestion(
    "bible-249", "quotation-to-reference",
    "The holy Jerusalem needs no temple, sun, or moon because God, the Lamb, and divine glory supply them. Where is this vision found?",
    ["Revelation 21:1-27", "Revelation 11:19", "Revelation 22:1-21", "John 4:31-38"], "Revelation 21:1-27", "Raising, Third Degree: Symbolism - The Eternal Rest - Revelation 21:1-27"
  ),
  bibleMasonryQuestion(
    "bible-250", "quotation-to-reference",
    "There is no night, candle, or sunlight because the Lord God gives light, and his servants reign forever. Identify the concluding passage.",
    ["Revelation 22:1-21", "Revelation 21:1-27", "Revelation 11:19", "Isaiah 60:19"], "Revelation 22:1-21", "Raising, Third Degree: Symbolism - The Eternal Rest - Revelation 22:1-21"
  )
];
