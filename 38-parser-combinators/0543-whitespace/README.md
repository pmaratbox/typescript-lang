# 0543 — Whitespace handling

Parse an integer surrounded by optional whitespace using the parsimmon parser-combinator library. The integer parser (`regexp(/[0-9]+/).map(Number)`) is wrapped with the `trim` combinator, passing `P.optWhitespace` so leading and trailing spaces in the input `'  42  '` are skipped by the combinator before and after the number.

## Run

    npx tsx main.ts
