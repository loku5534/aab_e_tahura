const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otpGenerated: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isBan: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

// Instance method to encrypt the password before saving
User.beforeSave(async (user) => {
  if (user.changed("password")) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
  }
});

// Instance method to compare the password during login
User.prototype.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Instance method example
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Static method example
User.findByEmail = async function (email) {
  return User.findOne({ where: { email } });
};

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;
