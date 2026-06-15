# 0441 — Aggregate functions

Compute summary statistics over a column using SQL aggregate functions. This lesson uses the built-in `node:sqlite` driver (`DatabaseSync`), opens a `:memory:` database, creates a `t(amount)` table, inserts the values 10, 20, 30, 40, 50, then runs `select count(*), sum(amount), min(amount), max(amount) from t` and prints the four results, each on its own line.

## Run

    npx tsx main.ts
