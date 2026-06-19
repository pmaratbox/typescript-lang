# 0651 — Retries exhausted

Use [p-retry](https://github.com/sindresorhus/p-retry) to wrap an operation that always throws. We configure `retries: 2` (3 total attempts) with zero backoff (`minTimeout`/`maxTimeout` 0). Since every attempt fails, p-retry exhausts its budget and rejects with the last error; we catch it and print `failed`.

## Run

    npx tsx main.ts
