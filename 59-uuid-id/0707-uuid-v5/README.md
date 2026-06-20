# 0707 — UUIDv5 (name-based)

Uses the `uuid` library's `v5` function to generate a name-based UUID. UUIDv5
hashes the namespace plus a name with SHA-1, so the result is fully deterministic
from `(namespace, name)` — unlike the random `v4`. Here we generate the UUIDv5 in
the standard DNS namespace (`6ba7b810-9dad-11d1-80b4-00c04fd430c8`, available as
`v5.DNS`) for the name `example.com`.

## Run

    npx tsx main.ts
