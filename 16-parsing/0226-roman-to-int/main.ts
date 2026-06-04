function romanToInt(s: string): number {
  const vals: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = vals[s[i]];
    const next = i + 1 < s.length ? vals[s[i + 1]] : 0;
    total += cur < next ? -cur : cur;
  }
  return total;
}

console.log(romanToInt("XIV"));
