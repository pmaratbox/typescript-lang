# 0539 — Alternative

Uses the Parsimmon parser-combinator library. The `P.alt` combinator tries each alternative parser in order and succeeds with the first one that matches; here it chooses between the string literals `'cat'` and `'dog'` (built with `P.string`). Parsing the input `'dog'` selects the second alternative and yields `dog`.

## Run

    npx tsx main.ts
