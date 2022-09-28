const express = require('express');
const router = express.Router();
const {
    models: { UserPreference, User, Preference },
} = require('../db/');

router.get('/', async (req, res, next) => {
    try {
        const userPreferences = await UserPreference.findAll({
            include: [Preference],
        });
        res.json(userPreferences);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
