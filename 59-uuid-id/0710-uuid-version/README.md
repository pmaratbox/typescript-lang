# 0710 — UUID version

Uses the `uuid` library's `version` function to read a UUID's version number.
Each UUID stores its version in a fixed nibble of the string; `version` parses
the UUID `550e8400-e29b-41d4-a716-446655440000` and returns `4`, telling us it is
a random (v4) UUID.

## Run

    npx tsx main.ts
