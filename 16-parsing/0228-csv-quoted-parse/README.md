# 0228 — Parse Quoted CSV

Parse the CSV row `a,"b,c",d`, respecting the quoted comma, into three fields joined by pipes `a|b,c|d`. A character walk with an in-quotes flag suppresses the embedded separator.

## Run

    npx tsx main.ts
