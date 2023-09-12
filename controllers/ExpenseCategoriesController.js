const { ExpenseCategories } = require("../models");
const { createExpenseCategoriesSchema } = require("../utils/schema");

/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    let categories = await ExpenseCategories.findAll();
    return res.status(200).json({
      data: categories,
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
    let category = await ExpenseCategories.findByPk(id);
    return res.status(200).json({
      data: category,
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
    await createExpenseCategoriesSchema.validate(req.body);
    let categoryTitle = req.body.title;
    let category = await ExpenseCategories.findOne({
      where: { title: categoryTitle },
    });
    if (!category) {
      category = await ExpenseCategories.create(req.body);
      return res.status(200).json({
        data: category,
      });
    } else {
      return res.status(401).json({
        message: "Category already exists!",
        data: category,
      });
    }
  } catch (error) {
    console.log(error);
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
    const category = await ExpenseCategories.findByPk(id);

    if (!category) {
      return res.status(404).json({
        error: "Category entry not found!",
      });
    }
    await createExpenseCategoriesSchema.validate(req.body);

    Object.assign(category, req.body);

    await category.save();

    return res.status(200).json({
      message: "Category entry updated successfully!",
      data: category,
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
    const record = await ExpenseCategories.findByPk(id); // Find the record by ID
    if (!record) {
      return res.status(404).json({ error: "Category not found!" });
    }

    await record.destroy(); // Delete the record

    return res.status(200).json({
      message: "Category deleted successfully",
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
