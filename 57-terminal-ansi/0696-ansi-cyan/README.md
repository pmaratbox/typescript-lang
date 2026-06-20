# 0696 — Cyan text

Color the word `cyan` with the foreground CYAN color using [chalk](https://github.com/chalk/chalk), TypeScript's standard ANSI-color library. A `new Chalk({ level: 1 })` instance forces color on so the escape sequence is emitted even without a TTY, and `c.cyan('cyan')` wraps the word as `\x1b[36mcyan\x1b[39m` (note the foreground reset `\x1b[39m`, not `\x1b[0m`).

## Run

    npx tsx main.ts
