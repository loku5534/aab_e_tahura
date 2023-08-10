const { Op } = require("sequelize");
const { PurchasedItems } = require("../models");
const { createPurchasedItemSchema } = require("../utils/schema");

/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    let items = await PurchasedItems.findAll();
    return res.status(200).json({
      data: items,
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
    let item = await PurchasedItems.findByPk(id);
    return res.status(200).json({
      data: item,
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
    await createPurchasedItemSchema.validate(req.body);
    let item = await PurchasedItems.create(req.body);
    return res.status(200).json({
      message: "Item successfully created!",
      data: item,
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
    const item = await PurchasedItems.findByPk(id);

    if (!item) {
      return res.status(404).json({
        error: "Item entry not found!",
      });
    }
    await createPurchasedItemSchema.validate(req.body);

    Object.assign(item, req.body);

    await item.save();

    return res.status(200).json({
      message: "Item entry updated successfully!",
      data: item,
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
    const record = await PurchasedItems.findByPk(id);
    if (!record) {
      return res.status(404).json({ error: "Item not found!" });
    }

    await record.destroy(); // Delete the record

    return res.status(200).json({
      message: "Item deleted successfully",
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
