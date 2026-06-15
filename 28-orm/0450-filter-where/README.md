# 0450 — Filter with where

Define a `users(id, name, age)` model with Drizzle ORM over an in-memory libSQL/SQLite database, insert three rows through `db.insert().values()`, then query the rows matching a condition with `db.select().from(users).where(gte(users.age, 30))` ordered by `asc(users.id)`. Uses Drizzle ORM's query builder and the `@libsql/client` driver.

## Run

    npx tsx main.ts
