# 0172 — Ring Buffer

Push 1,2,3,4,5 into a fixed capacity-3 ring buffer (overwriting oldest) and print the final contents `3 4 5`. A `head` index plus a `count` track the live window, with modular arithmetic wrapping writes around the backing array.

## Run

    npx tsx main.ts
