# 0551 — Reset

Uses the XState v5 finite-state-machine library. `createMachine` declares two states (`idle`, `running`): `idle` reacts to a `start` event by moving to `running`, and `running` reacts to a `reset` event by returning to the initial `idle` state. We start an actor on the machine, fire the fixed event sequence `start` then `reset`, and read the resulting state from the machine's snapshot, printing it lowercased: `idle`.

## Run

    npx tsx main.ts
