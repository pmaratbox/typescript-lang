# 0324 — Either Monad

Chain Either computations: a successful divide chain yields 2, and a divide-by-zero yields an error, printing `2 err`. A Left/Right discriminated union short-circuits the bind chain on the first Left.

## Run

    npx tsx main.ts
