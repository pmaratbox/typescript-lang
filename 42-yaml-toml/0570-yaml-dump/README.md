# 0570 — Dump YAML

This lesson uses the `js-yaml` library to serialize a fixed map (`name=Alice`, `age=30`, `city=Paris`) into block-style YAML. `yaml.dump(m, { sortKeys: true })` emits plain block scalars (no flow braces, no quotes) with the keys sorted alphabetically, producing `age`, `city`, then `name`.

## Run

    npx tsx main.ts
