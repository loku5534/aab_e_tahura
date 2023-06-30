const { SubRoutes } = require("../models");
const { createSubRouteSchema } = require("../utils/schema");

/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
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
    await createSubRouteSchema.validate(req.body);
    let subRoute = await SubRoutes.create(req.body);
    return res.status(200).json({
      data: subRoute,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while retrieving the data: " + error.message,
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

    const subRoute = await SubRoutes.findByPk(id);

    if (!subRoute) {
      return res.status(404).json({
        error: "Sub Routes entry not found!",
      });
    }

    await createSubRouteSchema.validate(req.body);

    const { title } = req.body;

    subRoute.title = title;

    await subRoute.save();

    return res.status(200).json({
      message: "Sub Routes entry updated successfully!",
      data: subRoute,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error whilte updating the item: " + error.message,
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
    const record = await SubRoutes.findByPk(id); // Find the record by ID
    if (!record) {
      return res.status(404).json({ error: "Item not found" });
    }

    await record.destroy(); // Delete the record

    return res.status(200).json({
      message: "Item deleted successfully",
    });
  } catch (error) {
    console.error(error); // Log the deletion error for debugging
    return res.status(400).json({
      error: "Error while deleting: " + error.message,
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
