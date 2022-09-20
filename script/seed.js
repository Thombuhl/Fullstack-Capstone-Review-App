'use strict';
const businessForDB = require('./test');

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

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
// const UserPreference = require("../server/db/models/UserPreference");
// const PreferenceLabel = require("../server/db/models/PreferenceLabel");

async function seed() {
    await db.sync({ force: true }); // clears db and matches models to tables
    console.log('db synced!');

    // Creating 10 Users
    const users = await Promise.all([
        User.create({ username: 'cody', password: '123' }),
        User.create({ username: 'murphy', password: '123' }),
        User.create({ username: 'thomas', password: '123' }),
        User.create({ username: 'alex', password: '123' }),
        User.create({ username: 'chloe', password: '123' }),
        User.create({ username: 'kieran', password: '123' }),
        User.create({ username: 'jack', password: '123' }),
        User.create({ username: 'will', password: '123' }),
        User.create({ username: 'eliazbeth', password: '123' }),
        User.create({ username: 'dave', password: '123' }),
    ]);

    const [cleaniness, service, authenticity, cost, overall] =
        await Promise.all([
            Preference.create({ name: 'Cleaniness' }),
            Preference.create({ name: 'Service' }),
            Preference.create({ name: 'Authenticity' }),
            Preference.create({ name: 'Cost' }),
            Preference.create({ name: 'Overall' }),
        ]);

    const [one, two, three, four, five] = await Promise.all([
        Rating.create({
            score: Math.round((Math.random() * 5 * 10) / 10),
            comment: 'This place sucks.',
        }),
        Rating.create({
            score: Math.round((Math.random() * 5 * 10) / 10),
            comment:
                'Food here is awesome.. Even the drinks are pretty good and not watered down.. There is no question about the quality, since everyone in our group absolutely loved what they ordered.',
        }),
        Rating.create({
            score: Math.round((Math.random() * 5 * 10) / 10),
            comment:
                'Literally my favorite place. No wait! Gorgeous interior! Incredible food!!! ',
        }),
        Rating.create({
            score: Math.round((Math.random() * 5 * 10) / 10),
            comment:
                'We were seated outside and left for about 15/20 minutes before someone came to take our order. The wait staff was very unorganized.',
        }),
        Rating.create({
            score: Math.round((Math.random() * 5 * 10) / 10),
            comment:
                'I like everything about this place! Yummy brunch offerings- had the lemon ricotta pancakes and they were amazing! ',
        }),
    ]);

    // Creating 5 Restaruants
    const [tupelo, carmine, wanton, grande, porta] = await Promise.all([
        Restaurant.create({
            name: 'Tupelo Honey',
            description:
                'Cuban joint with hearty classics, nonalcoholic sangrias, a BYO-alcohol policy & an island vibe.',
            address: '428 Bloomfield Ave',
            city: 'Montclair',
            state: 'NJ',
            zipCode: '07042',
        }),
        Restaurant.create({
            name: "Carmine's Italian Restaurant - Times Square",
            description:
                'Low-key eatery offering a big menu of pizza & Italian classics, plus a full bar.',
            address: '200 W 44th St',
            city: 'New York',
            state: 'NY',
            zipCode: '10036',
        }),
        Restaurant.create({
            name: 'Wonton Noodle Garden',
            description:
                'Small, simple joint serving fried rice, dumplings & other everyday Chinese eats, plus imported beer.',
            address: '56 Mott St',
            city: 'New York',
            state: 'NY',
            zipCode: '10013',
        }),
        Restaurant.create({
            name: 'La Grande Boucherie',
            description:
                'Polished French restaurant in an expansive art nouveau-style space with an elegant heated atrium.',
            address: '145 W 53rd St',
            city: 'New York',
            state: 'NY',
            zipCode: '10019',
        }),
        Restaurant.create({
            name: 'Porta',
            description:
                'Spacious & vibrant pizzeria serving Neapolitan pies, pastas, salads, cocktails & craft beer.',
            address: '135 Newark Ave',
            city: 'Jersey City',
            state: 'NJ',
            zipCode: '07302',
        }),
    ]);

    await Promise.all(
        businessForDB.map((restaurant) => Restaurant.create(restaurant))
    );

    // Generates Junction "UserPreference" table where there are 10 users each with 5 preferenceIds and preferencelabelIds. Row sum equlas 50
    users.forEach(async (user) => {
        let i = 0;
        while (i < 5) {
            await Promise.all([
                UserPreference.create({
                    score: Math.round((Math.random() * 5 * 10) / 10),
                    userId: user.id,
                    preferenceId: i + 1,
                    preferencelabelId: i + 1,
                }),
            ]);
            i++;
        }
    });

    await Promise.all([
        PreferenceLabel.create({
            name: 'Work From Home',
            userId: 3,
        }),
        PreferenceLabel.create({
            name: 'In a rush',
            userId: 2,
        }),
        PreferenceLabel.create({
            name: 'Have time',
            userId: 5,
        }),
        PreferenceLabel.create({
            name: 'Late night',
            userId: 4,
        }),
        PreferenceLabel.create({
            name: 'Early Morning',
            userId: 6,
        }),
    ]);

    one.restaurantId = tupelo.id;
    one.userId = 1;
    one.preferenceId = cleaniness.id;
    await one.save();

    two.restaurantId = carmine.id;
    two.userId = 2;
    two.preferenceId = service.id;
    await two.save();

    three.restaurantId = wanton.id;
    three.userId = 3;
    three.preferenceId = authenticity.id;
    await three.save();

    four.restaurantId = grande.id;
    four.userId = 4;
    four.preferenceId = cost.id;
    await four.save();

    five.restaurantId = porta.id;
    five.userId = 5;
    five.preferenceId = overall.id;
    await five.save();

    // date, quick, hungry, lazy, budget

    console.log(`seeded ${users.length} users`);
    console.log(`seeded successfully`);
    return {
        users: {
            cody: users[0],
            murphy: users[1],
        },
    };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
    console.log('seeding...');
    try {
        await seed();
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    } finally {
        console.log('closing db connection');
        await db.close();
        console.log('db connection closed');
    }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
    runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
