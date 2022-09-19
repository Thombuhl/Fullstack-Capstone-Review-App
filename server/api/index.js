const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/restaurants', require('./restaurants'));
router.use('/ratings', require('./ratings'));
router.use('/preferences', require('./preferences'));
router.use('/yelp', require('./yelp'));

router.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
