# 0445 — Transactions

Demonstrate real transaction control using the built-in `node:sqlite` driver (`DatabaseSync`) against a `:memory:` database. The lesson creates a `t(n)` table, then runs one transaction that inserts `1` and `2` and `COMMIT`s, and a second transaction that inserts `3` and `ROLLBACK`s. A final `select n from t order by n` prints each surviving value, showing that the committed rows remain while the rolled-back `3` is gone.

## Run

    npx tsx main.ts
