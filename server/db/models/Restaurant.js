const Sequelize = require('sequelize');
const db = require('../db');
const { faker } = require('@faker-js/faker');

const Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
    },
    alias: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.TEXT,
        defaultValue: faker.lorem.paragraph(),
    },
    imgUrl: {
        type: Sequelize.TEXT,
    },
    latitude: {
        type: Sequelize.DECIMAL,
    },
    longitude: {
        type: Sequelize.DECIMAL,
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

    fullAddress: {
        type: Sequelize.VIRTUAL,
        get: function () {
            return `${this.address}, ${this.city}, ${this.state} ${this.zipCode}`;
        },
    },
});

module.exports = Restaurant;
