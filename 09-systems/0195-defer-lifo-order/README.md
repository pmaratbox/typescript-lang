# 0195 — Defer LIFO Order

Register three deferred actions printing 1, 2, 3 and show they run in last-in-first-out order `3 2 1`. TypeScript has no `defer`, so push closures onto a stack and pop them to drain in LIFO order.

## Run

    npx tsx main.ts
