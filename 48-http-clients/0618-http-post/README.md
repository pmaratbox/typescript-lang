# 0618 — POST a body

Send a request body with the built-in `fetch` HTTP client. A tiny in-process server (`node:http` listening on an ephemeral `127.0.0.1` port, no external network) exposes only `POST /echo`, which returns the request body verbatim. The client POSTs the text `ping` and prints the echoed response body.

## Run

    npx tsx main.ts
