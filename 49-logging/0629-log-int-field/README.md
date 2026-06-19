# 0629 — Log an integer field

Emit an INFO record with the message `processed` and one integer structured field `count=5` using the [pino](https://github.com/pinojs/pino) structured logger. Pino is configured with `base: null` and `timestamp: false` and writes NDJSON to an in-memory stream, so each captured record has a deterministic shape (no timestamp). The captured JSON is parsed and printed as a normalized `level|message` line followed by each field sorted by key as `|key=value`; the integer value is printed as-is.

## Run

    npx tsx main.ts
