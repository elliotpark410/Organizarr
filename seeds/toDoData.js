const { ToDo } = require('../models');

const todoData = [
  {
    description: 'buy cereal and whole organic milk',
    user_id: 3,
  },
  {
    description: 'buy Haagen Daz cofee',
    user_id: 3,
  },
  {
    description: 'run 100 miles to be fit for girlfriend',
    user_id: 1,
  },
  {
    description: 'pick up younger brother at school',
    user_id: 1,
  },
  {
    description: 'play volleyball at huntington beach until my legs fall off',
    user_id: 2,
  },
  {
    description: 'hack Bootcamp Spot grades module and give everyone an A+',
    user_id: 4,
  },
];

const seedTodos = () => ToDo.bulkCreate(todoData);

module.exports = seedTodos;
