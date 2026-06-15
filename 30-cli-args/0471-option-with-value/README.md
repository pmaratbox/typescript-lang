# 0471 — Option with value

Uses [commander](https://github.com/tj/commander.js) to declare an option
`--name` that takes a string value, then parses a fixed, hardcoded argv array
(`["--name", "alice"]`) instead of the real process arguments so the program
always produces the same deterministic output. The parsed value is read back
from `program.opts().name`.

## Run

    npx tsx main.ts
