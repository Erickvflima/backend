const express = require("express");
const router = express.Router();
require("dotenv").config();
const { getList, postList, getChanel } = require("../models/personData.model");

router.get("/", async (req, res, next) => {
  try {
    const response = await getList();

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});
router.get("/channel", async (req, res, next) => {
  try {
    const response = await getChanel();

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const response = await postList(req.body);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
