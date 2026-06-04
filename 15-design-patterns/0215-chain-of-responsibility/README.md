# 0215 — Chain of Responsibility

Pass a request of level 2 along a handler chain so the level-2 handler handles it, printing `handled by 2`. Each `Handler` either processes the level or forwards to its successor.

## Run

    npx tsx main.ts
