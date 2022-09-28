const express = require('express');
const router = express.Router();
const {
    models: { UserPreference, User },
} = require('../db/');

router.get('/', async (req, res, next) => {
    try {
        console.log('\n asdfasd \n');
        const userPreferences = await UserPreference.findAll({
            include: [User],
        });
        res.json(userPreferences);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
