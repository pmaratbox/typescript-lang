# 0638 — Env override

Uses the [node-config](https://www.npmjs.com/package/config) library. `config/default.json` holds the file values and `config/custom-environment-variables.json` maps the `name` key to the `APP_NAME` environment variable. Setting `APP_NAME` in-process before loading config makes the env var override the file's `name`, so the resolved value prints as `from-env`.

## Run

    npx tsx main.ts
