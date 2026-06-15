# 0498 — 404 status

Uses [Fastify](https://fastify.dev/) to show that requesting an undefined route
yields a `404` status. Only `GET /` is registered, so a request to `/missing`
hits no handler. The route is exercised in-process with Fastify's `app.inject()`
test client (no network port bound), and we print `res.statusCode`, the actual
status code from the framework's HTTP response.

## Run

    npx tsx main.ts
