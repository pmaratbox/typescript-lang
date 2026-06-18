# 0568 — Nested YAML mapping

This lesson uses the `js-yaml` library to parse a fixed YAML document containing a nested `server` mapping. `yaml.load(...)` turns the text into a plain object; we read the nested `server.host` and `server.port` values and print them in the controlled `host:port` format.

## Run

    npx tsx main.ts
