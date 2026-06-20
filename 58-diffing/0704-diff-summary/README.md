# 0704 — Diff summary

Diff two fixed line-lists `A=[apple,banana,cherry]` and `B=[apple,blueberry,cherry,date]` with [jsdiff](https://github.com/kpdecker/jsdiff), TypeScript's standard text-diffing library, via `diffLines`. Each returned change part is flagged `added`, `removed`, or unchanged; tallying the three groups (added=`blueberry,date`, removed=`banana`, unchanged=`apple,cherry`) prints `<added> <removed> <unchanged>` space-joined as `2 1 2`.

## Run

    npx tsx main.ts
