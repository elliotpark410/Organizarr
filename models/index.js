const User = require('./User');
const Subject = require('./Subject');
const ToDo = require('./ToDo');
const Notes = require('./Notes');
const StudyGroup = require('./StudyGroup');

StudyGroup.belongsTo(Subject, {
  foreignKey: 'subject_id'
});

Subject.hasMany(StudyGroup,{
  foreignKey: 'subject_id'
});


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
