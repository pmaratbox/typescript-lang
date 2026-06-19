# 0662 — Inject a value

A constant `config` value (`v1`) is registered with the awilix DI container via `asValue`. A `Service` class receives that value through constructor injection and returns it from `value()`. The container resolves the `service` graph, wiring the constant in, and we print the controlled result `v1`.

## Run

    npx tsx main.ts
