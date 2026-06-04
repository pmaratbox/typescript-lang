function boyerMooreSearch(text: string, pattern: string): number {
  const m = pattern.length;
  const n = text.length;
  const last = new Map<string, number>();
  for (let i = 0; i < m; i++) last.set(pattern[i], i);
  let s = 0;
  while (s <= n - m) {
    let j = m - 1;
    while (j >= 0 && pattern[j] === text[s + j]) j--;
    if (j < 0) return s;
    const badChar = last.get(text[s + j]) ?? -1;
    s += Math.max(1, j - badChar);
  }
  return -1;
}

console.log(boyerMooreSearch("zzabc", "abc"));
