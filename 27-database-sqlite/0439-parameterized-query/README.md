# 0439 — Parameterized query

This lesson creates an in-memory SQLite database with a `users` table, inserts three rows, and runs `select name from users where id = ?` with a bound parameter value of `2`. The parameter is passed to `get()` so it is safely bound by the driver rather than interpolated into the SQL string. It uses Node's built-in `node:sqlite` (`DatabaseSync`) driver.

## Run

    npx tsx main.ts
