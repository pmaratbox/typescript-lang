# 0469 — Positional argument

Uses [commander](https://github.com/tj/commander.js) to define a CLI with one
required positional argument `name` via `program.argument('<name>')`. The parser
is fed a fixed, hardcoded argv `['node', 'main.ts', 'alice']` rather than the
real `process.argv`, so the program is deterministic and always prints the same
positional value regardless of how it is launched.

## Run

    npx tsx main.ts
