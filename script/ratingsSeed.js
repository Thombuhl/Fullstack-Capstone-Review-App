const {
    db,
    models: {
        User,
        Restaurant,
        Preference,
        Rating,
        UserPreference,
        PreferenceLabel,
    },
} = require('../server/db');

const { faker } = require('@faker-js/faker');

const createRandomRatings = async (numOfRating = 50) => {
    const users = await User.findAll();
    const restaurants = await Restaurant.findAll();

    for (let i = 0; i < numOfRating; i++) {
        let randPref = Math.floor(Math.random() * 5) + 1;
        let randUser = Math.floor(Math.random() * users.length);
        let randScore = Math.floor(Math.random() * 5) + 1;
        let randRest = Math.floor(Math.random() * restaurants.length);
        let randComment = faker.hacker.phrase();
        await Rating.create({
            score: randScore,
            comment: randComment,
            userId: users[randUser].id,
            restaurantId: restaurants[randRest].id,
            preferenceId: randPref,
        });
        // console.log({
        //     score: randScore,
        //     comment: randComment,
        //     userId: users[randUser].id,
        //     restaurantId: randRest,
        //     preferenceId: randPref,
        // });
    }
};

module.exports = { createRandomRatings };
