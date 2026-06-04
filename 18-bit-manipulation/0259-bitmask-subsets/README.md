# 0259 — Enumerate Submasks

Enumerate all submasks of the mask 5 (101) in descending order `5 4 1 0`. A typed function accumulates `sub = (sub - 1) & mask` into an array until it reaches zero.

## Run

    npx tsx main.ts
