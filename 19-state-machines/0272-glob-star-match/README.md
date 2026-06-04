# 0272 — Glob Star Match

Match the glob "a*b" (* = any run) against "aaab" (yes) and "aac" (no), printing `yes no`. A backtracking matcher with a remembered star position handles greedy `*` cleanly.

## Run

    npx tsx main.ts
