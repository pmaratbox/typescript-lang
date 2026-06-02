# 0020 — Pattern Matching

Match `n` against the literal patterns `1` and `2` with a wildcard fallback, mapping `1`, `2`, and `5` to `one`, `two`, and `many`. This is the same `switch` as the JavaScript version once types are erased; the `: string` return annotation is checked at compile time. TypeScript narrows the type inside each `case` but, like JS, has no destructuring pattern-match.

## Run

    npx tsx main.ts
