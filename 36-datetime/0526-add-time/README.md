# 0526 — Add time

Using the Luxon date/time library, parse the fixed datetime `2026-06-15T10:00` in UTC and add a 90-minute duration with `DateTime.plus({ minutes: 90 })`, then format the result as `HH:mm`. The arithmetic is computed by the library, never from the current time.

## Run

    npx tsx main.ts
