# 0635 — List value

Use the [node-config](https://github.com/node-config/node-config) library to load `config/default.json` and read the array key `hosts`. node-config resolves the file from the `config/` directory and returns the JavaScript array, which is joined with commas and printed as `a,b,c`.

## Run

    npx tsx main.ts