# 0044 — Generic Constraints

Write a generic `largest(a, b)` that requires an ordered type, then call it on integers (3 and 9) and on strings (apple and pear), printing `9` and `pear`. The bound `<T extends number | string>` is what lets `>` apply — without a constraint, TypeScript rejects `>` on an open type parameter. The constraint is erased at runtime.

## Run

    npx tsx main.ts
