# 0494 — JSON response

Uses the [Fastify](https://fastify.dev/) web framework to serve `GET /user`,
which returns the object `{ name: 'alice' }`. Fastify automatically serializes
the returned object into a compact JSON body and sets the `application/json`
content type. The route is exercised in-process with `app.inject`, which calls
the handler without binding any port, and the printed value is the real
response body from that call.

## Run

    npx tsx main.ts
