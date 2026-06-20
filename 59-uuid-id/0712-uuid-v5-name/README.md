# 0712 — UUIDv5 of another name

Uses the `uuid` library's `v5` function to generate a name-based UUID. UUIDv5
hashes the namespace plus a name with SHA-1, so the result is fully deterministic
from `(namespace, name)` — and name-dependent: changing the name changes the
UUID. Here we generate the UUIDv5 in the standard DNS namespace
(`6ba7b810-9dad-11d1-80b4-00c04fd430c8`, available as `v5.DNS`) for the name
`test.com`, which differs from the `example.com` result in lesson 0707.

## Run

    npx tsx main.ts
