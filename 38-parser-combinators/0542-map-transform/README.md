# 0542 — Map / transform

Transform a parsed value. Using the parsimmon parser-combinator library, a digit parser (`P.regexp`) is built and its result is reshaped with the `.map` combinator — first into an integer, then doubled. Parsing the fixed input `'21'` produces `21`, which `.map` turns into `42`.

## Run

    npx tsx main.ts
