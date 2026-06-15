# 0495 — Path parameter

Uses [fastify](https://github.com/fastify/fastify) with a `GET /users/:id`
route whose handler echoes the captured `id` path parameter. The route is
exercised in-process via `app.inject({ method, url })` (no socket is bound to a
fixed port), and `res.body` from the real HTTP response is printed. Requesting
`/users/42` yields the body `42`. The Fastify logger is disabled so only the
intended output prints.

## Run

    npx tsx main.ts
