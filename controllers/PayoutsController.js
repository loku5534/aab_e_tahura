const { Payouts } = require("../models");
const { createPayoutSchema } = require("../utils/schema");

/**
 * Get All
 * @param {*} req
 * @param {*} res
 */
const index = async (req, res) => {
  try {
    let payouts = await Payouts.findAll({
      include: { all: true, nested: true },
    });
    return res.status(200).json({
      data: payouts,
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
    let payout = await Payouts.findByPk(id, {
      include: { all: true, nested: true },
    });
    return res.status(200).json({
      data: payout,
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
    await createPayoutSchema.validate(req.body);
    let payout = await Payouts.create(req.body);
    payout = await Payouts.findByPk(payout.id, {
      include: { all: true, nested: true },
    });
    return res.status(200).json({
      message: "Payout successfully created!",
      data: payout,
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
    const payout = await Payouts.findByPk(id);

    if (!payout) {
      return res.status(404).json({
        error: "Payout entry not found!",
      });
    }
    await createPayoutSchema.validate(req.body);

    Object.assign(payout, req.body);

    await payout.save();

    let payoutUpdated = await Payouts.findByPk(id, {
      include: { all: true, nested: true },
    });

    return res.status(200).json({
      message: "Payout entry updated successfully!",
      data: payoutUpdated,
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
    const record = await Payouts.findByPk(id);
    if (!record) {
      return res.status(404).json({ error: "Payout not found!" });
    }

    await record.destroy(); // Delete the record

    return res.status(200).json({
      message: "Payout deleted successfully",
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
