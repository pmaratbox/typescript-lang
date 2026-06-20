# 0708 — UUIDv5 is stable

Uses the `uuid` library's `v5` function to show that name-based UUIDs are stable.
UUIDv5 hashes the namespace plus a name with SHA-1, so the result is fully
deterministic from `(namespace, name)` — unlike the random `v4`. Here we generate
the UUIDv5 in the DNS namespace (`6ba7b810-9dad-11d1-80b4-00c04fd430c8`, available
as `v5.DNS`) for the name `example.com` twice and print whether the two results
are equal, which is always `true`.

## Run

    npx tsx main.ts
