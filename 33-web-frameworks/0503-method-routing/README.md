# 0503 — Method routing

Uses [Fastify](https://fastify.dev/) to register two handlers on the same path
`/item` distinguished by HTTP method: `GET` returns `get` and `POST` returns
`post`. The route is exercised in-process with Fastify's `app.inject()` test
client, which dispatches a synthetic `POST /item` request through the framework's
method router; we print `res.body`, the actual body produced by the matched
handler.

## Run

    npx tsx main.ts
