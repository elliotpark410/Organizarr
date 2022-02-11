const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Subject extends Model {}

Subject.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    // studyGroup_ID:{
    //     type: DataTypes.INTEGER,
    //     references:{
    //         model: "study_group",
    //         key: "id",
    //     },
    // },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'subject',
  },
);

module.exports = Subject;