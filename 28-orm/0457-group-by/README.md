# 0457 — Group by

Aggregate per group. This lesson uses Drizzle ORM over an in-memory SQLite database (via `@libsql/client`'s `createClient({ url: ':memory:' })`). It defines a `products` table with `sqliteTable`, inserts three rows with `db.insert(products).values(...)`, then groups by category and sums each group's price using the query-builder API `db.select(...).from(products).groupBy(products.category).orderBy(asc(products.category))` with a `sql` aggregate expression, printing `category sum` per row.

## Run

    npx tsx main.ts
