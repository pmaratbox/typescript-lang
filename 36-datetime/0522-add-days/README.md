# 0522 — Add days

Using the Luxon date/time library, parse the fixed date `2026-06-15` in UTC and add a 10-day duration with `DateTime.plus({ days: 10 })`, then format the result as an ISO date. The arithmetic is computed by the library, never from the current time.

## Run

    npx tsx main.ts
