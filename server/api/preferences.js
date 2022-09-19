const express = require('express');
const router = express.Router();
const Preference = require('../db/models/Preference');

router.get('/', async (req, res, next) => {
    try {
        const allpreferences = await Preference.findAll();
        res.send(allpreferences);
    } catch (er) {
        next(er);
    }
});

module.exports = router;
