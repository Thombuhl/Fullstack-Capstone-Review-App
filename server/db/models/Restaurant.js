const Sequelize = require('sequelize');
const db = require('../db');

const Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
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
    zipCode: {
        type: Sequelize.STRING,
    },
    imgUrl: {
        type: Sequelize.TEXT,
    },
    fullAddress: {
        type: Sequelize.VIRTUAL,
        get: function () {
            return `${this.address}, ${this.city}, ${this.state} ${this.zipCode}`;
        },
    },
});

module.exports = Restaurant;
