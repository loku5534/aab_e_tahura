const { Staff, User } = require("../models");
const { staffSchema } = require("../utils/schema");

/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    let staff = await Staff.findAll({ include: User });
    return res.status(200).json({
      data: staff,
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
    let staff = await Staff.findByPk(id, { include: User });
    return res.status(200).json({
      data: staff,
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
    await staffSchema.validate(req.body);
    let staff = await Staff.create(req.body);
    staff = await Staff.findByPk(staff.id, { include: User });
    return res.status(200).json({
      message: "Staff successfully created!",
      data: staff,
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
    const staff = await Staff.findByPk(id);

    if (!staff) {
      return res.status(404).json({
        error: "Staff entry not found!",
      });
    }
    await staffSchema.validate(req.body);

    Object.assign(staff, req.body);

    await staff.save();

    let staffUpdated = await Staff.findByPk(id, { include: User });

    return res.status(200).json({
      message: "Staff entry updated successfully!",
      data: staffUpdated,
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
    const record = await Staff.findByPk(id);
    if (!record) {
      return res.status(404).json({ error: "Staff not found!" });
    }

    await record.destroy(); // Delete the record

    return res.status(200).json({
      message: "Staff deleted successfully",
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
