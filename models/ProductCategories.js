const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const ProductCategories = sequelize.define(
  "ProductCategories",
  {
    title: {
      type: DataTypes.STRING,
      unique: true
    },
  },
  {
    tableName: "product_categories",
  }
);

// `sequelize.define` also returns the model
console.log(ProductCategories === sequelize.models.ProductCategories); // true

module.exports = ProductCategories;
