# 0621 — Read a response header

Use the real `fetch` HTTP client to call an in-process `node:http` server (bound to an ephemeral loopback port, no external network). The route `GET /info` sets a custom response header `X-Count: 7`; the client reads it back via `resp.headers.get("x-count")` and prints the value `7`. A custom header is used (rather than `Content-Type`) to avoid charset munging.

## Run

    npx tsx main.ts
