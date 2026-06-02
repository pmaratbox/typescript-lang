# 0017 — Iterators

Take the numbers 1 through 5, keep the even ones, double each, and add them up — a filter, then a map, then a reduce — printing the final sum. The chain is identical to `javascript-lang`, but TypeScript tracks the element type through every step: `filter` and `map` keep it `number`, and `reduce`'s accumulator is inferred as `number` from the seed `0`, so a mismatched combine function would be a compile error. The types erase at compile time, leaving the same JavaScript.

## Run

    npx tsx main.ts
