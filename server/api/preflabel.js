const express = require('express');
const router = express.Router();
const PreferenceLabel = require('../db/models/PreferenceLabel');

router.get('/allLabels', async (req, res, next) => {
    try {
        const preferenceLabels = await PreferenceLabel.findAll();
        res.send(preferenceLabels);
    } catch (er) {
        next(er);
    }
});

module.exports = router;
