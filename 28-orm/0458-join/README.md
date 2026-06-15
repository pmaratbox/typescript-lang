# 0458 — Join

Join two models/tables. This lesson uses Drizzle ORM over an in-memory SQLite database (via `@libsql/client`'s `createClient({ url: ':memory:' })`). It defines `users` and `posts` tables with `sqliteTable`, inserts rows with `db.insert(...).values(...)`, then joins posts to their users with the query-builder API `db.select(...).from(posts).innerJoin(users, eq(posts.userId, users.id))` ordered by name then title, printing `name title` for each row.

## Run

    npx tsx main.ts
