const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/userpreference', require('./userpreference'));

router.use((req, res, next) => {
    const error = new Error('Not Found -_-');
    error.status = 404;
    next(error);
});
