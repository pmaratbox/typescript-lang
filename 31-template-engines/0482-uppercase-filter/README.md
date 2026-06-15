# 0482 — Uppercase filter

Uses [handlebars](https://handlebarsjs.com/) to render a fixed template string
`{{upper name}}` with the fixed data `{ name: 'alice' }`. Handlebars has no
built-in uppercase filter, so a custom helper named `upper` is registered with
`Handlebars.registerHelper`; the `{{upper name}}` expression invokes that helper
with the `name` value, returning `name.toUpperCase()` to produce `ALICE`.

## Run

    npx tsx main.ts
