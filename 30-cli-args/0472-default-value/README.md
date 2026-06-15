# 0472 — Default value

Uses [commander](https://github.com/tj/commander.js) to declare an integer
`--count <n>` option whose fourth argument supplies the default value `1`, then
parses a fixed, hardcoded empty argv array (`[]`) instead of the real process
arguments so the program always produces the same deterministic output. Because
`--count` is absent, commander falls back to the declared default and prints `1`.

## Run

    npx tsx main.ts
