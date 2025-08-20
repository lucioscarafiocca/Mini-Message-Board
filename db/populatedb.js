#! /usr/bin/env node

const { Client } = require("pg")

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  name VARCHAR ( 255 ),
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (name,message) 
VALUES
  ('Bryan', 'Hello!'),
  ('Jhonny', 'Doing Great!');
`

async function main() {
  console.log("seeding...")
  const client = new Client({
    connectionString: "postgresql://gaiden:juilop123@localhost:5432/messages",
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log("done")
}

main()
