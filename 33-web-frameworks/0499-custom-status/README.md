# 0499 — Custom status

Uses the [Fastify](https://fastify.dev/) web framework to serve `POST /create`,
whose handler sets a custom HTTP status with `reply.code(201)` to signal
*Created*. The route is exercised in-process with `app.inject`, which invokes
the handler without binding any port, and the printed value is the real
`res.statusCode` returned by that call. Logging is off by default
(`Fastify()` with no logger), so only the status code prints.

## Run

    npx tsx main.ts
