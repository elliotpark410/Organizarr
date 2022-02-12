const { Subject } = require('../models');

const subjectData = [
  {
    name: 'Web Development'
  },
  {
    name: 'Soccer'
  },
  {
    name: 'Music'
  },
  {
    name: 'birds watching'
  },
  
];

const seedSubject = () => Subject.bulkCreate(subjectData);

module.exports = seedSubject;