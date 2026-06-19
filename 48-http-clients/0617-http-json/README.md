# 0617 — Parse JSON response

Use the real `fetch` HTTP client (the WHATWG Fetch API built into Node) to call an in-process `node:http` server bound to an ephemeral loopback port (`127.0.0.1:0`). The server returns JSON `{"name":"Alice","age":30}` on `GET /user`; the client fetches it, parses the body with `.json()`, and prints the `name` field: `Alice`.

## Run

    npx tsx main.ts
