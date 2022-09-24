const express = require('express');
const Rating = require('../db/models/Rating');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const ratings = await Rating.findAll();
        res.json(ratings);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        let rating = await Rating.updateRating(req.body, req.params.id);
        // rating = await Rating.findByPk(rating.id);
        res.json(rating);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        let rating = await Rating.createRating(req.body);
        res.send(rating);
    } catch (ex) {
        next(ex);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await Rating.deleteRating(req.params.id);
        res.sendStatus(204);
    } catch (ex) {
        next(ex);
    }
});

module.exports = router;
