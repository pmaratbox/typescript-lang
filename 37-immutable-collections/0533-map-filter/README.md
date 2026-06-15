# 0533 — Map and filter

Uses Immutable.js's persistent `List`: calling `filter` then `map` each returns a brand-new immutable list (keeping evens, then multiplying by 10) while the original list stays unchanged. We print the transformed result space-joined.

## Run

    npx tsx main.ts
