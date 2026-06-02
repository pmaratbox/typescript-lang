# 0055 — Frequency Count

Count how many times each letter appears in `banana` and print the per-letter counts in alphabetical order: `a:3 b:1 n:2`. The same accumulation typed as `Record<string, number>`, using `?? 0` (nullish coalescing) so only `undefined` defaults to zero; keys are sorted explicitly.

## Run

    npx tsx main.ts
