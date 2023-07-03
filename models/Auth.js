const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const bcrypt = require("bcrypt");

const auth = sequelize.define(
  "auth",
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
  },
  {
    tableName: "auths",
  }
);

// Instance method to encrypt the password before saving
auth.beforeSave(async (auth) => {
  if (auth.changed("password")) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(auth.password, saltRounds);
    auth.password = hashedPassword;
  }
});

// Instance method to compare the password during login
auth.prototype.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Instance method example
auth.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Static method example
auth.findByEmail = async function (email) {
  return auth.findOne({ where: { email } });
};

// `sequelize.define` also returns the model
console.log(auth === sequelize.models.auth); // true

module.exports = auth;
