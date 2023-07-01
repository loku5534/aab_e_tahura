const { Expenses } = require("../models");
const { createExpenseSchema } = require("../utils/schema");
/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    let expenses = await Expenses.findAll();
    return res.status(200).json({
      data: expenses,
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
    let expense = await Expenses.findByPk(id);
    return res.status(200).json({
      data: expense,
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
    await createExpenseSchema.validate(req.body);
    let expense = await Expenses.create(req.body);
    return res.status(200).json({
      data: expense,
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
    const expense = await Expenses.findByPk(id);

    if (!expense) {
      return res.status(404).json({
        error: "Expense entry not found!",
      });
    }
    await createExpenseSchema.validate(req.body);

    Object.assign(expense, req.body);

    await expense.save();

    return res.status(200).json({
      message: "Expense entry updated successfully!",
      data: expense,
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
    const record = await Expenses.findByPk(id); // Find the record by ID
    if (!record) {
      return res.status(404).json({ error: "Item not found!" });
    }

    await record.destroy(); // Delete the record

    return res.status(200).json({
      message: "Item deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while deleting the record: " + error.message,
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
