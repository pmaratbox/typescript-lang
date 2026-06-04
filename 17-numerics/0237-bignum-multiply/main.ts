function multiplyStrings(a: string, b: string): string {
  const result = new Array<number>(a.length + b.length).fill(0);
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      const mul = (a.charCodeAt(i) - 48) * (b.charCodeAt(j) - 48);
      const pos = i + j + 1;
      const sum = mul + result[pos];
      result[pos] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }
  const s = result.join("").replace(/^0+(?=\d)/, "");
  return s;
}

console.log(multiplyStrings("123", "456"));
