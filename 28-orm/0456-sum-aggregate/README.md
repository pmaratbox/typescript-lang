# 0456 — Sum aggregate

Sum a column via the query API. This lesson uses Drizzle ORM over an in-memory SQLite database (via `@libsql/client`'s `createClient({ url: ':memory:' })`). It defines a `users` table with `sqliteTable`, inserts three rows with `db.insert(users).values(...)`, then computes the total of the `age` column using Drizzle's `sum()` aggregate helper inside `db.select({ total: sum(users.age) }).from(users)` and prints the result.

## Run

    npx tsx main.ts
