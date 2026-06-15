# 0454 — Delete a row

Remove a persisted entity with Drizzle ORM's `db.delete(users).where(eq(users.id, 1))` query builder, targeting the `users(id, name, age)` `sqliteTable` model. The remaining rows are read back with `db.select().from(users).orderBy(asc(users.id))` and each name is printed. Runs against an in-memory SQLite database via `@libsql/client`'s `createClient({ url: ':memory:' })`.

## Run

    npx tsx main.ts
