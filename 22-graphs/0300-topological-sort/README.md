# 0300 — Topological Sort

Topologically sort the DAG 0->1,0->2,1->3,2->3 using the Kahn algorithm (smallest index first), printing `0 1 2 3`. A typed indegree array drives Kahn's queue, re-sorted to always emit the smallest ready node.

## Run

    npx tsx main.ts
