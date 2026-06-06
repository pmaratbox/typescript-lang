# 0419 — Catch Error

Implement catchError that, on an error from the source, switches to a fallback stream. Observables are plain functions taking a typed Observer, so catchError just swaps in the fallback's producer from the error handler.

## Run

    npx tsx main.ts
