function atoi(s: string): number {
  let i = 0;
  let sign = 1;
  if (s[i] === "-") {
    sign = -1;
    i++;
  } else if (s[i] === "+") {
    i++;
  }
  let n = 0;
  for (; i < s.length; i++) {
    n = n * 10 + (s.charCodeAt(i) - 48);
  }
  return sign * n;
}

function itoa(n: number): string {
  if (n === 0) return "0";
  const neg = n < 0;
  let m = Math.abs(n);
  let s = "";
  while (m > 0) {
    s = String.fromCharCode(48 + (m % 10)) + s;
    m = Math.floor(m / 10);
  }
  return neg ? "-" + s : s;
}

const parsed = atoi("-42");
const formatted = itoa(parsed);
console.log(`${parsed} ${formatted}`);
