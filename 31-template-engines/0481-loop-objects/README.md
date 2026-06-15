# 0481 — Loop over objects

Uses [handlebars](https://handlebarsjs.com/) and its `{{#each}}` block helper to
iterate a fixed list of user objects, rendering `name: age` on its own line for
each entry. The template engine compiles the fixed template string and renders
it against the fixed data; the trailing newline left by the loop is trimmed so
the output matches exactly.

## Run

    npx tsx main.ts
