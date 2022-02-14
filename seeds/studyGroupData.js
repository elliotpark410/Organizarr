const { StudyGroup } = require('../models');

const studyGroupData = [
  {
    url: 'https://meet.google.com/evm-okdf-ttj',
    date: '02/14/2022',
    time: '9:00pm',
    studyPreference:"active",
    subject_name: "Web Dev",
    user_id: 1,
  },
  {
    url: 'https://meet.google.com/evm-okdf-ttj',
    date: '02/15/2022',
    time: '8:00pm',
    studyPreference:"quiet",
    subject_name: "Nursing",
    user_id: 2,
  },
  {
    url: 'https://meet.google.com/evm-okdf-ttj',
    date: '02/16/2022',
    time: '7:00am',
    studyPreference:"singing",
    subject_name: "Math",
    user_id: 3,
  },
  {
    url: 'https://meet.google.com/evm-okdf-ttj',
    date: '02/17/2022',
    time: '1:00am',
    studyPreference:"collabortive",
    subject_name: "Biology",
    user_id: 4,
  },
  
];

const seedStudyGroup = () => StudyGroup.bulkCreate(studyGroupData);

module.exports = seedStudyGroup;
