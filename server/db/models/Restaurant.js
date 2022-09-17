const Sequelize = require("sequelize");
const db = require("../db");

const Restaurant = db.define("restaurant", {
  name: {
    type: Sequelize.STRING,
    // unique: true,
    // allowNull: false
  },
  description: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  zipcode: {
    type: Sequelize.STRING,
  },
  imgUrl: {
    type: Sequelize.TEXT,
  },
});

module.exports = Restaurant;
