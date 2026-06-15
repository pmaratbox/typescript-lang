# 0547 — Traffic light

Uses the XState v5 finite-state-machine library. `createMachine` declares the states (`red`, `green`, `yellow`) and the `NEXT` transition that cycles between them; `createActor` runs the machine. Starting in `red`, we fire `NEXT` twice (red -> green -> yellow) and print the actor's current state name lowercased.

## Run

    npx tsx main.ts
