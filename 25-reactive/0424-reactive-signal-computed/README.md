# 0424 — Signal + Computed

Implement fine-grained reactivity: a writable signal and a derived computed that recomputes when its dependency changes. The computed registers a recompute callback via a module-level `activeEffect` while reading the signals it depends on.

## Run

    npx tsx main.ts
