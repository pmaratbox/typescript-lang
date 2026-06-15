# 0484 — List length

Uses [handlebars](https://github.com/handlebars-lang/handlebars.js) with a
custom `length` helper registered via `Handlebars.registerHelper` to render the
size of a fixed array `items = [1, 2, 3]`. The template `{{length items}}` is a
fixed string compiled and rendered by the engine, which calls the helper and
emits the array's length. The trailing newline is trimmed before printing.

## Run

    npx tsx main.ts
