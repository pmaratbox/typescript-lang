# 0507 — Object field

Uses the `graphql` (graphql-js) library to define a schema with an object type `User` and execute the query `{ user { name } }` in-process. The resolver returns an object, and we extract the selected `user.name` field from the execution result's `data`.

## Run

    npx tsx main.ts
