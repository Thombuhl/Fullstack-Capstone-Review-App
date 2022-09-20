const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;
const axios = require("axios");

router.get("/", async (req, res, next) => {
  try {
    const result = (
      await axios.get(
        "https://api.yelp.com/v3/businesses/cuban-petes-montclair/reviews",
        {
          headers: {
            Authorization:
              "Bearer KFOoSXNXF6gVBGySjwIxCWsgktD48w7OznAG2KIH0QRgLXF1IEw893XZyl_sTxESxxcd4yOFRFnszi_q5hEDvwQ8X5kl72rlRvoHPuM5w4D8HSmz746qgRaCEuUlY3Yx",
          },
        }
      )
    ).data;
    let reviews = result.reviews?.map((review) => review[0]);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
