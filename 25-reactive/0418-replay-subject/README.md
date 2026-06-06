# 0418 — ReplaySubject

Implement a ReplaySubject with a buffer of the last 2 values, replayed to a late subscriber, which then also receives new values. A bounded array buffer is trimmed with `shift()` and replayed on subscribe.

## Run

    npx tsx main.ts
