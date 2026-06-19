# 0637 — Default for missing key

Use the [node-config](https://github.com/node-config/node-config) library to load `config/default.json` and look up the key `missing`, which is absent from the file. node-config's `config.has()` reports that the key is not present, so the code supplies its own default value `fallback` instead of calling `config.get()` (which would throw on a missing key). The resolved value `fallback` is printed.

## Run

    npx tsx main.ts
