# 0664 — Nested dependency chain

Use [awilix](https://github.com/jeffijoe/awilix) as the DI container to resolve a 3-level dependency chain. `A.v()` returns `a`; `B` depends on `A` and its `v()` returns `A.v()+"b"`; `C` depends on `B` and its `v()` returns `B.v()+"c"`. All three classes are registered, then `c` is resolved from the container — awilix recursively constructs `B` and `A` via `PROXY` injection — and `v()` walks the chain, printing `abc`.

## Run

    npx tsx main.ts
