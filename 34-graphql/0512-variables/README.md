# 0512 — Query variables

Uses [graphql-js](https://github.com/graphql/graphql-js) to define a schema with
`Query.item(id: Int!): Item { id: Int }` and execute the query
`query($id: Int!) { item(id: $id) { id } }` in-process (no HTTP server). The
value `42` is supplied through the execution's **variables** map
(`variableValues`) rather than being interpolated into the query string; we
print the value extracted from the execution result's `data.item.id`.

## Run

    npx tsx main.ts
