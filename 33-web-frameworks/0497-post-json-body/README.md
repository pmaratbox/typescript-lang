# 0497 — POST JSON body

Uses [fastify](https://github.com/fastify/fastify) to register a `POST /sum`
route whose handler reads the parsed JSON request body from `req.body` and
returns the sum of its `a` and `b` fields. Fastify parses the `application/json`
payload automatically. The route is exercised in-process with
`app.inject({ method: 'POST', url: '/sum', payload: { a: 2, b: 3 } })` — no fixed
port is bound — and the actual HTTP response body (`res.body`) is printed.
Fastify's logger is left disabled so no startup/request logs leak into stdout.

## Run

    npx tsx main.ts
