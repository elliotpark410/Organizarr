const sequelize = require('../config/connection');

// Referencing all models
const { User } = require('../models/user');
const { ToDo } = require('../models/toDo');
const { Subject } = require('../models/subject');
const { StudyGroup} = require('../models/studyGroup');
const { Notes } = require('../models/notes');

// Referencing all seed files
const userData = require('./userData');
const toDoData = require('./toDoData');
const subjectData = require('./subjectData');
const studyGroupData = require('./studyGroupData');
const notesData = require('./notesData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
}

seedDatabase();