const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const SubRoutes = require("./SubRoutes");

const Routes = sequelize.define(
  "Routes",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    startPoint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endPoint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "routes",
  }
);

// Define association with SubRoutes
Routes.hasMany(SubRoutes, { foreignKey: "routeId" });

// `sequelize.define` also returns the model
console.log(Routes === sequelize.models.Routes); // true

module.exports = Routes;
