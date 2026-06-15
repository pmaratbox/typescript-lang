# 0523 — Difference in days

Using Luxon's `DateTime`, parse two fixed ISO dates in UTC and compute the difference between them with `diff(..., 'days')`, reading the `.days` field of the resulting `Duration`. The number of whole days between 2026-06-15 and 2026-07-15 is `30`.

## Run

    npx tsx main.ts
