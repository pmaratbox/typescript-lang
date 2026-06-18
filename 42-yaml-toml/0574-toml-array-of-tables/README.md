# 0574 — TOML array of tables

This lesson uses the `smol-toml` library to parse a TOML array of tables. The document `[[servers]]\nname = "alpha"\n[[servers]]\nname = "beta"\n` declares two `[[servers]]` table entries, which `parse` collects into the `servers` array. Each server's `name` is extracted and the values are joined with commas to print `alpha,beta`.

## Run

    npx tsx main.ts
