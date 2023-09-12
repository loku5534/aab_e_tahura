const sequelize = require("./dbConfig");
const {
  auth,
  User,
  Staff,
  Routes,
  SubRoutes,
  Vehicles,
  Customers,
  ExpenseCategories,
  ProductCategories,
  Products,
  WalkingCustomers,
  Invoices,
  PurchasedItems,
} = require("../models");

sequelize
  .sync({ force: true })
  .then(async () => {
    await ProductCategories.create({ title: "Uncategorized" });
    await ExpenseCategories.create({ title: "Uncategorized" });
    console.log("Default categories inserted");
    console.log("Models synced with the database");
  })
  .catch((error) => {
    console.error("Error syncing models with the database:", error);
  });
