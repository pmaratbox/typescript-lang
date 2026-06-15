# 0493 — Hello route

Uses [Fastify](https://fastify.dev/) to define a `GET /` route that returns the
text `hello`. Instead of binding a network port, the route is exercised
in-process with Fastify's `app.inject()` test client, which dispatches a
synthetic HTTP request straight through the framework and returns a response
object; we print `res.body`, the actual response body produced by the route.

## Run

    npx tsx main.ts
