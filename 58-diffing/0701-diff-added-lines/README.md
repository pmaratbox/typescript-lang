# 0701 — Added line content

Diff `A=[apple,banana,cherry]` against `B=[apple,blueberry,cherry,date]` with [diff (jsdiff)](https://github.com/kpdecker/jsdiff), TypeScript's standard diff library. `diffLines` returns LCS-determined change parts; the parts flagged `added` carry the lines present only in `B`. Collecting those lines in document (B) order and comma-joining them yields `blueberry,date`.

## Run

    npx tsx main.ts
