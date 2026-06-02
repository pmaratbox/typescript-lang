# 0035 — Ranges & Slicing

From the list `[10, 20, 30, 40, 50]`, take the sub-sequence at indices 1 through 4 (exclusive) and print `slice: 20 30 40`. The same `slice(1, 4)` as JavaScript, returning a new `number[]` over the half-open range. The element type is known at compile time, but the bounds are not — out-of-range indices are simply clamped at runtime, as in JavaScript.

## Run

    npx tsx main.ts
