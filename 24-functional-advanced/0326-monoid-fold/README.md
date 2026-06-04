# 0326 — Monoid Fold

Fold lists under two monoids: string concat ["a","b","c"]->"abc" and integer sum [1,2,3]->6, printing `abc 6`. A `Monoid<T>` interface pairs an identity with a combine operation reused by a single generic fold.

## Run

    npx tsx main.ts
