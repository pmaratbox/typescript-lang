# 0366 — Sparse Matrix

Store only nonzero entries; with (1,1)=5 set, read (1,1) (5) and (0,0) (0), printing `5 0`. A `Map` keyed by a `"row,col"` string holds only nonzero cells, defaulting missing reads to 0.

## Run

    npx tsx main.ts
