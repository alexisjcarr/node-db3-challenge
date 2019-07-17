const knex = require("knex");

const dbConfig = require("../knexfile").development;

module.exports = knex(dbConfig);
