//Require dependency.
const Sequelize = require("sequelize");
const pkg = require("../../package.json");

//Grab databaseName from the package.json "name" key.
const databaseName = pkg.name;

//Prevent seeder logging in terminal.
const config = {
  logging: false,
};

// initialize app/postgres db
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);
module.exports = db;
