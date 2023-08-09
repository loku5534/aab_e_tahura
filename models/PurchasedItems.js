const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const PurchasedItems = sequelize.define(
  "PurchasedItems",
  {
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_name: {
      type: DataTypes.STRING
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    unit_price: {
      type: DataTypes.DECIMAL
    }
  },
  {
    tableName: "purchased_items",
  }
);

// `sequelize.define` also returns the model
console.log(PurchasedItems === sequelize.models.PurchasedItems); // true

module.exports = PurchasedItems;
