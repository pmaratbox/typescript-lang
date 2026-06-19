# 0659 — Singleton lifetime

Uses the awilix DI container to register `Repo` with `Lifetime.SINGLETON`, then resolves it twice from the container. Because a singleton is cached after first construction, the two resolutions are the SAME instance, so the identity check (`a === b`) prints `true`.

## Run

    npx tsx main.ts
