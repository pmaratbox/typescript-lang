# 0690 — Flat map

Uses [ramda](https://ramdajs.com/)'s `R.chain` to flat-map `[1,2,3]` with a pure lambda `x -> [x, x*10]`, mapping each element to a list and flattening the results one level into a single array, then comma-joining.

## Run

    npx tsx main.ts
