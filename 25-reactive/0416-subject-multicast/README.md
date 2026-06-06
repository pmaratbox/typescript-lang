# 0416 — Subject Multicast

Implement a Subject that multicasts each emission to all current observers; two observers both receive 1 then 2. A typed `Subject<T>` holds an observer array and `next` iterates it to push synchronously.

## Run

    npx tsx main.ts
