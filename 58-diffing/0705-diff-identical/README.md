# 0705 — Identical inputs

Diff a fixed line-list `A=[apple,banana,cherry]` against itself (`A -> A`) with [jsdiff](https://github.com/kpdecker/jsdiff), TypeScript's standard text-diffing library, via `diffLines`. Because both inputs are identical, no change part is flagged `added` or `removed`, so both collected lists are empty and the program prints `0 0` — the added and removed counts.

## Run

    npx tsx main.ts
