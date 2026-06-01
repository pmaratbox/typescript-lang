# 0028 — String Formatting

Format the float `3.14159` to two decimals and zero-pad the integer `42` to width five, printing `pi: 3.14` and `id: 00042`. Identical to JavaScript — `toFixed` and `padStart` on the boxed primitives — with the `string` results checked at compile time. The number literal is untyped at runtime once TypeScript erases its annotations.

## Run

    npx tsx main.ts
