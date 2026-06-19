# 0649 — Succeeds first try

Use [p-retry](https://github.com/sindresorhus/p-retry) to wrap an async operation that succeeds immediately. A shared `attempts` counter is incremented inside the operation each time `p-retry` invokes it. Because the operation never throws, `p-retry` returns on the first call and no retry is needed, so the printed attempt count is `1`.

## Run

    npx tsx main.ts
