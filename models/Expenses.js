const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

// const categories = ["Office/Place Rent", "Bills", "Fuel Expenses", "Others"];

const Expenses = sequelize.define(
  "Expenses",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0.0,
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "Expenses",
    timestamps: false,
  }
);

// `sequelize.define` also returns the model
console.log(Expenses === sequelize.models.Expenses); // true

module.exports = Expenses;
