# 0661 — Multiple dependencies

Use [awilix](https://github.com/jeffijoe/awilix) as the DI container. `A.x()` returns `a` and `B.y()` returns `b`, while `Service` declares constructor dependencies on **both** `a` and `b`, which awilix injects via `PROXY` injection mode. All three classes are registered, then `service` is resolved from the container — wiring `A` and `B` into `Service` automatically — and `run()` returns `x()+y()`, printing `ab`.

## Run

    npx tsx main.ts
