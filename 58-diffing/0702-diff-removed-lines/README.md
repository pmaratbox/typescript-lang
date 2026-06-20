# 0702 — Removed line content

Diff two fixed line-lists `A=[apple,banana,cherry]` and `B=[apple,blueberry,cherry,date]` with [jsdiff](https://github.com/kpdecker/jsdiff), TypeScript's standard text-diffing library, via `diffLines`. Each returned change part carries an `added`/`removed` flag; the parts flagged `removed` are collected in source (`A`) order and comma-joined, printing `banana` — the line present in `A` but absent from `B`.

## Run

    npx tsx main.ts
