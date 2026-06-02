# 0021 — Mutability & References

Have a function increment a value in place — through a pointer, reference, or mutable holder — so the caller sees it change from `before: 1` to `after: 2`. Same aliasing as JavaScript — the `Box` object is shared by reference, so `box.value++` is visible to the caller. The `interface Box` only annotates the shape at compile time and is erased at runtime.

## Run

    npx tsx main.ts
