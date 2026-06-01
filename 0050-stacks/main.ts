const stack: number[] = [];
for (const n of [1, 2, 3]) {
  stack.push(n);
}

const popped: number[] = [];
while (stack.length > 0) {
  popped.push(stack.pop()!);
}

console.log(popped.join(" "));
