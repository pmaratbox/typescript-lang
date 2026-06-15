# 0440 — Update & delete

Modify and remove rows, then read the result. This lesson creates a `users` table in an in-memory SQLite database, inserts three rows, updates one row's name with `update ... where`, deletes another with `delete ... where`, then selects the remaining rows ordered by `id` and prints each as `id name`. Uses Node's built-in `node:sqlite` `DatabaseSync` driver with prepared statements.

## Run

    npx tsx main.ts
