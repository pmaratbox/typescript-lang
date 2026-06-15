# 0505 — Hello query

Uses [graphql-js](https://github.com/graphql/graphql-js) (the `graphql`
package), the JavaScript/TypeScript reference implementation of GraphQL, to
define a schema with a single `hello: String` field and execute the query
`{ hello }` in-process with the `graphql()` function (no HTTP server). The
field resolver returns `'world'`, and we print `res.data.hello`, the resolved
value extracted from the execution result.

## Run

    npx tsx main.ts
