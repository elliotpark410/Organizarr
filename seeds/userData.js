const { User } = require('../models');

const userData = [
  {
    name: 'Joshua Meza',
    email: 'joshua@gmail.com',
    password: 'crossCountry4ever',
    subject: 'Web Development',
  },
  {
    name: 'Leslie Patino',
    email: 'leslie@gmail.com',
    password: 'volleyball4ever',
    subject: 'Web Development',
  },
  {
    name: 'Elliot Park',
    email: 'elliot@gmail.com',
    password: 'cereal4ever',
    subject: 'Spanish',
  },
  {
    name: 'Jerome Chenette',
    email: 'jerome@gmail.com',
    password: 'cats4ever',
    subject: 'Cybersecurity',
  },
];

// function seedUsers() {
//   for (let i =0; i < userData.length; i++) {
//     User.create(userData[i])
//   }
// }

// seedUsers();
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
