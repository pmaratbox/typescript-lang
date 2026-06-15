# 0443 — Order by & limit

Sort descending and take the top rows. This lesson uses the built-in `node:sqlite` driver (`DatabaseSync`), opens a `:memory:` database, creates a `scores` table, inserts values with a prepared parameterized statement, then runs `select value from scores order by value desc limit 3` and prints each value on its own line.

## Run

    npx tsx main.ts
