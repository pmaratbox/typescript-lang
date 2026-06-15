# 0444 — Inner join

Join two tables on a key. This lesson uses the built-in `node:sqlite` driver (`DatabaseSync`), opens a `:memory:` database, creates `users` and `orders` tables, inserts rows with prepared parameterized statements, then runs `select u.name, o.item from orders o join users u on u.id = o.user_id order by u.name, o.item` and prints each result row as `name item` (space-separated).

## Run

    npx tsx main.ts
