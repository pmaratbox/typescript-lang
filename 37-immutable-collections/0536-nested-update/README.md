# 0536 — Nested update

Uses Immutable.js's persistent `Map`: calling `setIn(['user', 'age'], 31)` walks the nested key path and returns a brand-new map with the deep value replaced, while the original map (and its nested `user` map) stays unchanged. We print the new nested age then the original nested age to demonstrate the immutability.

## Run

    npx tsx main.ts
