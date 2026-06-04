# 0101 — Threads: Spawn and Join

Spawn 3 worker threads, wait for all of them to finish, then print `done: 3`. TypeScript models this with `Promise.all` over three async tasks and prints the count.

## Run

    npx tsx main.ts
