# 0039 — Records & Value Equality

Create two points with the same fields, print one as `point: (1, 2)`, and compare them by value to print `equal: yes`. Same reference semantics as JavaScript — there is no structural value equality at runtime — so the fields are compared explicitly. `readonly` enforces immutability only at compile time.

## Run

    npx tsx main.ts
