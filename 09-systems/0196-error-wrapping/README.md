# 0196 — Error Wrapping

Wrap an inner error "inner" inside an outer context and print the combined message `outer: inner`. TypeScript wraps with the standard `Error` `{ cause }` option and reads it back through `.cause`.

## Run

    npx tsx main.ts
