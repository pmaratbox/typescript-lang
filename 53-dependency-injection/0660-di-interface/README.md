# 0660 — Bind interface to impl

Using the awilix DI container, an `Animal` interface is bound to a `Dog` implementation whose `sound()` returns `woof`. The service is registered under the name `animal` with `asClass(Dog)`, then resolved by that interface name and its `sound()` method is called, printing `woof`.

## Run

    npx tsx main.ts
