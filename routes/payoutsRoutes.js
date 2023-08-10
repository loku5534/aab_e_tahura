const express = require("express");
const router = express.Router();
const { PayoutsController } = require("../controllers");
const Controller = PayoutsController;
const { verifyToken } = require("../middlewares/index");

router
  .post("", Controller.create)
  .put("/:id", Controller.update)
  .get("", Controller.index)
  .get("/:id", Controller.getById)
  .delete("/:id", Controller.deleteById);

module.exports = router;
