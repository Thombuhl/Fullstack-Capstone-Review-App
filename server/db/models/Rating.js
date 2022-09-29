const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');
const Preference = require('./Preference');

const Rating = db.define('rating', {
    score: {
        type: Sequelize.DECIMAL,
    },
    comment: {
        type: Sequelize.STRING,
    },
});

Rating.fetchAll = async function () {
    const ratings = await Rating.findAll({
        include: [
            {
                model: Preference,
            },
            {
                model: User,
            },
        ],
    });

    return ratings;
};

Rating.updateRating = async function (ratingUpdate, id) {
    let rating = await this.findByPk(id * 1);
    rating = await rating.update(ratingUpdate);
    rating = await this.findByPk(rating.id, {
        include: [
            {
                model: Preference,
            },
            {
                model: User,
            },
        ],
    });
    return rating;
};
Rating.createRating = async function (rating) {
    let createdRating = await Rating.create(rating);
    createdRating = await this.findByPk(createdRating.id, {
        include: [
            {
                model: Preference,
            },
            {
                model: User,
            },
        ],
    });
    return createdRating;
};

Rating.deleteRating = async function (id) {
    const rating = await this.findByPk(id * 1);
    await rating.destroy();
    return;
};

module.exports = Rating;
