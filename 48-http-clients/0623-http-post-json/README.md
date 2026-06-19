# 0623 — POST JSON, parse JSON

POST a JSON body and parse the JSON reply with the built-in `fetch` HTTP client. A tiny in-process server (`node:http` listening on an ephemeral `127.0.0.1` port, no external network) exposes only `POST /double`, which reads `{"x":N}` and returns `{"doubled":2N}`. The client POSTs `{"x":5}`, parses the response JSON, and prints the `doubled` value.

## Run

    npx tsx main.ts
