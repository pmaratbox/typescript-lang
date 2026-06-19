# 0616 — Response status code

Use the real `fetch` HTTP client (the WHATWG global in Node) to GET `/hello` from an in-process `node:http` server bound to `127.0.0.1:0` (an ephemeral loopback port, never printed), then read the response object's `status` property and print the integer status code: `200`.

## Run

    npx tsx main.ts
