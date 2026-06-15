# 0474 — Subcommand

Uses [commander](https://github.com/tj/commander.js) to define an `add`
subcommand that takes two integer positionals, then parses a fixed, hardcoded
argv array (`["add","2","3"]`) instead of the real process arguments so the
program always produces the same deterministic output. Commander dispatches to
the subcommand's action, which sums the two values and prints `5`.

## Run

    npx tsx main.ts
