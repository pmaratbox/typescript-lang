# 0059 — Group By

Group the words `one`, `two`, `three` by their length and print each length with its words, in ascending order of length: `3:[one,two] 5:[three]`. The same bucketing typed as `Record<number, string[]>`; keys come back as strings from `Object.keys`, so they are mapped to `Number` before the numeric sort.

## Run

    npx tsx main.ts
