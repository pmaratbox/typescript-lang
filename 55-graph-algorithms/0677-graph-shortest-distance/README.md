# 0677 — Shortest distance

Build the fixed weighted undirected graph G with the `graphlib` library and compute the weighted shortest-path distance from node `a` to node `e`. We use `graphlib`'s `alg.dijkstra` (Dijkstra's algorithm) with an edge-weight function, then read the distance to `e`. The unique shortest path `a-b-c-d-e` has total cost `4`, computed by the library rather than hardcoded.

## Run

    npx tsx main.ts
