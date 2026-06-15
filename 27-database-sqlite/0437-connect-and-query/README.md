# 0437 — Connect & query

Open an in-memory SQLite database and run a single query. This lesson uses the built-in `node:sqlite` driver (`DatabaseSync`), opens a `:memory:` database, prepares the statement `select 42`, fetches the single row with `get()`, and prints the integer result.

## Run

    npx tsx main.ts
