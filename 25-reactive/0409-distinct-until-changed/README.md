# 0409 — Distinct Until Changed

Implement distinctUntilChanged, dropping consecutive duplicate values from 1,1,2,2,2,3,1. A closure-captured `last` plus a `hasLast` flag forwards a value only when strict `!==` shows it differs from the previously emitted one.

## Run

    npx tsx main.ts
