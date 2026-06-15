# 0538 — Sequence

Uses Parsimmon's `P.seq` combinator to run two parsers one after another: `P.string('a')` THEN `P.string('b')`. The sequence yields a tuple of both matched results, which we combine back into a single string with `.map`. Parsing the fixed input `ab` therefore prints `ab`.

## Run

    npx tsx main.ts
