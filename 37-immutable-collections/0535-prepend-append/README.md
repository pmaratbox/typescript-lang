# 0535 — Prepend & append

Uses Immutable.js's persistent `List`: `unshift(1)` prepends and `push(4)` appends, each returning a brand-new list while the original `List([2, 3])` stays unchanged. Chaining them yields the final list, printed space-joined.

## Run

    npx tsx main.ts
