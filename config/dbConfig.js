/**
 * 🟢
 */
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("water_system", "root", "", {
  host: "localhost",
  dialect: "mysql",
  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = sequelize;
