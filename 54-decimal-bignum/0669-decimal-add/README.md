# 0669 — Exact decimal addition

Add `0.1 + 0.2` exactly using the `BigNumber` type from `bignumber.js`, an arbitrary-precision decimal type. Unlike IEEE-754 floats (where `0.1 + 0.2` yields `0.30000000000000004`), `BigNumber.plus` performs base-10 decimal arithmetic and produces the exact result `0.3`.

## Run

    npx tsx main.ts
