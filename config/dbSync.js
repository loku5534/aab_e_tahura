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
  .sync({ force: false })
  .then(async () => {
    let productCategory = await ProductCategories.findOne({
      where: { title: "Uncategorized" },
    });
    if (productCategory === null) {
      await ProductCategories.create({ title: "Uncategorized" });
      console.log("Default product category inserted");
    }
    let expenseCategory = await ExpenseCategories.findOne({
      where: { title: "Uncategorized" },
    });
    if (expenseCategory === null) {
      await ExpenseCategories.create({ title: "Uncategorized" });
      console.log("Default expense category inserted");
    }
    console.log("Models synced with the database");
  })
  .catch((error) => {
    console.error("Error syncing models with the database:", error);
  });
