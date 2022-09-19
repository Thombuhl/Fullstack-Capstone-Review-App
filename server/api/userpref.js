const express = require('express');
const User = require('../db/models/User');
const router = express.Router();
const UserPreference = require('../db/models/UserPreference');
const isLoggedIn = require('../middleware/isLoggedIn');

router.put('/preferences', isLoggedIn, async (req, res, next) => {
    const logged_in_user_id = req.user.id;
    const prefId = req.body.payload.prefId;
    const pref_score = req.body.payload.prefVale;
    try {
        const userpref = await UserPreference.findOne({
            where: {
                userId: logged_in_user_id,
                preferenceId: prefId,
            },
        });

        await userpref.update({ score: pref_score });
        res.send('updated');
    } catch (err) {
        next(err);
    }
});

router.get('/preferences', isLoggedIn, async (req, res, next) => {
    const logged_in_user_id = req.user.id;
    try {
        const userPreferences = await UserPreference.findAll({
            where: {
                userId: logged_in_user_id,
            },
        });
        const returnPayload = [];
        userPreferences.forEach((pref) => {
            returnPayload.push({
                preferenceId: pref.preferenceId,
                score: pref.score,
            });
        });

        res.send(returnPayload);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
