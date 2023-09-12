const { Expenses, Invoices } = require("../models");

/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    let expense = await Expenses.sum("amount");
    let invoice = await Invoices.sum("totalAmount");
    let profit = invoice - expense;
    return res.status(200).json({
      expense: expense,
      profit: profit,
      debit: 0,
      credit: 0,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while retrieving the data: " + error.message,
    });
  }
};

module.exports = {
  index,
};
