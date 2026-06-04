# 0109 — Run-Once Initialization

Ensure an initializer runs exactly once even when several threads race to trigger it, printing `init count: 1`. Caching the first call's `Promise` is the idiomatic JS/TS "once": every racer awaits the same memoized initialization.

## Run

    npx tsx main.ts
