# 0501 — Middleware

Uses [Fastify](https://fastify.dev/) middleware to transform a response. An
`onSend` hook acts as middleware that prefixes every response body with
`[mw] `, so the `GET /` handler returns just `hello` while the client receives
`[mw] hello`. The route is exercised in-process with Fastify's `app.inject()`
test client (no network port bound), and we print `res.body` — the real HTTP
response body after the middleware ran.

## Run

    npx tsx main.ts
