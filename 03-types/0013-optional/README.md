# 0013 — Optional

Hold one value that is present (`42`) and one that is absent, then print each
with a fallback of `-1` when absent. The type `number | null` makes absence
explicit in the type system, and `??` (nullish coalescing) supplies the
fallback.

## Run

    npx tsx main.ts
