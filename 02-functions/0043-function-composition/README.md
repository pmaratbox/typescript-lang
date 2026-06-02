# 0043 — Function Composition

Compose `inc` (add one) and `twice` (multiply by two) into one function and apply it to `3`, so `inc(twice(3))` prints `7`. The same closure-returning `compose` as JavaScript, with the function parameters typed `(n: number) => number`. The types document that the pieces and the result all map a number to a number.

## Run

    npx tsx main.ts
