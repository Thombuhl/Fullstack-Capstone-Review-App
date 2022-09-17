const Sequelize = require("sequelize");
const db = require("../db");

const Rating = db.define("rating", {
  score: {
    type: Sequelize.DECIMAL,
  },
  comment: {
    type: Sequelize.STRING,
  },
});
module.exports = Rating;
