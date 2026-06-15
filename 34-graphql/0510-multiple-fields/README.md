# 0510 — Multiple fields

Uses the `graphql` (graphql-js) library to build a schema in-process and execute
a query that selects multiple fields (`name` and `age`) of a `User` object. The
resolved values are extracted from the execution result's `data` and printed,
demonstrating GraphQL's ability to fetch several fields of an object in one query.

## Run

    npx tsx main.ts
