const express = require('express');
const Preference = require('../db/models/Preference');
const router = express.Router();
const User = require('../db/models/User');
const UserPreference = require('../db/models/UserPreference');

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll({
            // explicitly select only the id and username fields - even though
            // users' passwords are encrypted, it won't help if we just
            // send everything to anyone who asks!
            attributes: ['id', 'username'],
            include: [UserPreference],
        });
        res.json(users);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
