# 0622 — Handle 404

Use the real `fetch` HTTP client to call an in-process `node:http` server (bound to an ephemeral loopback port, no external network). The server only defines `GET /hello`; requesting an undefined route such as `GET /missing` falls through to the catch-all `404` response. The client reads `resp.status` and prints the integer status code `404`.

## Run

    npx tsx main.ts
