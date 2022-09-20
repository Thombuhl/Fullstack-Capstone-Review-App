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
