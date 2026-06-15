# 0544 — Expression

Uses Parsimmon's `sepBy1` combinator to parse a `'+'`-separated sequence of integers. Each operand is parsed by a digit regexp mapped to a number; `sepBy1(num, P.string('+'))` yields the list of operands, which we then `map` and fold with `reduce` to compute the sum. Parsing `'10+20+30'` gives `60`.

## Run

    npx tsx main.ts
