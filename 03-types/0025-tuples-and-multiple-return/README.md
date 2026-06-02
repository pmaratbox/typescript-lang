# 0025 — Tuples & Multiple Return

Return both the smaller and larger of `3` and `7` from one function, unpacking the pair to print `min: 3` and `max: 7`. TypeScript adds a fixed-length *tuple type* `[number, number]` to annotate the returned array; it is erased at runtime, leaving the same array destructuring as JavaScript. Tuple slots can be labelled (`[lo: number, hi: number]`) for documentation.

## Run

    npx tsx main.ts
