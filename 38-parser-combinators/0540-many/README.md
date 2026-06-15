# 0540 — Many (repetition)

Uses the Parsimmon parser-combinator library. The `.many()` combinator repeats an underlying parser zero or more times, collecting every match into an array. Here we build `P.string('a').many()` and run it on the fixed input `'aaaa'`; the combinator consumes each `'a'` in turn, and we print the length of the resulting array (the number of repetitions parsed).

## Run

    npx tsx main.ts
