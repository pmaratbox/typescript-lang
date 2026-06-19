# 0656 — Exponential backoff

Uses the real [`p-retry`](https://github.com/sindresorhus/p-retry) library with an exponential backoff strategy (`factor: 2`, which doubles the delay between successive retries). A shared counter scripts the failure sequence: the operation throws on its first three invocations and succeeds on the fourth. `p-retry` keeps retrying with the exponential delay schedule until the call resolves, so the printed total attempt count (`4`) comes from the library actually retrying the scripted-failure operation. Base delays are set to zero so the count stays deterministic and the test runs instantly.

## Run

    npx tsx main.ts
