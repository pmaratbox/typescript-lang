type TokenType = "NUM" | "PLUS";

function tokenize(src: string): TokenType[] {
  const tokens: TokenType[] = [];
  for (const ch of src) {
    if (ch >= "0" && ch <= "9") tokens.push("NUM");
    else if (ch === "+") tokens.push("PLUS");
  }
  return tokens;
}

console.log(tokenize("1 + 2").join(" "));
