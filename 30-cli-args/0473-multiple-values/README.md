# 0473 — Multiple values

Uses [commander](https://github.com/tj/commander.js) to declare a repeatable
`--num` option whose custom coercer collects each occurrence into a list of
integers, then parses a fixed, hardcoded argv array
(`["--num","1","--num","2","--num","3"]`) instead of the real process arguments
so the program always produces the same deterministic output. The collected
values are summed and printed.

## Run

    npx tsx main.ts
