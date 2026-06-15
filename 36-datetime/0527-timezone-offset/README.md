# 0527 — Timezone offset

Using Luxon's `DateTime`, parse the fixed UTC instant `2026-06-15T12:00:00Z`, then `setZone` to a fixed `UTC+5` offset (not a named timezone, so no OS tzdata is required). The library shifts the wall-clock time and reports the resulting local hour: `17`.

## Run

    npx tsx main.ts
