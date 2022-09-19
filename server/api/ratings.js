const express = require("express");
const Rating = require("../db/models/Rating");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const ratings = await Rating.findAll();
    res.json(ratings);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
