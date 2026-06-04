function addStrings(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  const out: string[] = [];
  while (i >= 0 || j >= 0 || carry > 0) {
    const da = i >= 0 ? a.charCodeAt(i--) - 48 : 0;
    const db = j >= 0 ? b.charCodeAt(j--) - 48 : 0;
    const sum = da + db + carry;
    out.push(String(sum % 10));
    carry = Math.floor(sum / 10);
  }
  return out.reverse().join("");
}

console.log(addStrings("999999999999", "1"));
