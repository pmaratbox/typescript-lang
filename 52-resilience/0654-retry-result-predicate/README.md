# 0654 — Retry on result

Uses the real [`p-retry`](https://github.com/sindresorhus/p-retry) library to retry based on the *returned value* rather than a business exception. The operation returns an incrementing counter, and a result predicate (`result < 3`) decides whether the value is acceptable; while it is too low we signal `p-retry` to retry, and on the third attempt the operation returns `3`, which passes the predicate. The accepted result (`3`) is what `p-retry` resolves to after actually re-invoking the operation. Delays are set to zero so the run is deterministic and instant.

## Run

    npx tsx main.ts
