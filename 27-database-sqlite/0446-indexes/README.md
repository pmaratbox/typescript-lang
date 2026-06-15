# 0446 — Indexes

This lesson uses the built-in `node:sqlite` driver (`DatabaseSync`), opens a `:memory:` database, creates a `products` table, inserts rows with a prepared parameterized statement, then executes `create index idx_sku on products(sku)` to build an index. It runs `select price from products where sku = ?` bound to `'B'` (a lookup that the index can serve) and prints the resulting price.

## Run

    npx tsx main.ts
