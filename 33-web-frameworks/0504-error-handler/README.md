# 0504 — Error handler

Uses [Fastify](https://fastify.dev/) to turn a thrown error into a `500`
response. The `GET /boom` handler throws a real `Error`, and a custom
`app.setErrorHandler()` catches it and replies with status `500`. The route is
exercised in-process with Fastify's `app.inject()` test client (no network port
bound), and we print `res.statusCode`, the actual status code from the
framework's error handling.

## Run

    npx tsx main.ts
