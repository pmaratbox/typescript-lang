# 0453 — Update a row

Modify a persisted entity with the Drizzle ORM query builder over an in-memory libSQL (`@libsql/client`) SQLite database. The `users` table is defined with `sqliteTable`/`integer`/`text`, seeded via `db.insert(...).values(...)`, and bob's age is changed with `db.update(users).set({ age: 40 }).where(eq(users.name, 'bob'))`. A final `db.select()` filtered by `gte(users.age, 35)` and ordered by `asc(users.id)` prints `name age`.

## Run

    npx tsx main.ts
