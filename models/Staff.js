const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const User = require("./User");

const Staff = sequelize.define(
  "Staff",
  {
    cnic: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.BIGINT,
    },
    phone: {
      type: DataTypes.STRING,
    },
    employmentType: {
      type: DataTypes.STRING,
    },
    joiningDate: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    leavingDate: {
      type: DataTypes.STRING,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "staff",
  }
);

User.hasOne(Staff, {
  onDelete: "CASCADE",
});
Staff.belongsTo(User);

// `sequelize.define` also returns the model
console.log(Staff === sequelize.models.Staff); // true

module.exports = Staff;
