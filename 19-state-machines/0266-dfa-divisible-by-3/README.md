# 0266 — DFA: Divisible by 3

Use a 3-state DFA over binary input to test whether "110" (6, yes) and "100" (4, no) are divisible by 3, printing `yes no`. Tracking value mod 3 as the DFA state keeps the implementation a tight one-line transition.

## Run

    npx tsx main.ts
