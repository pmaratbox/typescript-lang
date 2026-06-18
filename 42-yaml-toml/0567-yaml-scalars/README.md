# 0567 — YAML scalars

This lesson uses the `js-yaml` library to parse a small YAML mapping (`name: Alice`, `role: admin`, `age: 30`) into a plain object. `yaml.load` decodes the document, turning `age` into the integer `30`, and the three scalar fields are printed space-joined.

## Run

    npx tsx main.ts
