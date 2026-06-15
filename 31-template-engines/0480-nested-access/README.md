# 0480 — Nested access

Uses [handlebars](https://handlebarsjs.com/) to render a fixed template string
`{{user.name}}` with the fixed data `{ user: { name: 'alice' } }`. The dotted
mustache path `user.name` walks into the nested `user` object and reads its
`name` property, demonstrating nested field access in handlebars.

## Run

    npx tsx main.ts
