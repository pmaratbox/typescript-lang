# 0658 — Inject a dependency

Use [awilix](https://github.com/jeffijoe/awilix) as the DI container. `Repo` exposes `data()` returning `data`, and `Service` declares a constructor dependency on `repo` that awilix injects via `PROXY` injection mode. Both classes are registered, then `service` is resolved from the container — wiring `Repo` into `Service` automatically — and `run()` delegates to `repo.data()`, printing `data`.

## Run

    npx tsx main.ts
