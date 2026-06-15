# 0455 — Count

Count rows via the query API. This lesson uses Drizzle ORM over an in-memory SQLite database (via `@libsql/client`'s `createClient({ url: ':memory:' })`). It defines a `users` table with `sqliteTable`, inserts three rows with `db.insert(users).values(...)`, then counts all users using the query-builder aggregate `count()` in `db.select({ total: count() }).from(users)` and prints the total (3).

## Run

    npx tsx main.ts
