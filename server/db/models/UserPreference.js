const Sequelize = require("sequelize");
const db = require("../db");

const UserPreference = db.define("userpreference", {
  score: {
    type: Sequelize.INTEGER,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
  preferenceId: {
    type: Sequelize.INTEGER,
  },
  preferencelabelId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = UserPreference;
