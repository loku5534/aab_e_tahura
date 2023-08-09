const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const WalkingCustomers = sequelize.define(
  "WalkingCustomers",
  {
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "walking_customers",
  }
);

// `sequelize.define` also returns the model
console.log(WalkingCustomers === sequelize.models.WalkingCustomers); // true

module.exports = WalkingCustomers;
