//Require dependency
const express = require('express');

//Express Router
const router = express.Router();

//Send incoming routes to specified files/
router.use('/users', require('./users'));
router.use('/restaurants', require('./restaurants'));
router.use('/ratings', require('./ratings'));
router.use('/auth', require('./auth'));
router.use('/yelp', require('./yelp'));
// router.use("/label/preflabel", require("./preflabel"));
// router.use("/user/userpref", require(".userpref"));

//Error handler
router.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

module.exports = router;
