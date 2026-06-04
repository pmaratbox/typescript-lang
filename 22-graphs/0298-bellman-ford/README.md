# 0298 — Bellman-Ford

On the digraph with a negative edge 0->1(1),1->2(-2),0->2(4), print the shortest distances from node 0 `0 1 -1`. Relax every typed edge `V-1` times, guarding against the `Infinity` sentinel.

## Run

    npx tsx main.ts
