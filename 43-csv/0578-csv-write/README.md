# 0578 — Write CSV

This lesson uses the `papaparse` library to write rows to CSV. The `Papa.unparse` writer serializes two rows (`["name","age"]` and `["Alice","30"]`) into CSV text. The output line terminators are normalized from `\r\n` to `\n` and the trailing newline is stripped, printing `name,age\nAlice,30`.

## Run

    npx tsx main.ts
