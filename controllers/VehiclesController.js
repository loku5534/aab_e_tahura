const { Vehicles } = require("../models");
const { createVehicleSchema } = require("../utils/schema");
/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    // Retrieve all vehicles from the database
    const vehicles = await Vehicles.findAll();

    return res.status(200).json({
      data: vehicles,
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
    const { id } = req.params;

    // Find the vehicle by id
    const vehicle = await Vehicles.findByPk(id);

    if (!vehicle) {
      return res.status(404).json({
        error: "Item not found!",
      });
    }

    return res.status(200).json({
      data: vehicle,
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
    await createVehicleSchema.validate(req.body);
    // Create a new vehicle record
    const vehicle = await Vehicles.create(req.body);

    return res.status(200).json({
      message: "Vehicle created!",
      data: vehicle,
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
    let vehicle = await Vehicles.findByPk(id);
    if (!vehicle) {
      return res.status(404).json({
        error: "Item does not exists!",
      });
    }

    Object.assign(vehicle, req.body);

    await vehicle.save();
    return res.sattus(200).json({
      message: "Vehicle updated successfully!",
      data: vehicle,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while retrieving the data: " + error.message,
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

    // Find the vehicle by ID
    const vehicle = await Vehicles.findByPk(id);

    if (!vehicle) {
      return res.status(404).json({
        error: "Vehicle not found!",
      });
    }

    // Delete the vehicle
    await vehicle.destroy();

    return res.status(200).json({
      message: "Vehicle deleted!",
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while retrieving the data: " + error.message,
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
