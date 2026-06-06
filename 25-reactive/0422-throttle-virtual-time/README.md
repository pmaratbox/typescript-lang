# 0422 — Throttle (Virtual Time)

Implement throttle(window) (leading edge) on a virtual-time scheduler: emit a value, then suppress further values for `window` ticks. A typed `Observable<T>` is a function taking an observer, and `throttle` closes over the scheduler's virtual clock to gate emissions.

## Run

    npx tsx main.ts
