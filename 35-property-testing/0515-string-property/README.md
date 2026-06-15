# 0515 — String property

Uses [fast-check](https://github.com/dubzzz/fast-check), the property-based
testing library for JavaScript/TypeScript, run programmatically (not via a test
runner). The `fc.string()` arbitrary generates random strings, and
`fc.property` defines the property that `(s + s).length === 2 * s.length`.
`fc.assert` exercises the property over 100 generated cases and throws if any
case fails; when all pass we print `passed`.

## Run

    npx tsx main.ts
