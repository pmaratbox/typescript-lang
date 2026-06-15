# 0530 — Immutable map

Uses Immutable.js's persistent `Map`. Calling `.set('b', 2)` returns a brand-new map containing the added key; the original map is left unchanged. We print the new map's keys (sorted, space-joined) and then the original's keys to demonstrate that the update did not mutate the source.

## Run

    npx tsx main.ts
