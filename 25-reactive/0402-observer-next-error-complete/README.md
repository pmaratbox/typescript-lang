# 0402 — Observer Contract

Demonstrate the observer contract next*-then-terminal: emit 1 and 2, complete, and show that a post-complete next is ignored. A `guard` wrapper closes over a `stopped` flag, making next and further terminals no-ops once a terminal fires.

## Run

    npx tsx main.ts
