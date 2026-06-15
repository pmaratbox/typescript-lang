# 0452 — Limit

Take only the top N rows. This lesson uses the Drizzle ORM query builder over an in-memory SQLite database via `@libsql/client`. It defines a `users` table with `sqliteTable`/`integer`/`text`, inserts three rows with `db.insert().values()`, then queries with `db.select().from(users).orderBy(desc(users.age)).limit(2)` to take the two oldest users and prints each name.

## Run

    npx tsx main.ts
