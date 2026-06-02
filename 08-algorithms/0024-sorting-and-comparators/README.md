# 0024 — Sorting & Comparators

Sort `[3, 1, 2]` ascending, then again with a custom comparator that reverses the order, printing `asc: 1 2 3` and `desc: 3 2 1`. This is the same `sort` as JavaScript with a typed comparator `(a: number, b: number) => number`; a negative result orders `a` first. The default lexicographic sort makes the explicit numeric comparator necessary even for ascending order.

## Run

    npx tsx main.ts
