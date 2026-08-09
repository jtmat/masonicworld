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
    "bible-151", "quotation-to-reference",
    "The Fords of the Jordan begins with the people of Gilead seeking a leader against Ammon. Where is this recorded?",
    ["Judges 10:15-18", "Judges 11:4-10", "Judges 12:1-7", "Joel 3:2, 12"], "Judges 10:15-18", 11, "Passing, Middle Chamber Lecture - The Fords of the Jordan - Judges 10:15-18"
  ),
  bibleMasonryQuestion(
    "bible-152", "reference-to-masonic-subject",
    "Jephthah agreeing to lead Gilead if the Lord delivered Ammon in Judges 11:4-10 belongs beneath which heading?",
    ["The Fords of the Jordan", "The Valley of Jehoshaphat", "Hills and Valleys", "The Charge"], "The Fords of the Jordan", 11, "Passing, Middle Chamber Lecture - The Fords of the Jordan - Judges 11:4-10"
  ),
  bibleMasonryQuestion(
    "bible-153", "quotation-to-reference",
    "The test between ‘Shibboleth’ and ‘Sibboleth’ occurred at the passages of Jordan. Select the account.",
    ["Judges 12:1-7", "Judges 10:15-18", "Judges 11:4-10", "2 Chronicles 20:20-25"], "Judges 12:1-7", 11, "Passing, Middle Chamber Lecture - The Fords of the Jordan - Judges 12:1-7"
  ),
  bibleMasonryQuestion(
    "bible-154", "reference-to-masonic-subject",
    "David’s declaration in 1 Chronicles 22:5 that the Lord’s house must be exceedingly magnificent introduces what subject?",
    ["Destruction of the Temple", "Building of the Temple", "Beginning of the Temple", "The Spiritual Temple"], "Destruction of the Temple", 11, "Passing, Middle Chamber Lecture - Destruction of the Temple - 1 Chronicles 22:5"
  ),
  bibleMasonryQuestion(
    "bible-155", "quotation-to-reference",
    "Destruction of the Temple includes the warning that the hallowed house would be cast from God’s sight and become a byword. Identify the passage.",
    ["1 Kings 9:7-9", "1 Chronicles 22:5", "Psalm 127:1", "Luke 2:1-20"], "1 Kings 9:7-9", 11, "Passing, Middle Chamber Lecture - Destruction of the Temple - 1 Kings 9:7-9"
  ),
  bibleMasonryQuestion(
    "bible-156", "reference-to-masonic-subject",
    "‘Except the Lord build the house, they labour in vain that build it’ in Psalm 127:1 supports which heading?",
    ["The Spiritual Temple", "The House Not Made with Hands", "The Tabernacle", "Building of the Temple"], "The Spiritual Temple", 11, "Passing, Middle Chamber Lecture - The Spiritual Temple - Psalm 127:1"
  ),
  bibleMasonryQuestion(
    "bible-157", "quotation-to-reference",
    "The Spiritual Temple includes, ‘Every house is builded by some man; but he that built all things is God.’ Choose the citation.",
    ["Hebrews 3:3-4", "Hebrews 11:8-10", "Psalm 127:1", "Psalm 15:1-2"], "Hebrews 3:3-4", 11, "Passing, Middle Chamber Lecture - The Spiritual Temple - Hebrews 3:3-4"
  ),
  bibleMasonryQuestion(
    "bible-158", "reference-to-masonic-subject",
    "Abraham looking for a city with foundations, whose builder and maker is God, in Hebrews 11:8-10 illustrates what?",
    ["The Spiritual Temple", "The House Not Made with Hands", "The Cornerstone", "The Lodge"], "The Spiritual Temple", 11, "Passing, Middle Chamber Lecture - The Spiritual Temple - Hebrews 11:8-10"
  ),
  bibleMasonryQuestion(
    "bible-159", "quotation-to-reference",
    "‘Lord, who shall abide in thy tabernacle? who shall dwell in thy holy hill?’ concludes The Spiritual Temple references. Locate it.",
    ["Psalm 15:1-2", "Psalm 127:1", "Psalm 24:1-4", "Psalm 27:4"], "Psalm 15:1-2", 11, "Passing, Middle Chamber Lecture - The Spiritual Temple - Psalm 15:1-2"
  ),
  bibleMasonryQuestion(
    "bible-160", "reference-to-masonic-subject",
    "God’s declaration to Moses, ‘I AM THAT I AM,’ in Exodus 3:13-15 begins the references for which symbol?",
    ["The Letter G", "The Great and Sacred Name", "The Atheist", "Reverence to God"], "The Letter G", 11, "Passing, Middle Chamber Lecture - The Letter G - Exodus 3:13-15"
  ),
  bibleMasonryQuestion(
    "bible-161", "quotation-to-reference",
    "The Letter G includes the declaration that the Lord is God ‘in heaven above, and upon the earth beneath: there is none else.’ Select the source.",
    ["Deuteronomy 4:39", "Deuteronomy 6:4-5", "Exodus 3:13-15", "Revelation 1:8"], "Deuteronomy 4:39", 11, "Passing, Middle Chamber Lecture - The Letter G - Deuteronomy 4:39"
  ),
  bibleMasonryQuestion(
    "bible-162", "reference-to-masonic-subject",
    "‘Hear, O Israel: The Lord our God is one Lord’ in Deuteronomy 6:4-5 is associated with what?",
    ["The Letter G", "Reverence to God", "The Great and Sacred Name", "The Obligation"], "The Letter G", 11, "Passing, Middle Chamber Lecture - The Letter G - Deuteronomy 6:4-5"
  ),
  bibleMasonryQuestion(
    "bible-163", "quotation-to-reference",
    "‘I am Alpha and Omega, the beginning and the ending’ completes The Letter G references. Where is it written?",
    ["Revelation 1:8", "Exodus 3:13-15", "Deuteronomy 4:39", "Isaiah 45:22-23"], "Revelation 1:8", 11, "Passing, Middle Chamber Lecture - The Letter G - Revelation 1:8"
  ),
  bibleMasonryQuestion(
    "bible-164", "reference-to-masonic-subject",
    "Every knee bowing and every tongue swearing before God in Isaiah 45:22-23 illustrates which attitude?",
    ["Reverence to God", "The Obligation", "The Great and Sacred Name", "The Letter G"], "Reverence to God", 12, "Raising - Reverence to God - Isaiah 45:22-23"
  ),
  bibleMasonryQuestion(
    "bible-165", "quotation-to-reference",
    "Reverence to God includes, ‘Every knee shall bow to me, and every tongue shall confess to God.’ Choose its New Testament citation.",
    ["Romans 14:11-12", "Deuteronomy 6:4-5", "Revelation 1:8", "Hebrews 6:13-16"], "Romans 14:11-12", 12, "Raising - Reverence to God - Romans 14:11-12"
  ),
  bibleMasonryQuestion(
    "bible-166", "reference-to-masonic-subject",
    "The dust returning to earth and the spirit returning to God in Ecclesiastes 12:1-7 represents which Third Degree subject?",
    ["Dust to Dust", "The Grave", "Immortality", "The Eternal Rest"], "Dust to Dust", 12, "Raising, Third Degree: First Section - Dust to Dust - Ecclesiastes 12:1-7"
  ),
  bibleMasonryQuestion(
    "bible-167", "quotation-to-reference",
    "Contention Among Brethren begins with the instruction to reconcile with a brother before offering a gift at the altar. Identify the passage.",
    ["Matthew 5:23-24", "Matthew 18:15-17", "Luke 17:3-4", "1 Corinthians 12:14-31"], "Matthew 5:23-24", 12, "Raising, Third Degree: First Section - Contention Among Brethren - Matthew 5:23-24"
  ),
  bibleMasonryQuestion(
    "bible-168", "reference-to-masonic-subject",
    "Telling a brother his fault privately in Matthew 18:15-17 is included under which heading?",
    ["Contention Among Brethren", "Brotherly Love", "The Golden Rule", "Distressed Worthy Brother"], "Contention Among Brethren", 12, "Raising, Third Degree: First Section - Contention Among Brethren - Matthew 18:15-17"
  ),
  bibleMasonryQuestion(
    "bible-169", "quotation-to-reference",
    "A brother who repents seven times in a day is to be forgiven seven times. Which passage supports Contention Among Brethren?",
    ["Luke 17:3-4", "Matthew 18:15-17", "Matthew 5:23-24", "Mark 3:20-26"], "Luke 17:3-4", 12, "Raising, Third Degree: First Section - Contention Among Brethren - Luke 17:3-4"
  ),
  bibleMasonryQuestion(
    "bible-170", "reference-to-masonic-subject",
    "The instruction that there be no schism in the body in 1 Corinthians 12:14-31 addresses what?",
    ["Contention Among Brethren", "Unity", "Brotherly Love", "The Lodge"], "Contention Among Brethren", 12, "Raising, Third Degree: First Section - Contention Among Brethren - 1 Corinthians 12:14-31"
  ),
  bibleMasonryQuestion(
    "bible-171", "quotation-to-reference",
    "‘If a kingdom be divided against itself, that kingdom cannot stand’ concludes the principal Contention Among Brethren passages. Locate it.",
    ["Mark 3:20-26", "Matthew 18:15-17", "1 Corinthians 12:14-31", "Matthew 5:23-24"], "Mark 3:20-26", 12, "Raising, Third Degree: First Section - Contention Among Brethren - Mark 3:20-26"
  ),
  bibleMasonryQuestion(
    "bible-172", "reference-to-masonic-subject",
    "Failing strength, burden bearers, and debris preventing the wall’s construction in Nehemiah 4:10 illustrate what?",
    ["Rubbish of the Temple", "Untempered Morter", "Destruction of the Temple", "The Craftsmen"], "Rubbish of the Temple", 12, "Raising, Third Degree: Second Section - Rubbish of the Temple - Nehemiah 4:10"
  ),
  bibleMasonryQuestion(
    "bible-173", "quotation-to-reference",
    "Troubles of Life includes, ‘Man is born unto trouble, as the sparks fly upward.’ Choose the passage.",
    ["Job 5:1-7", "Job 14:1-2", "Ecclesiastes 2:22-23", "Job 21:13-14"], "Job 5:1-7", 12, "Raising, Third Degree: Second Section - Troubles of Life - Job 5:1-7"
  ),
  bibleMasonryQuestion(
    "bible-174", "reference-to-masonic-subject",
    "Man being of few days, full of trouble, and cut down like a flower in Job 14:1-2 belongs to which heading?",
    ["Troubles of Life", "Prayer", "The Grave", "Dust to Dust"], "Troubles of Life", 12, "Raising, Third Degree: Second Section - Troubles of Life - Job 14:1-2"
  ),
  bibleMasonryQuestion(
    "bible-175", "quotation-to-reference",
    "A life of labor, vexation, sorrow, and restless nights completes Troubles of Life. Select the corrected citation.",
    ["Ecclesiastes 2:22-23", "Job 5:1-7", "Job 14:1-2", "Psalm 86:7"], "Ecclesiastes 2:22-23", 12, "Raising, Third Degree: Second Section - Troubles of Life - Ecclesiastes 2:22-23 (PDF misprints Ecclesiastes 8:22-23)"
  ),
  bibleMasonryQuestion(
    "bible-176", "reference-to-masonic-subject",
    "Calling upon the Lord in distress and being heard from his temple in 2 Samuel 22:7 is used for what?",
    ["Prayer", "The Aid of Deity", "Trust in God", "Reverence to God"], "Prayer", 12, "Raising, Third Degree: Second Section - Prayer - 2 Samuel 22:7"
  ),
  bibleMasonryQuestion(
    "bible-177", "quotation-to-reference",
    "Prayer includes the declaration, ‘As for me, I will call upon God; and the Lord shall save me.’ Identify the Psalm.",
    ["Psalm 55:16", "Psalm 86:7", "Psalm 141:1", "Psalm 56:11-13"], "Psalm 55:16", 12, "Raising, Third Degree: Second Section - Prayer - Psalm 55:16"
  ),
  bibleMasonryQuestion(
    "bible-178", "reference-to-masonic-subject",
    "‘In the day of my trouble I will call upon thee: for thou wilt answer me’ in Psalm 86:7 reinforces which practice?",
    ["Prayer", "Trust in God", "The Aid of Deity", "Fortitude"], "Prayer", 12, "Raising, Third Degree: Second Section - Prayer - Psalm 86:7"
  ),
  bibleMasonryQuestion(
    "bible-179", "quotation-to-reference",
    "‘Lord, I cry unto thee: make haste unto me: give ear unto my voice’ is one of the Prayer quotations. Where is it found?",
    ["Psalm 141:1", "Psalm 55:16", "Psalm 86:7", "2 Samuel 22:7"], "Psalm 141:1", 12, "Raising, Third Degree: Second Section - Prayer - Psalm 141:1"
  ),
  bibleMasonryQuestion(
    "bible-180", "reference-to-masonic-subject",
    "Sins becoming white as snow in Isaiah 1:16-18 represents which group of symbols?",
    ["Emblems of Innocence", "The Scythe", "The Jewel", "The New Name"], "Emblems of Innocence", 12, "Raising, Third Degree: Second Section - Emblems of Innocence - Isaiah 1:16-18"
  ),
  bibleMasonryQuestion(
    "bible-181", "quotation-to-reference",
    "The description of raiment becoming ‘shining, exceeding white as snow’ supports Emblems of Innocence. Select the account.",
    ["Mark 9:1-9", "Isaiah 1:16-18", "Revelation 7:13-17", "Matthew 17:1-8"], "Mark 9:1-9", 12, "Raising, Third Degree: Second Section - Emblems of Innocence - Mark 9:1-9"
  ),
  bibleMasonryQuestion(
    "bible-182", "reference-to-masonic-subject",
    "Those who washed their robes white in the blood of the Lamb in Revelation 7:13-17 illustrate what?",
    ["Emblems of Innocence", "The Scythe", "The Jewel", "The Eternal Rest"], "Emblems of Innocence", 12, "Raising, Third Degree: Second Section - Emblems of Innocence - Revelation 7:13-17"
  ),
  bibleMasonryQuestion(
    "bible-183", "quotation-to-reference",
    "Flight to Joppa recounts Jonah boarding a ship for Tarshish to flee from the Lord’s presence. Choose the passage.",
    ["Jonah 1:1-3", "Isaiah 2:21", "Obadiah 3-4", "Luke 23:50-56"], "Jonah 1:1-3", 12, "Raising, Third Degree: Second Section - Flight to Joppa - Jonah 1:1-3"
  ),
  bibleMasonryQuestion(
    "bible-184", "reference-to-masonic-subject",
    "Going into rocky clefts for fear of the Lord in Isaiah 2:21 corresponds to which heading?",
    ["The Clefts of the Rocks", "Flight to Joppa", "Hills and Valleys", "The North Side"], "The Clefts of the Rocks", 12, "Raising, Third Degree: Second Section - The Clefts of the Rocks - Isaiah 2:21"
  ),
  bibleMasonryQuestion(
    "bible-185", "quotation-to-reference",
    "A proud person dwelling in rocky clefts asks, ‘Who shall bring me down to the ground?’ Identify the source.",
    ["Obadiah 3-4", "Isaiah 2:21", "Ezekiel 43:12", "Isaiah 14:12-23"], "Obadiah 3-4", 12, "Raising, Third Degree: Second Section - The Clefts of the Rocks - Obadiah 3-4"
  ),
  bibleMasonryQuestion(
    "bible-186", "reference-to-masonic-subject",
    "The pure-gold plate engraved ‘HOLINESS TO THE LORD’ in Exodus 28:36-38 represents what?",
    ["The Jewel", "The Great and Sacred Name", "The New Name", "Emblems of Innocence"], "The Jewel", 12, "Raising, Third Degree: Second Section - The Jewel - Exodus 28:36-38"
  ),
  bibleMasonryQuestion(
    "bible-187", "quotation-to-reference",
    "The holy crown’s gold plate was fastened high upon the mitre with blue lace. Which passage completes The Jewel references?",
    ["Exodus 39:30-31", "Exodus 28:36-38", "Revelation 2:17", "Leviticus 8:1-11"], "Exodus 39:30-31", 12, "Raising, Third Degree: Second Section - The Jewel - Exodus 39:30-31"
  ),
  bibleMasonryQuestion(
    "bible-188", "reference-to-masonic-subject",
    "Man living by every utterance from the Lord rather than bread alone in Deuteronomy 8:3-6 introduces which topic?",
    ["The Word", "The Letter G", "The Great and Sacred Name", "Reverence to God"], "The Word", 12, "Raising, Third Degree: Second Section - The Word - Deuteronomy 8:3-6"
  ),
  bibleMasonryQuestion(
    "bible-189", "quotation-to-reference",
    "The Word is described as ‘very nigh unto thee, in thy mouth, and in thy heart.’ Locate this passage.",
    ["Deuteronomy 30:11-14", "Deuteronomy 8:3-6", "Isaiah 55:8-11", "John 1:1-5"], "Deuteronomy 30:11-14", 12, "Raising, Third Degree: Second Section - The Word - Deuteronomy 30:11-14"
  ),
  bibleMasonryQuestion(
    "bible-190", "reference-to-masonic-subject",
    "God’s declaration that his utterance will not return void in Isaiah 55:8-11 supports which heading?",
    ["The Word", "The Obligation", "Prayer", "The Letter G"], "The Word", 12, "Raising, Third Degree: Second Section - The Word - Isaiah 55:8-11"
  ),
  bibleMasonryQuestion(
    "bible-191", "quotation-to-reference",
    "‘In the beginning was the Word, and the Word was with God, and the Word was God.’ Select the citation.",
    ["John 1:1-5", "Deuteronomy 30:11-14", "Isaiah 55:8-11", "Hebrews 4:12"], "John 1:1-5", 12, "Raising, Third Degree: Second Section - The Word - John 1:1-5"
  ),
  bibleMasonryQuestion(
    "bible-192", "reference-to-masonic-subject",
    "Jesus being wrapped in linen and laid in a new stone-hewn sepulchre in Luke 23:50-56 represents what?",
    ["The Interment", "The Grave", "Dust to Dust", "The Eternal Rest"], "The Interment", 12, "Raising, Third Degree: Second Section - The Interment - Luke 23:50-56"
  ),
  bibleMasonryQuestion(
    "bible-193", "quotation-to-reference",
    "The Hailing Sign is connected with Ben-hadad’s plea, ‘I pray thee, let me live,’ followed by ‘He is my brother.’ Choose the account.",
    ["1 Kings 20:31-34", "1 Samuel 20:16-17", "Genesis 4:9-10", "Luke 10:30-37"], "1 Kings 20:31-34", 12, "Raising, Third Degree: Second Section - The Hailing Sign - 1 Kings 20:31-34"
  ),
  bibleMasonryQuestion(
    "bible-194", "reference-to-masonic-subject",
    "Hiram sending cedar, masons, and carpenters to build David a house in 1 Chronicles 14:1-2 begins which historical topic?",
    ["David’s Plans for the Temple", "Building of the Temple", "The Master Builder", "The Craftsmen"], "David’s Plans for the Temple", 12, "Raising, Third Degree: Historical Lecture - David's Plans for the Temple - 1 Chronicles 14:1-2"
  ),
  bibleMasonryQuestion(
    "bible-195", "quotation-to-reference",
    "David explains that he cannot build the Lord’s house because he shed much blood, but that Solomon will be a man of rest. Identify the passage.",
    ["1 Chronicles 22:1-19", "1 Chronicles 14:1-2", "1 Kings 2:10-12", "2 Samuel 7:1-29"], "1 Chronicles 22:1-19", 12, "Raising, Third Degree: Historical Lecture - David's Plans for the Temple - 1 Chronicles 22:1-19"
  ),
  bibleMasonryQuestion(
    "bible-196", "reference-to-masonic-subject",
    "Solomon succeeding David and having his kingdom greatly established in 1 Kings 2:10-12 completes which section?",
    ["David’s Plans for the Temple", "God’s Promise to David", "Beginning of the Temple", "Wisdom of Solomon"], "David’s Plans for the Temple", 13, "Raising, Third Degree: Historical Lecture - David's Plans for the Temple - 1 Kings 2:10-12"
  ),
  bibleMasonryQuestion(
    "bible-197", "quotation-to-reference",
    "God’s Promise to David opens, ‘David waxed greater and greater; for the Lord of hosts was with him.’ Where is this recorded?",
    ["1 Chronicles 11:4-9", "2 Samuel 7:1-29", "1 Chronicles 17:1-15", "1 Chronicles 22:1-19"], "1 Chronicles 11:4-9", 13, "Raising, Third Degree: Historical Lecture - God's Promise to David - 1 Chronicles 11:4-9"
  ),
  bibleMasonryQuestion(
    "bible-198", "reference-to-masonic-subject",
    "The promise of an everlasting house, kingdom, and throne in 2 Samuel 7:1-29 is associated with what?",
    ["God’s Promise to David", "David’s Plans for the Temple", "Beginning of the Temple", "The Eternal Rest"], "God’s Promise to David", 13, "Raising, Third Degree: Historical Lecture - God's Promise to David - 2 Samuel 7:1-29"
  ),
  bibleMasonryQuestion(
    "bible-199", "quotation-to-reference",
    "Solomon begins the Lord’s house at Mount Moriah on the second day of the second month in his fourth year. Select the cited account.",
    ["2 Chronicles 3:1-17", "2 Chronicles 2:3-18", "1 Chronicles 22:1-19", "1 Kings 9:7-9"], "2 Chronicles 3:1-17", 13, "Raising, Third Degree: Historical Lecture - Beginning of the Temple - 2 Chronicles 3:1-17"
  ),
  bibleMasonryQuestion(
    "bible-200", "reference-to-masonic-subject",
    "Huram’s skill in gold, silver, brass, iron, stone, timber, fabrics, and engraving in 2 Chronicles 2:3-18 identifies whom?",
    ["The Master Builder", "The Craftsmen", "The Pillars", "King Solomon’s Levy"], "The Master Builder", 13, "Raising, Third Degree: Historical Lecture - The Master Builder - 2 Chronicles 2:3-18"
  )
];
