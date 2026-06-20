# 0703 — Count unchanged lines

Diff two fixed line-lists `A=[apple,banana,cherry]` and `B=[apple,blueberry,cherry,date]` with [jsdiff](https://github.com/kpdecker/jsdiff), TypeScript's standard text-diffing library, via `diffLines`. Each returned change part carries `added`/`removed` flags; parts with neither flag are the equal (unchanged) lines determined by the longest-common-subsequence. Counting those lines (here `apple` and `cherry`) prints `2` — the number of UNCHANGED lines.

## Run

    npx tsx main.ts
