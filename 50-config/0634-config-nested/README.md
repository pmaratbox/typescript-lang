# 0634 — Nested key

Use the [node-config](https://github.com/node-config/node-config) library to load `config/default.json` and read the nested key `server.port` (an integer) via `config.get('server.port')`, printing the resolved value `8080`.

## Run

    npx tsx main.ts
