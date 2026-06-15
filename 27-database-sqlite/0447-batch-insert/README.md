# 0447 — Batch insert

Insert many rows efficiently using the built-in `node:sqlite` driver (`DatabaseSync`) against a `:memory:` database. The lesson creates a `t(n)` table, opens a single transaction with `begin`, then reuses one prepared `insert into t(n) values (?)` statement to add the values `1..1000`, and `commit`s. Wrapping the batch in one transaction with a reused prepared statement avoids per-row commit overhead. Finally it runs `select count(*) from t` and prints the count.

## Run

    npx tsx main.ts
