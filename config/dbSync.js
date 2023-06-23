const sequelize = require("./dbConfig");
const { User, Staff } = require("../models");

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Models synced with the database");
  })
  .catch((error) => {
    console.error("Error syncing models with the database:", error);
  });
