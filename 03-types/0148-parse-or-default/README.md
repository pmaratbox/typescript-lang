# 0148 — Parse or Default

Parse "42" to 42 and "x" (invalid) to a default 0, printing `42 0`. `Number.parseInt` plus a `Number.isNaN` guard falls back to a default on invalid input.

## Run

    npx tsx main.ts
