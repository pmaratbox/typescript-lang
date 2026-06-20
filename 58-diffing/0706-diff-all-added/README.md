# 0706 — All lines added

Diff an EMPTY line-list `A=[]` against `B=[x,y]` with [jsdiff](https://github.com/kpdecker/jsdiff), TypeScript's standard text-diffing library, via `diffLines`. Since the source is empty, every line of `B` appears in an `added`-flagged change part; collecting those lines and counting them prints `2` — every line is an addition.

## Run

    npx tsx main.ts
