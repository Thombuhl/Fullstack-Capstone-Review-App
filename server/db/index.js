//this is the access point for all things database related!
const db = require("./db");

const User = require("./models/User");
const UserPreference = require("./models/UserPreference");
const PreferenceLabel = require("./models/PreferenceLabel");
const Restaurant = require("./models/Restaurant");
const Rating = require("./models/Rating");
const Preference = require("./models/Preference");

//Associations
User.hasMany(UserPreference);
User.hasMany(PreferenceLabel);

Rating.belongsTo(Restaurant);
Restaurant.hasMany(Rating);

Preference.hasMany(Rating);
Preference.hasMany(UserPreference);

Rating.belongsTo(User);
Rating.belongsTo(Preference);
// Rating.hasMany(Preference);

module.exports = {
  db,
  models: {
    User,
    UserPreference,
    PreferenceLabel,
    Restaurant,
    Rating,
    Preference,
  },
};
