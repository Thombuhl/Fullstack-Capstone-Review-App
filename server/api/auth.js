//Require dependency
const express = require('express');

//Express Router
const router = express.Router();

const User = require('../db/models/User');
const UserPreference = require('../db/models/UserPreference');

router.post('/login', async (req, res, next) => {
    try {
        res.send({ token: await User.authenticate(req.body) });
    } catch (err) {
        next(err);
    }
});

router.post('/signup', async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        let i = 0;
        while (i < 5) {
            await Promise.all([
                UserPreference.create({
                    score: 3,
                    userId: user.id,
                    preferenceId: i + 1,
                }),
            ]);
            i++;
        }
        res.send({ token: await user.generateToken() });
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(401).send('User already exists');
        } else {
            next(err);
        }
    }
});

router.get('/me', async (req, res, next) => {
    try {
        res.send(await User.findByToken(req.headers.authorization));
    } catch (ex) {
        next(ex);
    }
});

module.exports = router;
