# 0421 — Debounce (Virtual Time)

Implement debounce(window) on a virtual-time scheduler: emit a value only after a quiet gap of `window` ticks with no newer value. Each new value cancels the previously scheduled emit `Task` and reschedules at `scheduler.clock + window`.

## Run

    npx tsx main.ts
