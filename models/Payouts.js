const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Staff = require("./Staff");

const Payouts = sequelize.define(
  "Payouts",
  {
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
    },
    hasBonus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    bonusAmount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    hasDeduction: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deductionAmount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    note: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "payouts",
  }
);

Staff.hasMany(Payouts, {
  onDelete: "CASCADE",
  foreignKey: "staffId",
});
Payouts.belongsTo(Staff, { foreignKey: "staffId" });

// `sequelize.define` also returns the model
console.log(Payouts === sequelize.models.Payouts); // true

module.exports = Payouts;
