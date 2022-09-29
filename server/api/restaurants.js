const express = require('express');
const router = express.Router();
const Restaurant = require('../db/models/Restaurant');
const Rating = require('../db/models/Rating');
const User = require('../db/models/User');

router.get('/', async (req, res, next) => {
    // const property = req.body.property || {};
    try {
        const restaurants = await Restaurant.findAll({
            include: [
                {
                    model: Rating,
                    include: [User],
                },
            ],
        });
        res.json(restaurants);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
