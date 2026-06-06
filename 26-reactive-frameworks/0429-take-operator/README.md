# 0429 — Take Operator

Use the library's take operator to take the first 3 values of an unbounded stream, then complete. Uses RxJS with the `take` operator, which unsubscribes from the unbounded source after 3 emissions and fires completion.

## Run

    npx tsx main.ts
