# 0070 — Digit Sum

Sum the decimal digits of `1234` (repeatedly take the last digit with `% 10` and drop it with `/ 10`) and print the total: `10`. The same digit-peeling loop as JavaScript; `Math.floor` is needed because `/` does not truncate.

## Run

    npx tsx main.ts
