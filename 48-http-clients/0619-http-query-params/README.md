# 0619 — Query parameters

Use the global `fetch` client to call an in-process `node:http` server that listens on an ephemeral loopback port. The server route `GET /greet` reads the `name` query parameter and returns `hi <name>`. The client builds the query string with `URLSearchParams({ name: "Bob" })`, requests `/greet?name=Bob`, and prints the body: `hi Bob`.

## Run

    npx tsx main.ts
