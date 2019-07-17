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

async function add(scheme) {
  const id = await db("schemes").insert(scheme, "id");
  return findById(...id);
}

async function update(changes, id) {
  await db("schemes")
    .where({ id })
    .update(changes);
  return findById(id);
}

async function findSteps(id) {
  // SELECT s.id, s.scheme_name, st.step_number, st.instructions FROM
  // schemes AS s INNER JOIN steps AS st ON s.id = st.scheme_id
  return await db("schemes")
    .join("steps", "steps.scheme_id", "schemes.id")
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .where("schemes.id", id);
}

async function addStep() {}

async function remove() {}
