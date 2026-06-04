# 0200 — Precondition Assert

Check a precondition arg>0: for 5 print `ok`, and for -1 report the failure `error: must be positive`, on two lines. A guard `throw`s an `Error` that the caller narrows from `unknown` to read `.message`.

## Run

    npx tsx main.ts
