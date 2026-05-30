# 0015 — Interfaces

Define a `Shape` interface with `name()` and `area()` methods, implement it for a rectangle and a square, then loop over a collection of shapes and print each one's area. TypeScript has a real `interface` keyword, and `class Rectangle implements Shape` makes the contract explicit and checked at compile time. The interface is *structural*, so a class satisfies `Shape` by having the right shape regardless of the `implements` clause — and the whole type layer is erased at compile time, leaving emitted JavaScript identical to `javascript-lang`.

## Run

    npx tsx main.ts
