const express = require("express");
const router = express.Router();

const token = require("../middleware/token.middleware");
// const validationMiddleware = require("../models/validate.model");

router.use("/api/v1", require("../controllers/personData.controller"));

module.exports = router;
