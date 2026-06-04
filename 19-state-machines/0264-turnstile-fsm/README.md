# 0264 — Turnstile FSM

Drive a turnstile (locked/unlocked) with events coin, push, push and print the resulting states `unlocked locked locked`. Union types for states and events make the transition function exhaustive and type-safe.

## Run

    npx tsx main.ts
