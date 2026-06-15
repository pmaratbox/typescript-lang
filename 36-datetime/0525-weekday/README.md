# 0525 — Weekday

Uses the Luxon `DateTime` library to parse the fixed ISO date `2026-06-15` in UTC with `DateTime.fromISO`, then reads its ISO weekday number through the `.weekday` accessor, which is already ISO-numbered (Monday=1 .. Sunday=7). `2026-06-15` is a Monday, so the library yields `1`. The result is computed by the library on a fixed instant in a fixed UTC zone, not hardcoded.

## Run

    npx tsx main.ts
