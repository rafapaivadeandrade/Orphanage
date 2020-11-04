const express = require("express");
const validateDto = require("../src/middleware/validatedto");
const dto = require("../src/dto/dev");
const multer = require("multer");
const multerConfig = require("./config/multer");
const routes = express.Router();
const upload = multer(multerConfig);
const orphanagesController = require("../src/controllers/orphanagesController");
routes.get("/orphanages", orphanagesController.index);
routes.get("/orphanages/:orphanage_id", orphanagesController.show);
routes.post(
  "/orphanages",
  upload.array("images"),
  validateDto(dto),
  orphanagesController.create
);
module.exports = routes;
