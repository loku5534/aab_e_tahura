const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const User = require("./User");

const Customers = sequelize.define(
  "Customers",
  {
    //Customers' Money
    debit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.0,
    },
    //Customers' on loan
    credit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.0,
    },
    billAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.0,
    },
  },
  {
    tableName: "customers",
  }
);

Customers.belongsTo(User, {
  foreignKey: "id",
});

// `sequelize.define` also returns the model
console.log(Customers === sequelize.models.Customers); // true

module.exports = Customers;
