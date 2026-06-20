# 0700 — Count removed lines

Diff two fixed line-lists with [jsdiff](https://github.com/kpdecker/jsdiff)'s `diffLines`, TypeScript's standard text-diffing library. It returns an array of change parts, each flagged `added`, `removed`, or unchanged; an LCS algorithm decides which lines are equal. Going from `A=[apple,banana,cherry]` to `B=[apple,blueberry,cherry,date]`, only `banana` is removed, so we collect the removed lines and print their count -> `1`.

## Run

    npx tsx main.ts
