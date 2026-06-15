# 0470 — Boolean flag

Uses [commander](https://github.com/tj/commander.js) to declare a boolean
`--verbose` option, then parses a fixed, hardcoded argv array (`["--verbose"]`)
instead of the real process arguments so the program always produces the same
deterministic output. The flag's presence yields the lowercase boolean `true`.

## Run

    npx tsx main.ts
