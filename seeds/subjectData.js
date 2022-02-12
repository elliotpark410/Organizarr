const { Subject } = require('../models');

const subjectData = [
  {
    subject_name: 'Web Development'
  },
  {
    subject_name: 'Soccer'
  },
  {
    subject_name: 'Music'
  },
  {
    subject_name: 'birds watching'
  },
  
];

const seedSubject = () => Subject.bulkCreate(subjectData);

module.exports = seedSubject;