function evalRpn(expr: string): number {
  const stack: number[] = [];
  for (const tok of expr.split(" ")) {
    if (tok === "+" || tok === "-" || tok === "*" || tok === "/") {
      const b = stack.pop()!;
      const a = stack.pop()!;
      stack.push(tok === "+" ? a + b : tok === "-" ? a - b : tok === "*" ? a * b : a / b);
    } else {
      stack.push(Number(tok));
    }
  }
  return stack.pop()!;
}

console.log(evalRpn("3 4 + 5 *"));
