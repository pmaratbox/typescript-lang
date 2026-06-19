# 0671 — Exact decimal subtraction

Subtract `1.0 - 0.1` exactly using the `bignumber.js` `BigNumber` arbitrary-precision decimal type. Its `.minus()` method does base-10 decimal arithmetic, so the result is exactly `0.9` — unlike native floating point, which would yield `0.9000000000000001`.

## Run

    npx tsx main.ts
