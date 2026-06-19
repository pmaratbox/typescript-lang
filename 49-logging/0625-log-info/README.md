# 0625 — Log at info level

Emit an INFO record with the message `service started` using the [pino](https://github.com/pinojs/pino) structured logger. Pino is configured with `base: null` and `timestamp: false` and writes NDJSON to an in-memory stream, so each captured record has a deterministic shape (no timestamp). The captured JSON is parsed and printed as a normalized `level|message` line — pino's numeric level `30` maps to `info`.

## Run

    npx tsx main.ts
