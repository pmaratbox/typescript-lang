# 0652 — Return a value

Uses the real [`p-retry`](https://github.com/sindresorhus/p-retry) library to retry an operation that fails once then resolves to the string `ok`. A shared counter scripts the failure sequence; `p-retry` re-invokes the function until it resolves and returns that resolved value, which we print (`ok`) instead of the attempt count. Delays are set to zero so the retry runs instantly and the result stays deterministic.

## Run

    npx tsx main.ts
