function isRotation(a: string, b: string): boolean {
  return a.length === b.length && (a + a).includes(b);
}

const rotation: boolean = isRotation("abcd", "cdab");
console.log(rotation ? "yes" : "no");
