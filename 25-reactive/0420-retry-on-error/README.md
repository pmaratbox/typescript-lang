# 0420 — Retry On Error

Implement retry(n) that resubscribes to the source on error up to n times; the source succeeds on the 3rd subscription. A recursive `attempt` closure decrements a remaining counter and re-invokes `source.subscribe` from the error handler.

## Run

    npx tsx main.ts
