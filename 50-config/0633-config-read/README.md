# 0633 — Read a value

Use [node-config](https://github.com/node-config/config) to load `config/default.json` and read the top-level string `name`. The library resolves the configuration directory relative to the working directory, layering `default.json` (and any environment overrides), then `config.get('name')` returns the extracted value `myapp`.

## Run

    npx tsx main.ts
