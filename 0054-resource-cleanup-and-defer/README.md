# 0054 — Resource Cleanup & Defer

Acquire a resource, use it, and let the language release it automatically at scope exit, printing `open`, `use`, and `close` in that order. The same `try`/`finally` guarantee as JavaScript; TypeScript also supports the `using` declaration for `Disposable` values when targeting a recent runtime.

## Run

    npx tsx main.ts
