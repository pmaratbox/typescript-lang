# 0511 — Mutation

Uses [graphql-js](https://github.com/graphql/graphql-js) to define a schema with
a `Mutation` type whose `addUser(name: String!): User` field returns a `User`.
The mutation is executed in-process with `graphql()` (no HTTP server); the
resolver returns the created user, and we print `data.addUser.name` extracted
from the execution result.

## Run

    npx tsx main.ts
