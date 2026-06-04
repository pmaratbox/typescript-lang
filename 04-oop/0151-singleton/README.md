# 0151 — Singleton

Obtain a singleton instance twice and confirm both references are the same object, printing `same: yes`. A private constructor plus a lazy static field guarantees `getInstance()` always returns the one shared object.

## Run

    npx tsx main.ts
