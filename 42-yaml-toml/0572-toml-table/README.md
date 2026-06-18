# 0572 — TOML table

This lesson uses the `smol-toml` library to parse a TOML document containing a `[server]` table. `parseToml` turns the table into a nested JavaScript object, from which `server.host` and `server.port` are read and printed as `host=localhost port=8080`.

## Run

    npx tsx main.ts
