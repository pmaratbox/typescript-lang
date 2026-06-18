# 0573 — TOML array

This lesson uses the `smol-toml` library to parse the TOML document `tags = ["red", "green", "blue"]\n`. The `parse` function reads the top-level `tags` key into a JavaScript array of strings, which is then joined with commas to produce `red,green,blue`.

## Run

    npx tsx main.ts
