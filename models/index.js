const User = require('./User');
const Subject = require('./Subject');
const ToDo = require('./ToDo');
const Notes = require('./Notes');
const StudyGroup = require('./StudyGroup');

// User.belongsTo(Subject, {
//   foreignKey: 'user_id'
// });

// Subject.hasMany(User, {
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

// StudyGroup.belongsToMany(User, {
//   through: {
//     model: Subject
//   },
// });


module.exports = { User, Notes, StudyGroup, Subject, ToDo };
