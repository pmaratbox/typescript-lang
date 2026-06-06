# 0414 — FlatMap (mergeMap)

Implement flatMap/mergeMap: map each outer value to an inner timed stream and merge all inners concurrently (no cancellation). A typed Observable<T> closure-producer feeds each emission into a virtual-time Scheduler so the merge is fully deterministic.

## Run

    npx tsx main.ts
