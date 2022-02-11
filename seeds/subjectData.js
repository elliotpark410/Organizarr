const { Subject } = require('../models');

const subjectData = [
  {
    subject_name: 'Web Development',
    users_id: 2,
    studyGroup_ID: 1,
  },
  {
    subject_name: 'Soccer',
    users_id: 3,
    studyGroup_ID: 2,
  },
  {
    subject_name: 'Music',
    users_id: 1,
    studyGroup_ID: 3,
  },
  {
    subject_name: 'birds watching',
    users_id: 4,
    studyGroup_ID: 4,
  },
  
];

const seedSubject = () => Subject.bulkCreate(subjectData);

module.exports = seedSubject;