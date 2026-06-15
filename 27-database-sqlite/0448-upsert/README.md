# 0448 — Upsert

Create an `inv(item text primary key, qty integer)` table in an in-memory SQLite database, insert `apple` with qty 5, then upsert `apple` and `banana` using `insert ... on conflict(item) do update set qty = qty + excluded.qty` so the existing apple accumulates while banana is inserted fresh, then `select item, qty from inv order by item` and print each as `item qty`. Uses Node's built-in `node:sqlite` `DatabaseSync` driver.

## Run

    npx tsx main.ts
