# 0027 — File I/O

Write `hello, file` to a file, read it back, delete the file, and print `read: hello, file`. The same `node:fs` calls as the JavaScript version, with `tsx` running the TypeScript directly. The synchronous functions return typed values — `readFileSync(path, "utf8")` is a `string` — checked at compile time.

## Run

    npx tsx main.ts
