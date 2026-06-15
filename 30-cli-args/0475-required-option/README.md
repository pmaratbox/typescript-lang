# 0475 — Required option

Uses [commander](https://github.com/tj/commander.js) and its `requiredOption`
method to declare a mandatory integer `--id` option, then parses a fixed,
hardcoded argv array (`["--id", "42"]`) instead of the real process arguments so
the program always produces the same deterministic output. The required option's
parsed value is printed.

## Run

    npx tsx main.ts
