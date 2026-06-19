# 0615 — GET request

Use the built-in `fetch` HTTP client (the WHATWG Fetch API, global in modern Node) to GET `/hello` from a tiny in-process `node:http` server bound to `127.0.0.1:0` (an ephemeral loopback port — no external network). The route returns the plain-text body `hello world`, and the client reads it with `response.text()`.

## Run

    npx tsx main.ts
