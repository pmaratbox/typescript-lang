# 0620 — Send a request header

Use the real `fetch` HTTP client to send a custom `X-Token: secret` request header to an in-process `node:http` server (listening on an ephemeral loopback port, no external network). The server's `GET /token` route echoes the received header back in the body, so the client prints `secret`.

## Run

    npx tsx main.ts
