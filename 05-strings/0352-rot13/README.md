# 0352 — ROT13

Apply ROT13 to "hello" (->"uryyb") and ROT13 again to recover "hello", printing `uryyb hello`. Code-unit arithmetic with `% 26` makes ROT13 its own inverse in idiomatic TypeScript.

## Run

    npx tsx main.ts
