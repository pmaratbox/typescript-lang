# 0709 — Nil UUID

Uses the real `uuid` library's exported `NIL` constant — the special all-zero
UUID (`00000000-0000-0000-0000-000000000000`) — and prints it. Rather than
hardcoding the string, this reads the canonical nil value the library provides.

## Run

    npx tsx main.ts
