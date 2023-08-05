const { User } = require("../models");
const { userSchema } = require("../utils/schema");

/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    let users = await User.findAll();
    return res.status(200).json({
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while retrieving the data: " + error.message,
    });
  }
};

/**
 * Get by ID
 * @param {*} req
 * @param {*} res
 */
const getById = async (req, res) => {
  try {
    const id = req.params.id;
    let user = await User.findByPk(id);
    return res.status(200).json({
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while retrieving the data: " + error.message,
    });
  }
};

/**
 * Create
 * @param {*} req
 * @param {*} res
 */
const create = async (req, res) => {
  try {
    await userSchema.validate(req.body);
    let userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists !== null) {
      return res.status(409).json({
        message: "User already exists with this email!",
      });
    }
    let user = await User.create(req.body);
    return res.status(200).json({
      message: "User successfully created!",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while storing the data: " + error.message,
    });
  }
};

/**
 * Update
 * @param {*} req
 * @param {*} res
 */
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        error: "User entry not found!",
      });
    }
    await userSchema.validate(req.body);

    Object.assign(user, req.body);

    await user.save();

    return res.status(200).json({
      message: "User entry updated successfully!",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while updating the data: " + error.message,
    });
  }
};

/**
 * Delete by Id
 * @param {*} req
 * @param {*} res
 */
const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const record = await User.findByPk(id);
    if (!record) {
      return res.status(404).json({ error: "User not found!" });
    }

    await record.destroy(); // Delete the record

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while deleting the data: " + error.message,
    });
  }
};

module.exports = {
  index,
  getById,
  create,
  update,
  deleteById,
};
