# 0442 — Group by

Aggregate amounts per group. This lesson uses the built-in `node:sqlite` driver (`DatabaseSync`), opens a `:memory:` database, creates a `sales` table, inserts rows with a prepared parameterized statement, then runs `select category, sum(amount) from sales group by category order by category` and prints each result row as `category sum` (space-separated).

## Run

    npx tsx main.ts
