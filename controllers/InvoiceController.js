const { Op } = require("sequelize");
const { Invoices, Products, PurchasedItems } = require("../models");
const { createInvoiceSchema } = require("../utils/schema");

/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    let invoices = await Invoices.findAll({ include: PurchasedItems });
    return res.status(200).json({
      data: invoices,
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
    let invoice = await Invoices.findByPk(id, { include: PurchasedItems });
    return res.status(200).json({
      data: invoice,
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
    let { orderItems } = req.body;
    //Create Invoice
    await createInvoiceSchema.validate(req.body);
    let invoice = await Invoices.create(req.body);
    //Created Purchased Items
    let itemsToAdd = [];
    orderItems.forEach((product) => {
      let tempItem = {
        invoiceId: invoice.id,
        image: product.image,
        itemName: product.title,
        unitPrice: product.price,
        quantity: product.quantity,
        productId: product.id,
      };
      itemsToAdd.push(tempItem);
    });
    await PurchasedItems.bulkCreate(itemsToAdd);
    //Fetch Invoice with Purchased Items
    let newInvoice = await Invoices.findByPk(invoice.id, {
      include: PurchasedItems,
    });
    return res.status(200).json({
      message: "Invoice created successfully!",
      data: newInvoice,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
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
    const record = await Invoices.findByPk(id);
    if (!record) {
      return res.status(404).json({ error: "Invoice not found!" });
    }

    await record.destroy(); // Delete the record

    return res.status(200).json({
      message: "Invoice deleted successfully",
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