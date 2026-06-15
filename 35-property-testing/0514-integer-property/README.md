# 0514 — Integer property

Uses the **fast-check** property-testing library. `fc.integer()` generates
arbitrary integers, and `fc.property` declares a property checked over many
generated cases by `fc.assert`: addition is commutative (`a + b === b + a`).
`fc.assert` throws if any generated pair falsifies the property, so reaching the
print means all generated cases held.

## Run

    npx tsx main.ts
