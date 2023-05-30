const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
SALT_WORK_FACTOR = 10;

const authSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
    },
  },
  { timestamps: true }
);

authSchema.pre("save", function (next) {
  var auth = this;

  // only hash the password if it has been modified (or is new)
  if (!auth.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(auth.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      auth.password = hash;
      next();
    });
  });
});

authSchema.methods.comparePassword = async function (candidatePassword, cb) {
  const passwordMatch = await bcrypt.compare(candidatePassword, this.password);
  if (passwordMatch) {
    console.log("Password matches!");
  } else {
    console.log("Password mismatch!");
  }
  return passwordMatch;
};

const auth = mongoose.model("auth", authSchema);

module.exports = auth;
