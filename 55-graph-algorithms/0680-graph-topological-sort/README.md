# 0680 — Topological sort

Build the fixed DAG with the `graphlib` directed `Graph` type and use its `alg.topsort` algorithm to compute a topological ordering. The DAG has edges `a->b`, `b->c`, `a->c`, `c->d`, `d->e`, which admits the unique order `a,b,c,d,e`; we comma-join the result.

## Run

    npx tsx main.ts
