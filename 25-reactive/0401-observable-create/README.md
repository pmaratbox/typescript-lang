# 0401 — Create an Observable

Build a push-based Observable from scratch that emits 1, 2, 3 to its observer and then completes. In TypeScript an Observable is modeled as a function taking an `Observer<T>` with `next`/`complete` callbacks.

## Run

    npx tsx main.ts
