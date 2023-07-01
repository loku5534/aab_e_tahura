const express = require("express");
const router = express.Router();
const { ExpensesController } = require("../controllers");
const { verifyToken } = require("../middlewares/index");

router
  .post("", ExpensesController.create)
  .put("/:id", ExpensesController.update)
  .get("", ExpensesController.index)
  .get("/:id", ExpensesController.getById)
  .delete("/:id", ExpensesController.deleteById);

module.exports = router;
