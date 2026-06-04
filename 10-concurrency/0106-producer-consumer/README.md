# 0106 — Producer / Consumer

A producer sends 1..5 to a consumer that sums them, printing `15`. An `AsyncGenerator` channel feeds the consumer, which accumulates the running sum.

## Run

    npx tsx main.ts
