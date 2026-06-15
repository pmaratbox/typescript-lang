# 0500 — Request header

Uses [fastify](https://github.com/fastify/fastify) to register a `GET /whoami`
route whose handler reads the `X-Name` request header from `req.headers` and
echoes its value. The route is exercised in-process with
`app.inject({ method: 'GET', url: '/whoami', headers: { 'X-Name': 'alice' } })` —
no fixed port is bound — and the actual HTTP response body (`res.body`) is
printed. Fastify's logger is left disabled so no startup/request logs leak into
stdout.

## Run

    npx tsx main.ts
