# 0650 — Eventual success

Uses the real [`p-retry`](https://github.com/sindresorhus/p-retry) library to retry an operation that fails once then succeeds. A shared counter scripts the failure sequence and records each attempt; `p-retry` re-invokes the function until it resolves, so the printed total attempt count (`2`) comes from the library actually retrying. Delays are set to zero so the count stays deterministic and the test runs instantly.

## Run

    npx tsx main.ts
