# 0518 — Multiple arguments

Uses the fast-check property-testing library. `fc.property` accepts more than one generator, so two `fc.integer()` arbitraries feed a two-argument predicate; `fc.assert` checks that `max(a, b) >= a && max(a, b) >= b` for every generated pair over 100 runs. Prints `passed`.

## Run

    npx tsx main.ts
