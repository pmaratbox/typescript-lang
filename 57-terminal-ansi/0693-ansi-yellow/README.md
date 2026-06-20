# 0693 — Yellow text

This lesson uses the real [`chalk`](https://github.com/chalk/chalk) ANSI-color library to color the word `yellow` with the foreground YELLOW color (ANSI 33). A fresh `new Chalk({ level: 1 })` instance forces color output on, so the escape sequence is emitted even without a TTY. The library produces the raw sequence `ESC[33myellowESC[39m` (foreground reset is `\x1b[39m`, not `\x1b[0m`).

## Run

    npx tsx main.ts
