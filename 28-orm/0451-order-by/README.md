# 0451 — Order by

Sort results by a column. This lesson uses Drizzle ORM over an in-memory SQLite database (via `@libsql/client`'s `createClient({ url: ':memory:' })`). It defines a `users` table with `sqliteTable`, inserts three rows with `db.insert(users).values(...)`, then queries every user ordered by age ascending using the query-builder API `db.select().from(users).orderBy(asc(users.age))` and prints each name.

## Run

    npx tsx main.ts
