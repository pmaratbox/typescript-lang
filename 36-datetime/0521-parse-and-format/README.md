# 0521 — Parse & format

Uses the Luxon `DateTime` library to parse the fixed ISO date `2026-06-15` in UTC with `DateTime.fromISO`, then formats it back to an ISO calendar date (`yyyy-MM-dd`) via `toISODate()`. The round-trip value is produced by the library, not hardcoded, and operates on a fixed instant in a fixed UTC zone.

## Run

    npx tsx main.ts
