const Sequelize = require('sequelize');
const db = require('../db');
const { faker } = require('@faker-js/faker');

const Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    alias: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.TEXT,
        defaultValue: faker.lorem.paragraph(),
        allowNull: true,
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
    rating: {
        type: Sequelize.FLOAT,
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
    price: {
        type: Sequelize.STRING,
    },
    category: {
        type: Sequelize.STRING,
    },
    categoryAlias: {
        type: Sequelize.STRING,
    },
    review_count: {
        type: Sequelize.INTEGER,
    },
    display_phone: {
        type: Sequelize.STRING,
    },
    hasDelivery: {
        type: Sequelize.BOOLEAN,
    },
    hasReservation: {
        type: Sequelize.BOOLEAN,
    },
    hasPickup: {
        type: Sequelize.BOOLEAN,
    },
});

module.exports = Restaurant;
