const express = require("express");
const router = express.Router();
const { RoutesController } = require("../controllers");
const { verifyToken } = require("../middlewares/index");

router
  .post("", RoutesController.create)
  .put("/:id", RoutesController.update)
  .get("", RoutesController.index)
  .get("/:id", RoutesController.getById)
  .delete("/:id", RoutesController.deleteById);

module.exports = router;
