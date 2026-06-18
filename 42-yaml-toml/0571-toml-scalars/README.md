# 0571 — TOML scalars

This lesson uses the `smol-toml` library to parse the TOML document `title = "demo"\nversion = 2\n`. The `parse` function reads the top-level keys, where `title` becomes the string `"demo"` and `version` becomes the integer `2`. The two values are then printed space-joined as `demo 2`.

## Run

    npx tsx main.ts
