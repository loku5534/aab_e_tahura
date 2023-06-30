const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Vehicles = sequelize.define(
  "Vehicles",
  {
    brand: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    note: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "vehicles",
  }
);

// `sequelize.define` also returns the model
console.log(Vehicles === sequelize.models.Vehicles); // true

module.exports = Routes;
