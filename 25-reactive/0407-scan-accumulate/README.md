# 0407 — Scan (Running Fold)

Implement a scan operator that emits the running accumulation; produce the running sums of 1, 2, 3, 4. The accumulator state is captured in a closure typed with a generic `A`, so each `next` folds the value and re-emits the running total.

## Run

    npx tsx main.ts
