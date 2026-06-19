# 0663 — Factory provider

Use [awilix](https://github.com/jeffijoe/awilix) as the DI container. Instead of autowiring a class, `widget` is registered with `asFunction(makeWidget)` — a **factory provider** whose function constructs and returns the object. When `widget` is resolved from the container, awilix invokes the factory to build the value, and `value()` returns `built`, which is printed.

## Run

    npx tsx main.ts
