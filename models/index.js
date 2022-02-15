const User = require('./user');
const Subject = require('./subject');
const ToDo = require('./toDo');
const Notes = require('./notes');
const StudyGroup = require('./studyGroup');

StudyGroup.belongsTo(Subject, {
  foreignKey: 'subject_id'
});

Subject.hasMany(StudyGroup,{
  foreignKey: 'subject_id'
});


// StudyGroup.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// User.hasMany(StudyGroup,{
//   foreignKey: 'user_id'
// });


ToDo.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(ToDo, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Notes.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Notes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = { User, Notes, StudyGroup, Subject, ToDo };
