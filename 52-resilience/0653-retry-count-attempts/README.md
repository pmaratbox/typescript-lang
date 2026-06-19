# 0653 — Count attempts

Uses the real [`p-retry`](https://github.com/sindresorhus/p-retry) library to count total attempts when an operation never succeeds. A shared counter scripts the failure sequence by always throwing, and `p-retry` re-invokes the function up to `retries: 4` times (5 total attempts) before giving up and rejecting. We catch the exhaustion error and print the counter, so the total attempt count (`5`) comes from the library actually retrying. Delays are set to zero so the count stays deterministic and the test runs instantly.

## Run

    npx tsx main.ts
