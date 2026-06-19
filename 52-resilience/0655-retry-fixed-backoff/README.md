# 0655 — Fixed backoff

Uses the real [`p-retry`](https://github.com/sindresorhus/p-retry) library with a **fixed backoff** strategy: a constant delay between attempts (`factor: 1` so the wait never grows, and `minTimeout === maxTimeout` so each wait is identical). A shared counter scripts the failure sequence — the operation fails twice then succeeds — and `p-retry` re-invokes the function until it resolves. The printed total attempt count (`3`) comes from the library actually retrying. Delays are pinned to ~1ms so the count stays deterministic and the test runs instantly.

## Run

    npx tsx main.ts
