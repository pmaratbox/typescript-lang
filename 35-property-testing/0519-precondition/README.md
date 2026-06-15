# 0519 — Precondition / filter

Uses the fast-check property-testing library. A precondition is expressed with the generator's `.filter` combinator so only positive integers are generated, then `fc.property` asserts `n + 1 > n` across 100 generated inputs via `fc.assert`.

## Run

    npx tsx main.ts
