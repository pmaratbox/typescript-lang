# 0626 — Log at warn level

Use the real [`pino`](https://github.com/pinojs/pino) structured-logging library to emit a WARN record with the message `low disk`. The logger is configured with `base: null` and `timestamp: false` and writes JSON to an in-memory stream, so no real timestamp leaks into the output. We parse the captured JSON record, normalize pino's numeric level (`40` -> `warn`), and print the normalized line `warn|low disk`.

## Run

    npx tsx main.ts
