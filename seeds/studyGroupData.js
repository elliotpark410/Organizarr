const { StudyGroup } = require('../models');

const studyGroupData = [
  {
    url: 'www.blank.com',
    date: '02/14/2022',
    time: '9:00pm',
    studyPreference:"active",
    subject_id: 1,
  },
  {
    url: 'www.zoom.com',
    date: '02/15/2022',
    time: '8:00pm',
    studyPreference:"quiet",
    subject_id: 2,
  },
  {
    url: 'www.googlechat.com',
    date: '02/16/2022',
    time: '7:00am',
    studyPreference:"singing",
    subject_id: 3,
  },
  {
    url: 'www.skype.com',
    date: '02/17/2022',
    time: '1:00am',
    studyPreference:"collabortive",
    subject_id: 4,
  },
  
];

const seedStudyGroup = () => StudyGroup.bulkCreate(studyGroupData);

module.exports = seedStudyGroup;
