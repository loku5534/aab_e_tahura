const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Routes = require("./Routes");

const SubRoutes = sequelize.define(
  "SubRoutes",
  {
    title: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "sub_routes",
  }
);

SubRoutes.belongsTo(Routes, {
  foreignKey: "id",
});

// `sequelize.define` also returns the model
console.log(SubRoutes === sequelize.models.SubRoutes); // true

module.exports = SubRoutes;
