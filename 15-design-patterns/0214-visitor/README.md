# 0214 — Visitor

Use a visitor to sum the values of a small node tree with leaves 1, 2, 3, printing `6`. Each `Leaf.accept` double-dispatches back to the `SumVisitor`.

## Run

    npx tsx main.ts
