# 0307 — A* on a Grid

Find the shortest path length from (0,0) to (2,2) on an obstacle-free 3x3 grid (4-directional) with the Manhattan heuristic, printing `4`. A* picks the lowest `g + h` cell from an open list keyed by a typed `Map<number, number>`.

## Run

    npx tsx main.ts
