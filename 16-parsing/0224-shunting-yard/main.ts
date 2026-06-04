function toPostfix(infix: string): string {
  const prec: Record<string, number> = { "+": 1, "-": 1, "*": 2, "/": 2 };
  const output: string[] = [];
  const ops: string[] = [];
  for (const tok of infix.split(" ")) {
    if (tok in prec) {
      while (ops.length && prec[ops[ops.length - 1]] >= prec[tok]) {
        output.push(ops.pop()!);
      }
      ops.push(tok);
    } else {
      output.push(tok);
    }
  }
  while (ops.length) output.push(ops.pop()!);
  return output.join(" ");
}

console.log(toPostfix("3 + 4 * 2"));
