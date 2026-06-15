# 0478 — Conditional

Uses [handlebars](https://github.com/handlebars-lang/handlebars.js) to render a
fixed template with the built-in `{{#if}}...{{else}}...{{/if}}` block helper.
The compiled template branches on the boolean `logged_in` value from the data
object: when it is truthy it renders `welcome`, otherwise `guest`. With the
fixed data `{ logged_in: true }` the engine produces `welcome`.

## Run

    npx tsx main.ts
