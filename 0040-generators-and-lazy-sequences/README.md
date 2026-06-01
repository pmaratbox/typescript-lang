# 0040 — Generators & Lazy Sequences

Produce an endless lazy sequence of squares and take only the first three, printing `1 4 9`. The same `function*` generator as JavaScript, typed `Generator<number>`. Laziness is a runtime property — the type only records the element type produced by each `yield`.

## Run

    npx tsx main.ts
