const { Model, DataTypes, DATE } = require('sequelize');

const sequelize = require('../config/connection');

class StudyGroup extends Model {}

StudyGroup.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    url:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    time:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    subject:{
        type: DataTypes.STRING,
      allowNull: false,
    },
    studyPreference:{
        type: DataTypes.STRING,
        allowNull: false, 
    },
    studyPreference:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'study_group',
  },
);

module.exports = StudyGroup;