const router = require("express").Router();
const {
  models: { Restaurant, Rating, User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const ratings = await Rating.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      //   attributes: ["id", "username"],
      include: [
        {
          model: Restaurant,
        },
        {
          model: User,
        },
      ],
    });
    res.json(ratings);
  } catch (err) {
    next(err);
  }
});
