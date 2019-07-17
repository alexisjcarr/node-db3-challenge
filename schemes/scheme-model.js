const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

async function find() {
  return await db("schemes");
}

async function findById(id) {}

async function findSteps() {}

async function add() {}

async function addStep() {}

async function update() {}

async function remove() {}
