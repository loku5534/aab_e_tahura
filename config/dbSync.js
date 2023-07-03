const sequelize = require("./dbConfig");
const {
  auth,
  User,
  Staff,
  Routes,
  SubRoutes,
  Vehicles,
  Customers,
} = require("../models");

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Models synced with the database");
  })
  .catch((error) => {
    console.error("Error syncing models with the database:", error);
  });
