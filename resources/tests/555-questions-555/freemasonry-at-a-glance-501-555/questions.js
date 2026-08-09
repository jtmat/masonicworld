/*
  FREEMASONRY AT A GLANCE - QUESTIONS 501-555

  Source: Reynold E. Blight, Freemasonry at a Glance: Answers to 555 Questions.
  The sourceQuestionNumber and sourcePage fields are private maintenance notes.
  Wording has been modernized, and disputed, legendary, subjective, or dated
  statements are attributed or corrected where appropriate.
*/

const QUESTION_BANK = [
  {
    id: "book-501", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "In what year did the Grand Lodge of England grant authority for a lodge in Lisbon, Portugal?",
    choices: ["1735", "1717", "1780", "1805"], correctAnswer: "1735",
    sourceQuestionNumber: 501, sourcePage: 60, source: "Freemasonry at a Glance, question 501, printed page 60; the first Lisbon lodge may date to 1727 or 1728, but the documented English authorization was granted in 1735"
  },
  {
    id: "book-502", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "What characterized Portuguese Freemasonry from about 1780 to 1805?",
    choices: ["Repeated persecution and suppression", "Uninterrupted royal sponsorship", "Union with the Grand Lodge of Scotland", "Complete absence of Masonic activity"], correctAnswer: "Repeated persecution and suppression",
    sourceQuestionNumber: 502, sourcePage: 60, source: "Freemasonry at a Glance, question 502, printed page 60; historical period retained"
  },
  {
    id: "book-503", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "When do accounts place the beginnings of organized Freemasonry in the Romanian principalities?",
    choices: ["The 1730s", "The 1630s", "The 1830s", "The 1930s"], correctAnswer: "The 1730s",
    sourceQuestionNumber: 503, sourcePage: 60, source: "Freemasonry at a Glance, question 503, printed pages 60-61; source's early-twentieth-century introduction claim corrected; the National Grand Lodge of Romania was founded in 1880"
  },
  {
    id: "book-504", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "What documented event marks an early official connection between English Freemasonry and Russia?",
    choices: ["Captain John Phillips was appointed Provincial Grand Master in 1731", "The Lodge of Perfect Unity was founded in 1821", "Peter the Great became Grand Master in 1700", "The Grand Lodge of Russia was founded in 1922"], correctAnswer: "Captain John Phillips was appointed Provincial Grand Master in 1731",
    sourceQuestionNumber: 504, sourcePage: 61, source: "Freemasonry at a Glance, question 504, printed page 61; the source instead begins with a 1771 lodge listed in the 1777 Freemason's Calendar"
  },
  {
    id: "book-505", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "Who was appointed Provincial Grand Master of Russia by the Grand Lodge of England in 1772?",
    choices: ["Ivan Yelagin", "Count Franz von Sporck", "James Anderson", "Giuseppe Garibaldi"], correctAnswer: "Ivan Yelagin",
    sourceQuestionNumber: 505, sourcePage: 61, source: "Freemasonry at a Glance, question 505, printed page 61; name normalized from John Yelaguin"
  },
  {
    id: "book-506", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "Which sequence best summarizes Russian Freemasonry in the nineteenth and early twentieth centuries?",
    choices: ["Suppressed under the tsars, revived in the early 1900s, then ended again under Soviet rule", "Continuously protected by every tsar and Soviet government", "Transferred permanently to English control in 1822", "First introduced only after the Russian Revolution"], correctAnswer: "Suppressed under the tsars, revived in the early 1900s, then ended again under Soviet rule",
    sourceQuestionNumber: 506, sourcePage: 61, source: "Freemasonry at a Glance, question 506, printed page 61; source's 1826 suppression date and simplified 1922 ending corrected"
  },
  {
    id: "book-507", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Is Peter the Great's membership in Freemasonry supported by an authentic initiation record?",
    choices: ["No, it remains an unverified tradition", "Yes, a complete English lodge record survives", "Yes, he served as Grand Master of Scotland", "No, because Freemasonry did not exist anywhere in his lifetime"], correctAnswer: "No, it remains an unverified tradition",
    sourceQuestionNumber: 507, sourcePage: 61, source: "Freemasonry at a Glance, question 507, printed page 61; legendary claim qualified"
  },
  {
    id: "book-508", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "In what year was the Grand Lodge of Scotland constituted?",
    choices: ["1736", "1717", "1725", "1813"], correctAnswer: "1736",
    sourceQuestionNumber: 508, sourcePage: 61, source: "Freemasonry at a Glance, question 508, printed page 61"
  },
  {
    id: "book-509", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "In what year was Lodge de Goede Hoop, the first permanent Masonic lodge in South Africa, founded?",
    choices: ["1772", "1717", "1822", "1872"], correctAnswer: "1772",
    sourceQuestionNumber: 509, sourcePage: 61, source: "Freemasonry at a Glance, question 509, printed page 61; lodge identity supplied and obsolete jurisdiction count omitted"
  },
  {
    id: "book-510", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Which former Grand Master of England is associated with introducing English Freemasonry into Spain?",
    choices: ["Philip, Duke of Wharton", "Arthur, Duke of Wellington", "Albert, Prince Consort", "John, Duke of Marlborough"], correctAnswer: "Philip, Duke of Wharton",
    sourceQuestionNumber: 510, sourcePage: 61, source: "Freemasonry at a Glance, question 510, printed page 61; ambassador title omitted"
  },
  {
    id: "book-511", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "In what year was the first documented lodge in Spain founded?",
    choices: ["1728", "1717", "1738", "1828"], correctAnswer: "1728",
    sourceQuestionNumber: 511, sourcePage: 61, source: "Freemasonry at a Glance, question 511, printed page 61"
  },
  {
    id: "book-512", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "Which Spanish royal and Masonic Grand Master was reported excommunicated in 1829 because of his Masonic activity?",
    choices: ["Infante Francisco de Paula of Spain", "King Ferdinand VII", "Philip, Duke of Wharton", "King Alfonso XIII"], correctAnswer: "Infante Francisco de Paula of Spain",
    sourceQuestionNumber: 512, sourcePage: 61, source: "Freemasonry at a Glance, question 512, printed pages 61-62; name and title modernized"
  },
  {
    id: "book-513", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "In what year was the first lodge founded in Sweden?",
    choices: ["1735", "1717", "1756", "1813"], correctAnswer: "1735",
    sourceQuestionNumber: 513, sourcePage: 62, source: "Freemasonry at a Glance, question 513, printed page 62"
  },
  {
    id: "book-514", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "What is a defining characteristic of the Swedish Rite practiced in much of Scandinavia?",
    choices: ["It is explicitly Christian in character", "It excludes all references to religion", "It consists only of the Entered Apprentice degree", "It is governed by the Grand Orient de France"], correctAnswer: "It is explicitly Christian in character",
    sourceQuestionNumber: 514, sourcePage: 62, source: "Freemasonry at a Glance, question 514, printed page 62; unsupported claim of distinctive Swedenborgian teachings omitted"
  },
  {
    id: "book-515", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "Which statement described New York-chartered Freemasonry in Syria and Lebanon around 1928?",
    choices: ["Several lodges had been chartered there by the Grand Lodge of New York", "No Masonic lodge had ever existed in the region", "Every lodge was governed by a sovereign Syrian Grand Lodge", "Only the Grand Lodge of California could charter lodges there"], correctAnswer: "Several lodges had been chartered there by the Grand Lodge of New York",
    sourceQuestionNumber: 515, sourcePage: 62, source: "Freemasonry at a Glance, question 515, printed page 62; historical scope retained; the regional situation later changed substantially"
  },
  {
    id: "book-516", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "About how many Freemasons worldwide were estimated around 1928?",
    choices: ["4.75 million", "475,000", "47.5 million", "750 million"], correctAnswer: "4.75 million",
    sourceQuestionNumber: 516, sourcePage: 62, source: "Freemasonry at a Glance, question 516, printed page 62; historical estimate explicitly dated"
  },
  {
    id: "book-517", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "What substantive difference is generally indicated by the abbreviations F. & A.M. and A.F. & A.M.?",
    choices: ["None; the wording varies among jurisdictions", "One admits only operative stonemasons", "One is a Scottish Rite degree", "One is reserved for military lodges"], correctAnswer: "None; the wording varies among jurisdictions",
    sourceQuestionNumber: 517, sourcePage: 62, source: "Freemasonry at a Glance, question 517, printed page 62; obsolete state-by-state list replaced with the enduring distinction"
  },
  {
    id: "book-518", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Historically, what did the word 'Accepted' indicate in the term 'Free and Accepted Masons'?",
    choices: ["Members admitted who were not working stonemasons", "Stonemasons who accepted government employment", "Members who had completed every appendant degree", "Lodges accepted into the Scottish Rite"], correctAnswer: "Members admitted who were not working stonemasons",
    sourceQuestionNumber: 518, sourcePage: 62, source: "Freemasonry at a Glance, question 518, printed page 62"
  },
  {
    id: "book-519", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "Which U.S. Grand Lodge is traditionally noted for naming rather than numbering its lodges?",
    choices: ["The Grand Lodge of Massachusetts", "The Grand Lodge of California", "The Grand Lodge of Texas", "The Grand Lodge of Florida"], correctAnswer: "The Grand Lodge of Massachusetts",
    sourceQuestionNumber: 519, sourcePage: 63, source: "Freemasonry at a Glance, question 519, printed page 63"
  },
  {
    id: "book-520", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Which location did older Masonic accounts identify with one of the world's northernmost lodges?",
    choices: ["Dawson City, Yukon", "Dawson City, Alaska", "Oslo, Sweden", "Reykjavik, Greenland"], correctAnswer: "Dawson City, Yukon",
    sourceQuestionNumber: 520, sourcePage: 63, source: "Freemasonry at a Glance, question 520, printed page 63; source's geographic error corrected and absolute 'farthest north' claim made historical"
  },
  {
    id: "book-521", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Can a blind man be a Freemason?",
    choices: ["Yes, subject to the rules of the jurisdiction", "No, blindness automatically ends membership", "Only if he belongs to a military lodge", "Only in England and Canada"], correctAnswer: "Yes, subject to the rules of the jurisdiction",
    sourceQuestionNumber: 521, sourcePage: 63, source: "Freemasonry at a Glance, question 521, printed page 63; modern jurisdiction-dependent wording replaces dated examples"
  },
  {
    id: "book-522", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "Which list gives the seven symbolic steps of the Ladder of Kadosh?",
    choices: ["Justice, Equity, Kindness, Good Faith, Labor, Patience and Intelligence", "Faith, Hope, Charity, Prudence, Fortitude, Temperance and Justice", "Grammar, Rhetoric, Logic, Arithmetic, Geometry, Music and Astronomy", "Silence, Secrecy, Loyalty, Courage, Strength, Wisdom and Beauty"], correctAnswer: "Justice, Equity, Kindness, Good Faith, Labor, Patience and Intelligence",
    sourceQuestionNumber: 522, sourcePage: 63, source: "Freemasonry at a Glance, question 522, printed page 63"
  },
  {
    id: "book-523", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "What does the Hebrew word 'Kadosh' mean?",
    choices: ["Holy", "Wisdom", "Strength", "Light"], correctAnswer: "Holy",
    sourceQuestionNumber: 523, sourcePage: 63, source: "Freemasonry at a Glance, question 523, printed page 63"
  },
  {
    id: "book-524", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Who were the Bavarian Illuminati?",
    choices: ["A separate secret society founded in Bavaria in 1776", "The first Grand Lodge of England", "A medieval guild of cathedral builders", "An officially recognized Scottish Rite body"], correctAnswer: "A separate secret society founded in Bavaria in 1776",
    sourceQuestionNumber: 524, sourcePage: 63, source: "Freemasonry at a Glance, question 524, printed page 63; clarified that the Illuminati were not a recognized Masonic body"
  },
  {
    id: "book-525", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "What was the Rite of Misraim?",
    choices: ["A high-degree Masonic system developed in Europe in the early nineteenth century", "The original three-degree English Craft ritual", "A medieval order founded by the Knights Templar", "A single lodge established by Benjamin Franklin"], correctAnswer: "A high-degree Masonic system developed in Europe in the early nineteenth century",
    sourceQuestionNumber: 525, sourcePage: 63, source: "Freemasonry at a Glance, question 525, printed page 63; spelling standardized and inaccurate claim that it never spread beyond Naples corrected"
  },
  {
    id: "book-526", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "What does the phrase 'riding the goat' refer to in popular jokes about Masonic initiation?",
    choices: ["An old anti-Masonic caricature rather than an actual Masonic practice", "A required journey taken by every candidate", "A ceremony limited to Grand Masters", "A medieval stonemason's method of lifting blocks"], correctAnswer: "An old anti-Masonic caricature rather than an actual Masonic practice",
    sourceQuestionNumber: 526, sourcePage: 63, source: "Freemasonry at a Glance, question 526, printed page 63; speculative ancient explanation replaced with the enduring meaning"
  },
  {
    id: "book-527", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "What gesture traditionally symbolizes silence?",
    choices: ["A finger laid across the lips", "A hand placed over the heart", "Two hands raised above the head", "A closed fist held at the shoulder"], correctAnswer: "A finger laid across the lips",
    sourceQuestionNumber: 527, sourcePage: 63, source: "Freemasonry at a Glance, question 527, printed page 63"
  },
  {
    id: "book-528", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "In some English Entered Apprentice symbolism, what does the key represent?",
    choices: ["The tongue, especially in speaking in a brother's defense", "The Worshipful Master's authority", "The entrance to King Solomon's Temple", "The candidate's working tools"], correctAnswer: "The tongue, especially in speaking in a brother's defense",
    sourceQuestionNumber: 528, sourcePage: 64, source: "Freemasonry at a Glance, question 528, printed page 64; jurisdictional scope retained"
  },
  {
    id: "book-529", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Which organization became a well-known early parody of Freemasonry?",
    choices: ["The Ancient Noble Order of Gormogons", "The Royal Society", "The Odd Fellows", "The Order of the Garter"], correctAnswer: "The Ancient Noble Order of Gormogons",
    sourceQuestionNumber: 529, sourcePage: 64, source: "Freemasonry at a Glance, question 529, printed page 64"
  },
  {
    id: "book-530", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "What old working tool is named in some English Masonic ritual even though its exact operative form is debated?",
    choices: ["The broached thurnel", "The twenty-four-inch gauge", "The common gavel", "The plumb rule"], correctAnswer: "The broached thurnel",
    sourceQuestionNumber: 530, sourcePage: 64, source: "Freemasonry at a Glance, question 530, printed page 64; uncertainty about the operative object acknowledged"
  },
  {
    id: "book-531", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Who wrote 'The Man Who Would Be King,' a story with strong Masonic elements?",
    choices: ["Rudyard Kipling", "Arthur Conan Doyle", "Mark Twain", "Charles Dickens"], correctAnswer: "Rudyard Kipling",
    sourceQuestionNumber: 531, sourcePage: 64, source: "Freemasonry at a Glance, question 531, printed page 64"
  },
  {
    id: "book-532", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "In the old craft guilds, what was a master's piece or masterpiece?",
    choices: ["Work submitted to prove an apprentice's fitness to become a master", "The ceremonial jewel worn by a Grand Master", "The cornerstone of every cathedral", "A written history of a lodge"], correctAnswer: "Work submitted to prove an apprentice's fitness to become a master",
    sourceQuestionNumber: 532, sourcePage: 64, source: "Freemasonry at a Glance, question 532, printed page 64"
  },
  {
    id: "book-533", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "Who wrote the Masonic funeral hymn beginning 'Solemn strikes the funeral chime'?",
    choices: ["David Vinton", "Rudyard Kipling", "James Anderson", "Albert Pike"], correctAnswer: "David Vinton",
    sourceQuestionNumber: 533, sourcePage: 64, source: "Freemasonry at a Glance, question 533, printed page 64; published in 1816"
  },
  {
    id: "book-534", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "When was the Grand Lodge of California established?",
    choices: ["April 19, 1850", "July 4, 1776", "June 24, 1717", "September 9, 1850"], correctAnswer: "April 19, 1850",
    sourceQuestionNumber: 534, sourcePage: 64, source: "Freemasonry at a Glance, question 534, printed page 64"
  },
  {
    id: "book-535", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "Which statement accurately describes Joseph Smith's Masonic initiation?",
    choices: ["He was initiated on March 15, 1842, and passed and raised the following day", "He was made a Mason at sight and immediately expelled", "He never joined a Masonic lodge", "He became Grand Master of Illinois in 1842"], correctAnswer: "He was initiated on March 15, 1842, and passed and raised the following day",
    sourceQuestionNumber: 535, sourcePage: 64, source: "Freemasonry at a Glance, question 535, printed page 64; source's made-at-sight and personal-expulsion claims corrected"
  },
  {
    id: "book-536", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Was Abraham Lincoln a Freemason?",
    choices: ["No, there is no record that he was initiated", "Yes, he was Grand Master of Illinois", "Yes, he joined with Joseph Smith", "No, because presidents were barred from membership"], correctAnswer: "No, there is no record that he was initiated",
    sourceQuestionNumber: 536, sourcePage: 64, source: "Freemasonry at a Glance, question 536, printed page 64"
  },
  {
    id: "book-537", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Besides the lion's paw, what mark was popular in some early Masonic contexts?",
    choices: ["The broad arrow", "The fleur-de-lis", "The crossed keys", "The winged sun"], correctAnswer: "The broad arrow",
    sourceQuestionNumber: 537, sourcePage: 64, source: "Freemasonry at a Glance, question 537, printed page 64"
  },
  {
    id: "book-538", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "What does the Latin motto 'Audi, vide, tace' mean?",
    choices: ["Hear, see, be silent", "Faith, hope and charity", "Wisdom, strength and beauty", "Work, pray and persevere"], correctAnswer: "Hear, see, be silent",
    sourceQuestionNumber: 538, sourcePage: 64, source: "Freemasonry at a Glance, question 538, printed page 64; Latin spelling normalized"
  },
  {
    id: "book-539", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "What is meant by the humorous expression 'Knife and Fork Degree'?",
    choices: ["Greater interest in lodge dining and social activity than in its serious work", "A degree for professional cooks", "An operative lesson in carving stone", "A ceremony belonging to the Knights Templar"], correctAnswer: "Greater interest in lodge dining and social activity than in its serious work",
    sourceQuestionNumber: 539, sourcePage: 65, source: "Freemasonry at a Glance, question 539, printed page 65; expression associated with Laurence Dermott's Ahiman Rezon"
  },
  {
    id: "book-540", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "Which English research lodge is named for the legendary Four Crowned Martyrs?",
    choices: ["Quatuor Coronati Lodge No. 2076", "Royal Alpha Lodge No. 16", "Lodge of the Nine Sisters", "African Lodge No. 459"], correctAnswer: "Quatuor Coronati Lodge No. 2076",
    sourceQuestionNumber: 540, sourcePage: 65, source: "Freemasonry at a Glance, question 540, printed page 65; martyr story treated as legend"
  },
  {
    id: "book-541", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "Which book by Edward Sylvester Ellis collected stories of Masonic fidelity and assistance in times of danger?",
    choices: ["Low Twelve", "The Man Who Would Be King", "Ahiman Rezon", "Morals and Dogma"], correctAnswer: "Low Twelve",
    sourceQuestionNumber: 541, sourcePage: 65, source: "Freemasonry at a Glance, question 541, printed page 65; author's full name supplied"
  },
  {
    id: "book-542", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "What two meanings are associated with a 'Lewis' in Masonry?",
    choices: ["A device for lifting stone and the son of a Mason", "A lodge secretary and his record book", "A square and a pair of compasses", "A traveling Mason and his passport"], correctAnswer: "A device for lifting stone and the son of a Mason",
    sourceQuestionNumber: 542, sourcePage: 65, source: "Freemasonry at a Glance, question 542, printed page 65; special age privileges vary by jurisdiction and are not generalized"
  },
  {
    id: "book-543", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "In early tavern-based lodge tradition, who was sometimes called the 'Mason's Dame'?",
    choices: ["The innkeeper's wife who served the lodge", "The wife of the Grand Master", "The senior woman in an adoption rite", "The patron saint of operative masons"], correctAnswer: "The innkeeper's wife who served the lodge",
    sourceQuestionNumber: 543, sourcePage: 65, source: "Freemasonry at a Glance, question 543, printed page 65; historical custom framed as tradition"
  },
  {
    id: "book-544", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "According to Masonic legend, why did Enoch erect two pillars?",
    choices: ["To preserve knowledge through the coming flood", "To mark the entrance to Solomon's Temple", "To support the first Grand Lodge hall", "To record the names of medieval guilds"], correctAnswer: "To preserve knowledge through the coming flood",
    sourceQuestionNumber: 544, sourcePage: 65, source: "Freemasonry at a Glance, question 544, printed page 65; explicitly identified as legend"
  },
  {
    id: "book-545", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "In some Masonic traditions, the line is a working tool associated with which office or rank?",
    choices: ["Past Master", "Entered Apprentice", "Senior Deacon", "Grand Tyler"], correctAnswer: "Past Master",
    sourceQuestionNumber: 545, sourcePage: 65, source: "Freemasonry at a Glance, question 545, printed page 65; jurisdictional scope added"
  },
  {
    id: "book-546", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Which object was reportedly worn by a Grand Master in an older Masonic custom?",
    choices: ["A silver fish", "A golden crown", "An iron key", "A wooden trowel"], correctAnswer: "A silver fish",
    sourceQuestionNumber: 546, sourcePage: 65, source: "Freemasonry at a Glance, question 546, printed page 65; narrow historical wording avoids presenting the fish as a universal emblem"
  },
  {
    id: "book-547", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "From the standpoint of regular Freemasonry, may a Roman Catholic seek Masonic membership?",
    choices: ["Yes, if he meets the jurisdiction's membership requirements", "No, every Grand Lodge bars Roman Catholics", "Only with written permission from the pope", "Only in lodges located outside the United States"], correctAnswer: "Yes, if he meets the jurisdiction's membership requirements",
    sourceQuestionNumber: 547, sourcePage: 66, source: "Freemasonry at a Glance, question 547, printed page 66; Masonic eligibility distinguished from Catholic Church discipline"
  },
  {
    id: "book-548", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "What is the Roman Catholic Church's current position on its members joining Freemasonry?",
    choices: ["Membership remains forbidden", "Membership is encouraged", "Membership is required for lay leaders", "The Church has never stated a position"], correctAnswer: "Membership remains forbidden",
    sourceQuestionNumber: 548, sourcePage: 66, source: "Freemasonry at a Glance, question 548, printed page 66; reaffirmed by the Vatican's Dicastery for the Doctrine of the Faith in 2023"
  },
  {
    id: "book-549", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "What formal documents have popes historically used to condemn Freemasonry?",
    choices: ["Papal bulls and encyclicals", "Masonic warrants", "Lodge bylaws", "Royal charters"], correctAnswer: "Papal bulls and encyclicals",
    sourceQuestionNumber: 549, sourcePage: 66, source: "Freemasonry at a Glance, question 549, printed page 66"
  },
  {
    id: "book-550", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Who issued the first papal bull against Freemasonry in 1738?",
    choices: ["Pope Clement XII", "Pope Benedict XIV", "Pope Leo XIII", "Pope Pius IX"], correctAnswer: "Pope Clement XII",
    sourceQuestionNumber: 550, sourcePage: 66, source: "Freemasonry at a Glance, question 550, printed page 66; bull In eminenti apostolatus specula is dated April 28, 1738, correcting the source's May 29 date"
  },
  {
    id: "book-551", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "Which pope issued the 1884 encyclical 'Humanum genus' against Freemasonry?",
    choices: ["Pope Leo XIII", "Pope Clement XII", "Pope Benedict XIV", "Pope Gregory XVI"], correctAnswer: "Pope Leo XIII",
    sourceQuestionNumber: 551, sourcePage: 66, source: "Freemasonry at a Glance, question 551, printed page 66; uses a major later reaffirmation instead of requiring memorization of the source's incomplete list"
  },
  {
    id: "book-552", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "What reason does the Roman Catholic Church currently give for forbidding Masonic membership?",
    choices: ["It considers Masonic principles irreconcilable with Catholic doctrine", "It limits membership to ordained priests", "It regards every lodge as a political party", "It objects only to lodge dining customs"], correctAnswer: "It considers Masonic principles irreconcilable with Catholic doctrine",
    sourceQuestionNumber: 552, sourcePage: 66, source: "Freemasonry at a Glance, question 552, printed page 66; polemical source wording replaced with the Catholic Church's official formulation"
  },
  {
    id: "book-553", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "easy",
    question: "Does regular Freemasonry officially require retaliation against the Roman Catholic Church?",
    choices: ["No", "Yes, in every jurisdiction", "Only during a papal conclave", "Only by members of the Scottish Rite"], correctAnswer: "No",
    sourceQuestionNumber: 553, sourcePage: 66, source: "Freemasonry at a Glance, question 553, printed page 66; broad historical claim narrowed to official Masonic policy"
  },
  {
    id: "book-554", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "medium",
    question: "Which prominent Scottish Rite leader wrote a reply to Pope Leo XIII's 1884 attack on Freemasonry?",
    choices: ["Albert Pike", "James Anderson", "Prince Hall", "Rudyard Kipling"], correctAnswer: "Albert Pike",
    sourceQuestionNumber: 554, sourcePage: 67, source: "Freemasonry at a Glance, question 554, printed page 67"
  },
  {
    id: "book-555", category: "Freemasonry Around the World, Masonic Facts and the Catholic Church", difficulty: "hard",
    question: "Which pair of Roman Catholic noblemen served as Grand Masters in Britain and Ireland during the 1730s?",
    choices: ["Anthony Browne, Viscount Montagu, and Benedict Barnewall, Viscount Kingsland", "Philip, Duke of Wharton, and Arthur, Duke of Wellington", "Albert Pike and Prince Hall", "James Anderson and Laurence Dermott"], correctAnswer: "Anthony Browne, Viscount Montagu, and Benedict Barnewall, Viscount Kingsland",
    sourceQuestionNumber: 555, sourcePage: 67, source: "Freemasonry at a Glance, question 555, printed page 67; titles and names clarified"
  }
];
