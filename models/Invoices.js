const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const PurchasedItems = require("./PurchasedItems");

const Invoices = sequelize.define(
  "Invoices", // Remove the extra space here
  {
    invoiceNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    customerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    customerType: {
      type: DataTypes.STRING,
      defaultValue: "walking-customer",
      allowNull: false,
    },
    invoiceDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoiceTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtotalAmount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    totalAmount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    discountAmount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    notes: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "paid",
    },
    paymentMethod: {
      type: DataTypes.STRING,
      defaultValue: "cash",
    },
  },
  {
    tableName: "invoices",
  }
);

Invoices.hasMany(PurchasedItems, { foreignKey: "invoiceId" }); // Use the correct foreign key "invoice_id"

// `sequelize.define` also returns the model
console.log(Invoices === sequelize.models.Invoices); // true

module.exports = Invoices;
