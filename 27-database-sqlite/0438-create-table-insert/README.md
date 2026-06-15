# 0438 — Create table & insert

Create a `users(id integer, name text)` table in an in-memory SQLite database, insert three rows with a prepared statement and bound parameters, then `select name from users order by id` and print each name on its own line. Uses Node's built-in `node:sqlite` `DatabaseSync` driver.

## Run

    npx tsx main.ts
