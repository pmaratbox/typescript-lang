# 0545 — Basic transition

Uses the XState v5 finite-state-machine library. `createMachine` declares two states (`locked`, `unlocked`) and the transitions between them — `locked` reacts to a `COIN` event by moving to `unlocked`, and `unlocked` reacts to `PUSH` by moving back to `locked`. We start an actor on the machine, fire the single fixed event `COIN`, and read the resulting state from the machine's snapshot, printing it lowercased: `unlocked`.

## Run

    npx tsx main.ts
