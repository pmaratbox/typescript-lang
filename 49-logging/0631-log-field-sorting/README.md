# 0631 — Deterministic field order

Emit an INFO record `metric` with two structured fields supplied in NON-alphabetical order (`zeta=2` then `alpha=1`) using the [pino](https://github.com/pinojs/pino) structured logger. Pino is configured with `base: null` and `timestamp: false` and writes NDJSON to an in-memory stream, so the captured record has a deterministic, timestamp-free shape. The captured JSON is parsed and the fields are sorted by key before printing, producing the normalized line `info|metric|alpha=1|zeta=2`.

## Run

    npx tsx main.ts
