const Sequelize = require("sequelize");
const db = require("../db");

const Preference = db.define("preference", {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Preference;
