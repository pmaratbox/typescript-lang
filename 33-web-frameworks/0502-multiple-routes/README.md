# 0502 — Multiple routes

Uses [Fastify](https://fastify.dev/) to register two routes on one app —
`GET /` returning `home` and `GET /about` returning `about`. Rather than
binding a network port, each route is exercised in-process with Fastify's
`app.inject()` test client, which dispatches a synthetic HTTP request straight
through the framework and returns a response object; we print each `res.body`,
the actual response bodies produced by the routes, one per line.

## Run

    npx tsx main.ts
