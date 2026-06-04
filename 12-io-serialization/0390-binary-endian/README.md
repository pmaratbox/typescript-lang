# 0390 — Big-Endian Bytes

Encode the integer 258 as two big-endian bytes (1, 2), decode them back to 258, printing `1 2 258`. Bit shifts and masks split the high and low bytes, then `high*256+low` recombines them.

## Run

    npx tsx main.ts
