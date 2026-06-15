# 0509 — Nested object

Uses [graphql-js](https://github.com/graphql/graphql-js) to build a schema with
nested object types (`Query` -> `User` -> `Address`) and execute the query
`{ user { address { city } } }` in-process with `graphql()`. The selection set
traverses through each nested object type, and we print
`data.user.address.city` extracted from the execution result.

## Run

    npx tsx main.ts
