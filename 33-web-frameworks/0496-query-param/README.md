# 0496 — Query parameter

Uses [fastify](https://github.com/fastify/fastify) to register a
`GET /greet` route whose handler reads the `name` query-string parameter from
`req.query` and returns `hello ` + the name. The route is exercised
in-process with `app.inject({ method: 'GET', url: '/greet?name=alice' })` — no
fixed port is bound — and the actual HTTP response body (`res.body`) is printed.
Fastify's logger is left disabled so no startup/request logs leak into stdout.

## Run

    npx tsx main.ts
