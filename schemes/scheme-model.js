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

async function findById(id) {
  return (
    (await db("schemes")
      .where({ id })
      .first()) || null
  );
}

async function findSteps() {}

async function add() {}

async function addStep() {}

async function update() {}

async function remove() {}
