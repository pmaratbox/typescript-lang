# 0688 — Group by

Uses [ramda](https://ramdajs.com/)'s `R.groupBy` to partition `[1..6]` into buckets keyed by parity (`even`/`odd`). Each element is mapped to its key by a pure classifier lambda, then the sorted keys are rendered as `key:v1,v2,...` and joined with `;`.

## Run

    npx tsx main.ts
