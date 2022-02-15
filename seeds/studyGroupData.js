const { StudyGroup } = require('../models');

const studyGroupData = [
  {
    url: 'https://meet.google.com/evm-okdf-ttj',
    date: '02/14/2022',
    time: '9:00pm',
    studyPreference:"Quiet w/ minimal talking",
    subject_id: 1,
  },
  {
    url: 'https://meet.google.com/evm-okdf-ttj',
    date: '02/15/2022',
    time: '8:00pm',
    studyPreference:"Open to anything!",
    subject_id: 2,
  },  
];

const seedStudyGroup = () => StudyGroup.bulkCreate(studyGroupData);

module.exports = seedStudyGroup;
