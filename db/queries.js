const pool = require("./pool")

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM messages")
  return rows
}

async function getUsername(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ])
  return rows
}

async function addMessage(name, msg) {
  const { rows } = await pool.query(
    "INSERT INTO messages (name,message) VALUES ($1, $2)",
    [name, msg]
  )
  return rows
}

module.exports = {
  getAllUsernames,
  getUsername,
  addMessage,
}
