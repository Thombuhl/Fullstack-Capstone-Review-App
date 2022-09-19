const User = require('../db/models/User');

const isLoggedIn = async (req, res, next) => {
    try {
        req.user = await User.findByToken(req.headers.authorization);
        next();
    } catch (ex) {
        next(ex);
    }
};

module.exports = isLoggedIn;
