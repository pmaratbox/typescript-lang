# 0449 — Define model & insert

Define a `users(id, name, age)` model with Drizzle ORM's `sqliteTable` schema builder, insert three rows through the `db.insert(users).values(...)` query builder, then read them back with `db.select().from(users).orderBy(asc(users.id))` and print each name. Runs against an in-memory SQLite database via `@libsql/client`'s `createClient({ url: ':memory:' })`.

## Run

    npx tsx main.ts
