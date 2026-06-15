# 0531 — Immutable set

Uses the `immutable` (Immutable.js) `Set` persistent collection. Calling `.add(4)` on a frozen set `{1,2,3}` RETURNS A NEW set rather than mutating in place, so the new set has size `4` while the original is unchanged at size `3`.

## Run

    npx tsx main.ts
