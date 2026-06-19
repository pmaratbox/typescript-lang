# 0657 — Resolve a service

A `Greeter` class whose `greet()` returns `hello` is registered with the awilix DI container via `asClass`. The container resolves the `greeter` service and we call `greet()`, printing the controlled result `hello`.

## Run

    npx tsx main.ts
