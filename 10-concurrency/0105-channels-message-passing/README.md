# 0105 — Channels / Message Passing

Send the values 1, 2, 3 through a channel (or queue) from one thread and receive them in order, printing `1 2 3`. An `AsyncGenerator` is the idiomatic channel: the producer `yield`s and the consumer drains it with `for await`.

## Run

    npx tsx main.ts
