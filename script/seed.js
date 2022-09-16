"use strict";

const {
  db,
  models: { User },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
const UserPreference = require("../server/db/models/UserPreference");
const PreferenceLabel = require("../server/db/models/PreferenceLabel");

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating 10 Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
    User.create({ username: "thomas", password: "123" }),
    User.create({ username: "alex", password: "123" }),
    User.create({ username: "chloe", password: "123" }),
    User.create({ username: "kieran", password: "123" }),
    User.create({ username: "jack", password: "123" }),
    User.create({ username: "will", password: "123" }),
    User.create({ username: "eliazbeth", password: "123" }),
    User.create({ username: "dave", password: "123" }),
  ]);

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
      name: "Cleaniness",
      userId: 3,
    }),
    PreferenceLabel.create({
      name: "Authentic",
      userId: 2,
    }),
    PreferenceLabel.create({
      name: "Cost",
      userId: 5,
    }),
    PreferenceLabel.create({
      name: "Service",
      userId: 4,
    }),
    PreferenceLabel.create({
      name: "Food",
      userId: 6,
    }),
  ]);

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
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
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
