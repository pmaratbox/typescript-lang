# 0528 — Unix timestamp

Uses the Luxon `DateTime` library to parse the fixed UTC instant `2026-06-15T00:00:00Z` with `DateTime.fromISO`, then computes its Unix timestamp (epoch seconds) via the `.toSeconds()` method. The result is computed by the library on a fixed instant in a fixed UTC zone, not hardcoded.

## Run

    npx tsx main.ts
