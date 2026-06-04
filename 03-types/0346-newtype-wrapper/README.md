# 0346 — Newtype Wrapper

Wrap raw integers in distinct UserId and ProductId types so they cannot be confused, printing `user-1 prod-2`. Branded types attach a phantom `__brand` so the two id kinds are structurally incompatible.

## Run

    npx tsx main.ts
