# 0508 — List field

Uses graphql-js (`graphql`), the reference JavaScript GraphQL implementation, to define a schema with a list-of-scalar field `Query.numbers: [Int]` and execute the query `{ numbers }` in-process. The resolver returns `[1, 2, 3]`; each element of the resolved list is printed on its own line.

## Run

    npx tsx main.ts
