# 0391 — URL Percent-Encode

Percent-encode the string "a b&c" to `a%20b%26c`. Unreserved characters pass through while others become `%` plus uppercase two-digit hex.

## Run

    npx tsx main.ts
