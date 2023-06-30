const express = require("express");
const router = express.Router();
const { VehiclesController } = require("../controllers");
const { verifyToken } = require("../middlewares/index");

router
  .post("", VehiclesController.create)
  .put("/:id", VehiclesController.update)
  .get("", VehiclesController.index)
  .get("/:id", VehiclesController.getById)
  .delete("/:id", VehiclesController.deleteById);

module.exports = router;
