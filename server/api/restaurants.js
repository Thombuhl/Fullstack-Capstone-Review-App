const express = require('express');
const router = express.Router();
const Restaurant = require('../db/models/Restaurant');
const Rating = require('../db/models/Rating');

router.get('/', async (req, res, next) => {
    try {
        const restaurants = await Restaurant.findAll({
            include: { model: Rating },
        });
        res.json(restaurants);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
