function isBalanced(s: string): boolean {
  const stack: string[] = [];
  for (const ch of s) {
    if (ch === "(") stack.push(ch);
    else if (ch === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

for (const s of ["(())", "(()"]) {
  console.log(isBalanced(s) ? "yes" : "no");
}
