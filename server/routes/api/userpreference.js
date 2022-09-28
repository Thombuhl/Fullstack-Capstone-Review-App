const router = require('express').Router();
const UserPreference = require('../../db/models/UserPreference');
const isLoggedIn = require('./Middleware.js/middleware');
module.exports = router;
router.get('/userpreference', isLoggedIn, async (req, res, next) => {
    const id = req.user.id;
    try {
        const userpreference = await UserPreference.findAll({
            where: {
                userId: id,
            },
        });
        res.send(userpreference);
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    const id = req.user.id;
    try {
        const userpreference = await UserPreference.findAll({
            // where: {
            //     userId: id,
            // },
        });
        res.send(userpreference);
    } catch (err) {
        next(err);
    }
});
