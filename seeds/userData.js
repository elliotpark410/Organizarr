const { User } = require('../models');

const userData = [
  {
    name: 'Joshua Meza',
    email: 'joshua@gmail.com',
    password: 'crossCountry4ever',
  },
  {
    name: 'Leslie Patino',
    email: 'leslie@gmail.com',
    password: 'volleyball4ever',
  },
  {
    name: 'Elliot Park',
    email: 'elliot@gmail.com',
    password: 'cereal4ever',
  },
  {
    name: 'Jerome Chenette',
    email: 'jerome@gmail.com',
    password: 'cats4ever',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
