# 0537 — Parse an integer

Uses the Parsimmon parser-combinator library. `P.regexp(/[0-9]+/)` is a combinator that matches a run of one or more digit characters, and `.map(Number)` transforms the matched substring into an integer. We run the parser on the fixed input `'42'` and print the resulting value.

## Run

    npx tsx main.ts
