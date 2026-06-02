# 0097 — Enums with Associated Values

Define a shape type carrying associated data — `Rect(2, 3)` and `Square(4)` — compute each area by matching on the variant, and print `6` and `16`. A discriminated union (variants sharing a literal `type` tag) models the sum type; narrowing on `shape.type` gives type-safe access to each variant's fields.

## Run

    npx tsx main.ts
