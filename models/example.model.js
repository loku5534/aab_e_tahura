const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Model = sequelize.define(
  "Model",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    startPoint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endPoint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "<table_name>",
  }
);

// `sequelize.define` also returns the model
console.log(Model === sequelize.models.Model); // true

module.exports = Routes;
