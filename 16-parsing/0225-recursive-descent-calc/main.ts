function calc(src: string): number {
  let pos = 0;
  const peek = () => src[pos];

  function factor(): number {
    let n = 0;
    while (peek() >= "0" && peek() <= "9") {
      n = n * 10 + Number(src[pos++]);
    }
    return n;
  }

  function term(): number {
    let v = factor();
    while (peek() === "*") {
      pos++;
      v *= factor();
    }
    return v;
  }

  function expr(): number {
    let v = term();
    while (peek() === "+") {
      pos++;
      v += term();
    }
    return v;
  }

  return expr();
}

console.log(calc("2+3*4"));
