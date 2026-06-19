# 0624 — PUT request

Make a PUT request with the built-in `fetch` HTTP client. A tiny in-process server (`node:http` listening on an ephemeral `127.0.0.1` port, no external network) exposes only `PUT /item`, which returns the fixed text `updated`. The client issues the PUT and prints the response body.

## Run

    npx tsx main.ts
