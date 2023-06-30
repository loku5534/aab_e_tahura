const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Routes = require("./Routes");

const SubRoutes = sequelize.define(
  "SubRoutes",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    routeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "sub_routes",
  }
);

// SubRoutes.belongsTo(Routes, {
//   foreignKey: "routeId",
// });

// `sequelize.define` also returns the model
console.log(SubRoutes === sequelize.models.SubRoutes); // true

module.exports = SubRoutes;
