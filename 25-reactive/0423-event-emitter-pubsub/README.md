# 0423 — EventEmitter (Pub/Sub)

Build a multi-topic EventEmitter with on(topic, handler), emit(topic, payload), and off(topic, handler). A `Map<string, Handler[]>` keyed by topic keeps subscriptions typed and decoupled from producers.

## Run

    npx tsx main.ts
