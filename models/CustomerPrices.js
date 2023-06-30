const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const bcrypt = require("bcrypt");

const CustomerPrices = sequelize.define(
  "CustomerPrices",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "customer_prices",
  }
);

// `sequelize.define` also returns the model
console.log(CustomerPrices === sequelize.models.CustomerPrices); // true

module.exports = CustomerPrices;
