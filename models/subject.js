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
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model: "user",
            key: "id",
        },
    },
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