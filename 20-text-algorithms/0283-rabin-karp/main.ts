function rabinKarp(text: string, pattern: string): number[] {
  const m = pattern.length;
  const n = text.length;
  const base = 256;
  const mod = 1_000_000_007;
  const matches: number[] = [];
  if (m > n) return matches;

  let high = 1;
  for (let i = 0; i < m - 1; i++) high = (high * base) % mod;

  let patHash = 0;
  let winHash = 0;
  for (let i = 0; i < m; i++) {
    patHash = (patHash * base + pattern.charCodeAt(i)) % mod;
    winHash = (winHash * base + text.charCodeAt(i)) % mod;
  }

  for (let i = 0; i <= n - m; i++) {
    if (patHash === winHash && text.slice(i, i + m) === pattern) {
      matches.push(i);
    }
    if (i < n - m) {
      winHash =
        ((winHash - text.charCodeAt(i) * high) * base +
          text.charCodeAt(i + m)) %
        mod;
      winHash = ((winHash % mod) + mod) % mod;
    }
  }
  return matches;
}

console.log(rabinKarp("xabxab", "ab").join(" "));
