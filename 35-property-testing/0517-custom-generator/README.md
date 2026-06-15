# 0517 — Custom generator

Uses the fast-check property-testing library. A custom generator for even integers is built with the `.map` combinator (`fc.integer().map(n => n * 2)`), then `fc.assert(fc.property(...))` checks that every generated value is even over 100 runs. Prints `passed`.

## Run

    npx tsx main.ts
