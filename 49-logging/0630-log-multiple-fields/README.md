# 0630 — Log multiple fields

Emit an INFO record with the message `request` and two structured fields — `method=GET` (string) and `status=200` (int) — using the [pino](https://github.com/pinojs/pino) structured logger. Pino is configured with `base: null` and `timestamp: false` and writes NDJSON to an in-memory stream, so the captured record has a deterministic shape (no timestamp). The captured JSON is parsed and printed as a normalized `level|message` line with each structured field appended sorted by key as `|key=value` — string values without quotes, ints as-is.

## Run

    npx tsx main.ts
