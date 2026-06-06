# 0428 — Scan (Running Fold)

Use the library's scan operator to emit the running sum of 1, 2, 3, 4. Uses RxJS's `scan` operator with seed 0 and addition; RxJS does not emit the seed, so it yields the running totals 1, 3, 6, 10.

## Run

    npx tsx main.ts
