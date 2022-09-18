const express = require('express');
const User = require('../db/models/User');
const router = express.Router();
const UserPreference = require('../db/models/UserPreference');
const isLoggedIn = require('../middleware/isLoggedIn');

router.put('/', isLoggedIn, async (req, res, next) => {
    const logged_in_user_id = req.user.id;
    try {
        if (logged_in_user_id) {
        }
        const restaurants = await Restaurant.findAll({});
    } catch (err) {
        next(err);
    }
});

module.exports = router;
