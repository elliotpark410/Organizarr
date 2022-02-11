const { StudyGroup } = require('../models');

const studyGroupData = [
  {
    url: 'www.blank.com',
    time: 'Aug 4th, 2022 9:00pm',
    subject_id: 1,
    studyPreference:"active",
  },
  {
    url: 'www.zoom.com',
    time: 'Oct 5th, 2022 8:00pm',
    subject_id: 2,
    studyPreference:"quite",
  },
  {
    url: 'www.googlechat.com',
    time: 'Aug 4th, 2022 7:00am',
    subject_id: 3,
    studyPreference:"singing",
  },
  {
    url: 'www.skype.com',
    time: 'Aug 6th, 3546 1:00am',
    subject_id: 4,
    studyPreference:"colabortive",
  },
  
];

const seedStudyGroup = () => StudyGroup.bulkCreate(studyGroupData);

module.exports = seedStudyGroup;
