# 0018 — Closures

Build a counter that captures a private count starting at zero; each call to the returned function increments the count and returns it, so calling it twice prints 1 then 2. The behavior is identical to `javascript-lang`; TypeScript adds the return-type annotation `() => number`, naming the closure's signature so callers are checked against it. The captured `count` is inferred as `number`, and the type layer erases at compile time to the same JavaScript.

## Run

    npx tsx main.ts
