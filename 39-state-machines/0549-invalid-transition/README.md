# 0549 — Invalid transition

Uses the XState v5 finite-state-machine library. A transition fires only when the current state declares a handler for the incoming event; here the turnstile starts in `locked`, which only handles `COIN`. Sending `PUSH` is an *invalid transition* — XState ignores the unhandled event and the actor stays in `locked` rather than crashing. We read the final state from the machine snapshot and print it lowercased.

## Run

    npx tsx main.ts
