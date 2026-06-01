function word(n: number): string {
  switch (n) {
    case 1: return "one";
    case 2: return "two";
    default: return "many";
  }
}

for (const n of [1, 2, 5]) {
  console.log(`${n}: ${word(n)}`);
}
