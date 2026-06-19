# 0628 — Log a string field

Use the [`pino`](https://github.com/pinojs/pino) structured logger to emit one INFO record with the message `login` and a single structured string field `user=alice`. The logger is configured with `base: null` and `timestamp: false` and writes JSON to an in-memory stream (no real timestamp). We parse the captured JSON and print a normalized line: `level|message` followed by each field sorted by key as `|key=value`.

## Run

    npx tsx main.ts
