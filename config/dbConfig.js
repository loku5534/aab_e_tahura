/**
 * 🟢
 */
const { Sequelize } = require("sequelize");
require("dotenv").config();

const DB = {
  DB_NAME: process.env.DB_NAME ?? "water_system",
  DB_HOST: process.env.DB_HOST ?? "localhost",
  DB_USER: process.env.DB_USER ?? "root",
  DB_PASS: process.env.DB_PASS ?? "",
  DB_TYPE: process.env.DB_TYPE ?? "mysql",
};

console.log(DB);

const sequelize = new Sequelize(DB.DB_NAME, DB.DB_USER, DB.DB_PASS, {
  host: DB.DB_HOST,
  dialect: DB.DB_TYPE,
  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = sequelize;
