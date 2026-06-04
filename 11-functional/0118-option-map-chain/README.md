# 0118 — Option Map Chaining

Map a function over a present optional (10 -> 12) and an absent one (-> fallback), printing `12 none`. A nullable type models the option, with `mapOpt` short-circuiting on `null` and `unwrapOr` supplying the fallback.

## Run

    npx tsx main.ts
