# 0672 — Exact decimal comparison

Check whether `0.1 + 0.2` equals `0.3` using the `bignumber.js` arbitrary-precision decimal type. With binary floating point this comparison is `false`, but `BigNumber` performs exact base-10 arithmetic, so `new BigNumber("0.1").plus("0.2").isEqualTo("0.3")` correctly returns `true`.

## Run

    npx tsx main.ts
