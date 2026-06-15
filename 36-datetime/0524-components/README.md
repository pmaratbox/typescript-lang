# 0524 — Date components

Uses the Luxon `DateTime` library to parse the fixed ISO date `2026-06-15` in UTC with `DateTime.fromISO`, then extracts the calendar components via the library's `.year`, `.month`, and `.day` accessors and prints each on its own line. The values are produced by the library, not hardcoded, and operate on a fixed instant in a fixed UTC zone.

## Run

    npx tsx main.ts
