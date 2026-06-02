# 0042 — Environment Variables

Read the environment variable `LESSON_ENV_VAR`, falling back to `default` when it is unset, and print `value: default`. The same `process.env` access as Node; entries are typed `string | undefined`, so the `??` fallback is exactly what the type system expects for a possibly-missing variable.

## Run

    npx tsx main.ts
