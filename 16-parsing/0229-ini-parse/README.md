# 0229 — Parse INI

Parse the INI text with section [s] and key k=v, printing the flattened entry `s.k=v`. Tracking the current section lets each key flatten to a dotted path.

## Run

    npx tsx main.ts
