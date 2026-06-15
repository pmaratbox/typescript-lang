# 0476 — Choice option

Uses [commander](https://github.com/tj/commander.js) and its `Option.choices()`
feature to restrict the `--color` option to the set `{red, green, blue}`. It
parses a fixed, hardcoded argv array (`["--color", "green"]`) instead of the real
process arguments so the program always produces the same deterministic output,
printing the chosen value `green`.

## Run

    npx tsx main.ts
