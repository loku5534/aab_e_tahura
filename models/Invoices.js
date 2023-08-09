const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const PurchasedItems = require("./PurchasedItems");

const Invoices = sequelize.define(
  "Invoices", // Remove the extra space here
  {
    invoice_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    customer_type: {
      type: DataTypes.STRING,
      defaultValue: 'walking-customer',
      allowNull: false,
    },
    invoice_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "paid",
    },
    payment_method: {
      type: DataTypes.STRING,
      defaultValue: "cash",
    },
  },
  {
    tableName: "invoices",
  }
);

Invoices.hasMany(PurchasedItems, { foreignKey: "invoice_id" }); // Use the correct foreign key "invoice_id"

// `sequelize.define` also returns the model
console.log(Invoices === sequelize.models.Invoices); // true

module.exports = Invoices;
