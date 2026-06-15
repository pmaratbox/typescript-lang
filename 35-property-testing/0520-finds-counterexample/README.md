# 0520 — Finds a counterexample

Uses [fast-check](https://github.com/dubzzz/fast-check) to detect that a false
property fails. The `fc.integer({ min: 0, max: 1000000 })` generator produces
non-negative integers, and `fc.property` claims (falsely) that every such value
is `< 100`. Instead of `fc.assert` (which throws and prints a falsifying-example
report), we use `fc.check`, which runs the property programmatically and returns
a result object silently. Because the property is densely false, the library
finds a counterexample; we read `result.failed` and print only `found`, so no
shrink report leaks to stdout.

## Run

    npx tsx main.ts
