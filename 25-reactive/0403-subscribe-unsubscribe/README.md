# 0403 — Subscribe and Unsubscribe

Return a Subscription from subscribe() and use it to unsubscribe so later values are not delivered. The producer shares a `closed` flag with the Subscription and checks it before each `next`, so the consumer can stop the stream synchronously from inside its own handler.

## Run

    npx tsx main.ts
