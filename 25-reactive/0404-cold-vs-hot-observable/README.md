# 0404 — Cold vs Hot Observable

Contrast a cold observable (re-runs its producer per subscriber) with a hot one (shares a single execution, so late subscribers miss earlier values). The cold variant takes a producer closure invoked fresh on every `subscribe`, while the hot variant keeps a shared observer list and pushes via `emit`.

## Run

    npx tsx main.ts
