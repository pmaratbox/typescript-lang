# 0506 — Field argument

Uses [graphql-js](https://github.com/graphql/graphql-js) to define a schema with
`Query.greet(name: String!)` and execute the query `{ greet(name: "alice") }`
in-process (no HTTP server). The field's resolver receives the GraphQL **field
argument** `name` and returns `hello alice`; we print the value extracted from
the execution result's `data.greet`.

## Run

    npx tsx main.ts
