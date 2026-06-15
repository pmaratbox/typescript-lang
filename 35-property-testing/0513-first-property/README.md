# 0513 — First property

Uses [fast-check](https://github.com/dubzzz/fast-check) to check a property
over generated input. The `fc.array(fc.integer())` generator produces ~100
random integer lists, and `fc.property` asserts that reversing a list twice
yields the original. `fc.assert` runs the property programmatically (no test
runner) and throws only on a counterexample; since the property is universally
true, it returns normally and we print `passed`.

## Run

    npx tsx main.ts
