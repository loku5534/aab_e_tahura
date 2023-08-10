const express = require("express");
const router = express.Router();
const { InvoiceController } = require("../controllers");
const Controller = InvoiceController;
const { verifyToken } = require("../middlewares/index");

router
  .get("/", Controller.index)
  .post("/", Controller.create)
  .get("/:id", Controller.getById)
  .delete("/:id", Controller.deleteById);

module.exports = router;
