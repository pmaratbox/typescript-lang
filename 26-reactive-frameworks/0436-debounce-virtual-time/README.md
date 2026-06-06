# 0436 — Debounce (Virtual Time)

Use the library's debounce operator on a virtual/test scheduler to emit a value only after a quiet window. Built with RxJS's `debounce` operator driven by a `TestScheduler` (virtual time), with the quiet window supplied by `timer`.

## Run

    npx tsx main.ts
