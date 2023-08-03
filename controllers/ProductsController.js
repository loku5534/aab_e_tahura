const { Products } = require("../models");
const { createProductSchema } = require("../utils/schema");

/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    let products = await Products.findAll();
    return res.status(200).json({
      data: products,
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
    let product = await Products.findByPk(id);
    return res.status(200).json({
      data: product,
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
    await createProductSchema.validate(req.body);
    let product = await Products.create(req.body);
    return res.status(200).json({
      message: "Product successfully created!",
      data: product,
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
    const product = await Products.findByPk(id);

    if (!product) {
      return res.status(404).json({
        error: "Product entry not found!",
      });
    }
    await createProductSchema.validate(req.body);

    Object.assign(product, req.body);

    await product.save();

    return res.status(200).json({
      message: "Product entry updated successfully!",
      data: product,
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
    const record = await Products.findByPk(id);
    if (!record) {
      return res.status(404).json({ error: "Product not found!" });
    }

    await record.destroy(); // Delete the record

    return res.status(200).json({
      message: "Product deleted successfully",
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
