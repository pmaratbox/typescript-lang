# 0108 — Parallel Tasks Combined

Run two independent tasks that produce 10 and 20 concurrently, then combine (sum) their results into `30`. `Promise.all` awaits both async tasks together before combining them with `await`.

## Run

    npx tsx main.ts
