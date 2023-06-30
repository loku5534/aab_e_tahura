const express = require("express");
const router = express.Router();
const { SubRoutesController } = require("../controllers");
const { verifyToken } = require("../middlewares/index");

router
  .post("", SubRoutesController.create)
  .put("/:id", SubRoutesController.update)
  .delete("/:id", SubRoutesController.deleteById);

module.exports = router;
