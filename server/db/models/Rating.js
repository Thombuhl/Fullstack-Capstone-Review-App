const Sequelize = require('sequelize');
const db = require('../db');

const Rating = db.define('rating', {
    score: {
        type: Sequelize.DECIMAL,
    },
    comment: {
        type: Sequelize.STRING,
    },
});

Rating.updateRating = async function (ratingReq, id) {
    let rating = await this.findByPk(id * 1);
    rating = await rating.update(ratingReq);
    return rating;
};
Rating.createRating = async function (rating) {
    return await Rating.create(rating);
};

Rating.deleteRating = async function (id) {
    const rating = await this.findByPk(id * 1);
    await rating.destroy();
    return;
};

module.exports = Rating;
