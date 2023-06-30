const { createRouteSchema } = require("../utils/schema");
const { Routes, SubRoutes } = require("../models");

/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    let routes = await Routes.findAll();
    return res.status(200).json({
      data: routes,
    });
  } catch (error) {
    res.status(400).json({
      error: "Error while retreving the data: " + error.message,
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
    const routeId = req.params.id; // Assuming the routeId is passed as a parameter

    const route = await Routes.findOne({
      where: { id: routeId },
      include: SubRoutes, // Include the associated SubRoutes model
    });

    if (!route) {
      return res.status(404).json({
        error: "Item not found!",
      });
    }

    return res.status(200).json({
      data: route,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while retrieving the data!" + error.message,
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
    await createRouteSchema.validate(req.body); // Validate the request body against the schema
    // If the validation is successful, proceed with further logic
    let result = await Routes.create(req.body);
    return res.status(200).json({
      message: "Updated!",
      data: result,
    });
  } catch (error) {
    console.error(error); // Log the validation error for debugging
    return res.status(400).json({
      error: "Error while storing the data: " + error.message, // Provide a specific error message
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

    const route = await Routes.findByPk(id);

    if (!route) {
      return res.status(404).json({
        error: "Routes entry not found!",
      });
    }

    await createRouteSchema.validate(req.body);
    const { title, startPoint, endPoint } = req.body;

    route.title = title;
    route.startPoint = startPoint;
    route.endPoint = endPoint;
    await route.save();

    return res.status(200).json({
      message: "Routes entry updated successfully!",
      data: route,
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
    const record = await Routes.findByPk(id); // Find the record by ID
    if (!record) {
      return res.status(404).json({ error: "Item not found" });
    }
    await SubRoutes.destroy({
      where: {
        routeId: id,
      },
    });
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
