const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Routes = sequelize.define(
  "Routes",
  {
    title: {
      type: DataTypes.STRING,
    },
    startPoint: {
      type: DataTypes.STRING,
    },
    endPoint: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "routes",
  }
);

// `sequelize.define` also returns the model
console.log(Routes === sequelize.models.Routes); // true

module.exports = Routes;
