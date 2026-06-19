# 0632 — Level filtering

Set the [pino](https://github.com/pinojs/pino) logger's minimum level to `warn`, then emit an INFO record `hidden` (suppressed by the level filter and never written) followed by a WARN record `visible`. Pino is configured with `base: null` and `timestamp: false` and writes NDJSON to an in-memory stream, so only the warn record is captured. The captured JSON is parsed and printed as a normalized `level|message` line — pino's numeric level `40` maps to `warn`.

## Run

    npx tsx main.ts
