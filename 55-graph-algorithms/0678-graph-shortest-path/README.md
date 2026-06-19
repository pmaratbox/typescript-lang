# 0678 — Shortest path route

Build the fixed weighted undirected graph G with the `graphlib` library, then compute the unique weighted shortest path from `a` to `e`. `graphlib`'s `alg.dijkstra` runs Dijkstra's algorithm and returns a `{ distance, predecessor }` record per node; the path is reconstructed by walking predecessors back from `e` and joining the nodes with `-`: `a-b-c-d-e`.

## Run

    npx tsx main.ts
