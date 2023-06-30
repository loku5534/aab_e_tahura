const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const ProductCategories = sequelize.define(
  "ProductCategories",
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
console.log(ProductCategories === sequelize.models.ProductCategories); // true

module.exports = ProductCategories;
