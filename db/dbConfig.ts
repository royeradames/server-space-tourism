/* import libraries*/
const knex = require("knex");
const knexConfig = require("../knexfile");

const enviroment = process.env.DB_ENV || "development";

module.exports = knex(knexConfig[enviroment]);
