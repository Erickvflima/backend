const express = require("express");
const router = express.Router();
require("dotenv").config();
const getList = require("../models/personData.model");

router.get("/", async (req, res, next) => {
  try {
    const response = await getList();

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
