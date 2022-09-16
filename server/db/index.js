//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const UserPreference = require("./models/UserPreference");
const PreferenceLabel = require("./models/PreferenceLabel");
//associations could go here!
User.hasMany(UserPreference);
User.hasMany(PreferenceLabel);

module.exports = {
  db,
  models: {
    User,
  },
};
