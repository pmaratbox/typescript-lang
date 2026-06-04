# 0361 — Frequency Sort

Sort [1,1,2,3,3,3] by descending frequency (ties keep first-seen order), printing `3 3 3 1 1 2`. A `Map` counts occurrences while a first-seen order array feeds a stable sort by count, then each value is re-emitted.

## Run

    npx tsx main.ts
