# 0483 — Default value

Uses [handlebars](https://github.com/handlebars-lang/handlebars.js) to render a
fixed template that supplies a default for a missing value. Handlebars has no
dedicated default operator, so the idiom is the built-in `{{#if}}...{{else}}...{{/if}}`
block helper: `{{#if name}}{{name}}{{else}}anonymous{{/if}}`. With the fixed data
object `{}` (which has no `name` property), the `name` value is `undefined` and
therefore falsy, so the engine takes the `{{else}}` branch and renders the
default `anonymous`.

## Run

    npx tsx main.ts
