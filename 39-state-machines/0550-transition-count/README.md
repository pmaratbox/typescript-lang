# 0550 — Transition count

Uses the XState v5 finite-state-machine library. The machine carries a `context` object with a `count` field, and every transition attaches an `assign` action that increments `count`. This demonstrates per-transition actions (side effects/context updates that fire whenever an event causes a state change). We start an actor, fire a fixed sequence of three valid events (`COIN`, `PUSH`, `COIN`), and read the counter back from the machine's snapshot context — printing `3`. The count is produced entirely by the machine's actions, not hardcoded.

## Run

    npx tsx main.ts
