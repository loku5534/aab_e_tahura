const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const ProductCategories = require("./ProductCategories");

const Products = sequelize.define(
  "Products",
  {
    title: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
    },
    onDelivery: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    onCounter: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },
  {
    tableName: "products",
  }
);

Products.belongsTo(ProductCategories);

// `sequelize.define` also returns the model
console.log(Products === sequelize.models.Products); // true

module.exports = Products;
