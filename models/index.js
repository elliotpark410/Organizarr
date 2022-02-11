const User = require('./user');
const Subject = require('./subject');
const ToDo = require('./toDo');
const Notes = require('./notes');
const StudyGroup = require('./studyGroup');



User.hasOne(Subject, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Subject.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(ToDo, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

ToDo.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Notes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Notes.belongsTo(User, {
  foreignKey: 'user_id'
});

StudyGroup.belongsToMany(User, {
  through: {
    model: Subject
  },
});



module.exports = { User, Notes, StudyGroup, Subject, ToDo };
