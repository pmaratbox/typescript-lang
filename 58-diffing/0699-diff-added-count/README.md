# 0699 — Count added lines

Diff two fixed line-lists `A=[apple,banana,cherry]` and `B=[apple,blueberry,cherry,date]` with [jsdiff](https://github.com/kpdecker/jsdiff), TypeScript's standard text-diffing library, via `diffLines`. Each returned change part carries an `added`/`removed` flag; the parts flagged `added` (here `blueberry` and `date`) are collected and counted, printing `2` — the number of ADDED lines.

## Run

    npx tsx main.ts
