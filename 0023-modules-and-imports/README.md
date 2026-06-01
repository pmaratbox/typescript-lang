# 0023 — Modules & Imports

Define `square(n)` in a separate `mathutil` module and import it from the main program, printing `square(8) = 64` across the module boundary. Same `export`/`import` syntax as ES modules. The specifier ends in `.js` even though the file is `mathutil.ts` — under modern (NodeNext) resolution the path names the *emitted* file. `tsx` runs the TypeScript directly without a separate build step.

## Run

    npx tsx main.ts
