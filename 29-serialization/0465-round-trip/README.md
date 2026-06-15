# 0465 — Round trip

Serialize then deserialize the same object. This lesson uses the built-in `JSON.stringify`/`JSON.parse` together with the `zod` library's `z.object` schema (fields declared alphabetically `age`/`name` for canonical output). A `Person` is built and validated via `Person.parse`, serialized to a JSON string, parsed back, and re-validated, then prints the restored `name` -> `alice`.

## Run

    npx tsx main.ts
