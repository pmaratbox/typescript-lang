# 0552 — Workflow

Uses the XState v5 finite-state-machine library. `createMachine` declares a multi-step approval workflow with three states (`idle`, `pending`, `approved`): `idle` reacts to a `submit` event by moving to `pending`, and `pending` reacts to an `approve` event by moving to `approved`. We start an actor on the machine, fire the fixed event sequence `submit` then `approve`, and read the resulting state from the machine's snapshot, printing it lowercased: `approved`.

## Run

    npx tsx main.ts
