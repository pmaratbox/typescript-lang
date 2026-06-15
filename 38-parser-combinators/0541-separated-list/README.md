# 0541 — Separated list

Uses the Parsimmon parser-combinator library. The `.sepBy()` combinator parses zero or more occurrences of an underlying parser separated by a delimiter parser, collecting the matches into an array. Here we build `integer.sepBy(P.string(','))` from an integer parser and run it on the fixed input `'1,2,3'`; the combinator yields `[1, 2, 3]`, which we sum and print.

## Run

    npx tsx main.ts
