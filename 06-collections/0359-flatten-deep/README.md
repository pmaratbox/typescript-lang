# 0359 — Flatten Deeply

Flatten the arbitrarily nested structure [1,[2,[3,4]],5] into `1 2 3 4 5`. A recursive `Nested` union type models the tree, and `Array.isArray` narrows scalars from sub-arrays in order.

## Run

    npx tsx main.ts
