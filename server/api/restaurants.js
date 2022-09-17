const express = require("express");
const router = express.Router();
const Restaurant = require("../db/models/Restaurant");

router.get("/", async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll({});
    res.json(restaurants);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
