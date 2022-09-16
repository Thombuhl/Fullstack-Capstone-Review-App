const Sequelize = require("sequelize");
const db = require("../db");

const PreferenceLabel = db.define("preferencelabel", {
  name: {
    type: Sequelize.STRING,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = PreferenceLabel;
