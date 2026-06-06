# 0415 — SwitchMap

Implement switchMap: when a new outer value arrives, cancel the previous inner subscription before starting the new one. Here each inner returns its scheduler tokens so the operator can cancel still-pending emissions.

## Run

    npx tsx main.ts
