# 0435 — SwitchMap

Use the library's switchMap on a virtual/test scheduler so a new outer value cancels the previous inner stream. Uses RxJS `switchMap` on a `TestScheduler`, where each new outer value unsubscribes the prior inner Observable.

## Run

    npx tsx main.ts
