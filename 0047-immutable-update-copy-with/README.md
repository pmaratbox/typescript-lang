# 0047 — Immutable Update (Copy-with)

Make a copy of the point `(1, 2)` with its `x` changed to `9`, leaving the original intact, and print `original: (1, 2)` then `updated: (9, 2)`. The same spread as JavaScript, typed as `Point`. `readonly` fields are still copyable — `{ ...p1, x: 9 }` produces a new `Point` while the compiler forbids mutating the originals in place.

## Run

    npx tsx main.ts
