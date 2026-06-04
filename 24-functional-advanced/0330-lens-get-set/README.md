# 0330 — Lens Get/Set

Use a lens over the nested value {a:{b:1}} to get b (1) and to set b to 2, printing `1 2`. A `Lens<S, A>` interface pairs a getter with an immutable spread-based setter.

## Run

    npx tsx main.ts
