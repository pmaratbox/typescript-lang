# 0627 — Log at error level

Use the [pino](https://github.com/pinojs/pino) structured-logging library to emit an ERROR record with the message `boom` and no fields. Pino is configured with `base: null` and `timestamp: false` and writes JSON to an in-memory stream (no real timestamp leaks into the output). The captured JSON record is parsed, its numeric level (`50`) is normalized to `error`, and one normalized line `level|message` is printed.

## Run

    npx tsx main.ts
