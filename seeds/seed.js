const sequelize = require('../config/connection');

// Referencing all models
// const { User } = require('../models/user');
// const { ToDo } = require('../models/toDo');
// const { Subject } = require('../models/subject');
// const { StudyGroup} = require('../models/studyGroup');
// const { Notes } = require('../models/notes');

// Referencing all seed files
const userData = require('./userData');
const toDoData = require('./toDoData');
const subjectData = require('./subjectData');
const studyGroupData = require('./studyGroupData');
const notesData = require('./notesData');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: false });

    await userData();
    console.log('user data seeded');

    await toDoData();
    console.log('todo data seeded');

    await subjectData();
    console.log('subject data seeded');

    await studyGroupData();
    console.log('study group data seeded');
    
    await notesData();
    console.log('notes data seeded');
  
    process.exit(0);
  } catch (err) { 
    console.log(err);
  }
};

seedDatabase();