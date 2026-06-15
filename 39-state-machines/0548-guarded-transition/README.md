# 0548 — Guarded transition

Uses the [XState](https://stately.ai/docs/xstate) v5 finite-state-machine library. A *guarded transition* is one that is only valid from a specific state: here the `OPEN` event is defined solely on the `unlocked` state, so the door can only be opened after it has been unlocked. Starting from `locked`, firing `unlock` then `open` walks the machine `locked -> unlocked -> open`; the resulting state name is printed lowercased.

## Run

    npx tsx main.ts
