# 0208 — Virtual Proxy

Use a lazy virtual proxy that loads the real subject only on first access, printing `loaded`. The proxy holds a nullable real subject and instantiates it on the first `request()`.

## Run

    npx tsx main.ts
