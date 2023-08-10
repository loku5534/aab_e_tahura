const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const PurchasedItems = sequelize.define(
  "PurchasedItems",
  {
    invoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    itemName: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    unitPrice: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    tableName: "purchased_items",
  }
);

// `sequelize.define` also returns the model
console.log(PurchasedItems === sequelize.models.PurchasedItems); // true

module.exports = PurchasedItems;
