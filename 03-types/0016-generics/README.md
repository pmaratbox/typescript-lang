# 0016 — Generics

Define a generic `first` function that returns the first element of a list, then call it on a list of integers and a list of strings to show one definition working at two types. TypeScript writes the type parameter as `first<T>(items: T[]): T`, and the compiler *infers* `T` at each call site — `number` for the int array, `string` for the string array — so the return type is checked without any explicit annotation on the call. The types are erased at compile time, leaving plain JavaScript identical to `javascript-lang`.

## Run

    npx tsx main.ts
