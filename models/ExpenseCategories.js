const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const ExpenseCategories = sequelize.define(
  "ExpenseCategories",
  {
    title: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    tableName: "expense_categories",
  }
);

// `sequelize.define` also returns the model
console.log(ExpenseCategories === sequelize.models.ExpenseCategories); // true

module.exports = ExpenseCategories;
