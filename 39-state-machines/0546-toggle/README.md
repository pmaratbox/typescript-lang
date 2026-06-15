# 0546 — Toggle

An event that flips between two states. Using [XState](https://stately.ai/docs/xstate) v5, we define a finite state machine with two states (`off`, `on`) where a single `toggle` event flips between them. An actor created from the machine receives a fixed sequence of three `toggle` events (off -> on -> off -> on), and the resulting state value comes straight from the machine's snapshot, lowercased before printing.

## Run

    npx tsx main.ts
