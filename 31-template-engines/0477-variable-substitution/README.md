# 0477 — Variable substitution

Uses [handlebars](https://handlebarsjs.com/) to render a fixed template string
`Hello {{name}}` with the fixed data `{ name: 'alice' }`. The `{{name}}`
mustache expression performs simple variable substitution, looking up the
`name` property on the context object and interpolating its value into the
output.

## Run

    npx tsx main.ts
