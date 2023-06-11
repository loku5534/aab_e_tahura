const mongoose = require("mongoose");
const { string } = require("yup");

const staffSchema = new mongoose.Schema({
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
      cnic: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      salary: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      employeeType: {
        type: String,
        required: true,
      },
      joiningDate: {
        type: Date,
      },
      note: {
        type: String,
      },
});

const staffModel = mongoose.model("Staff", staffSchema);
module.exports = staffModel;
