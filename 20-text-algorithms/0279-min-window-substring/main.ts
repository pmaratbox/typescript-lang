function minWindow(s: string, t: string): string {
  const need = new Map<string, number>();
  for (const c of t) need.set(c, (need.get(c) ?? 0) + 1);
  let required = need.size;
  const have = new Map<string, number>();
  let formed = 0;
  let left = 0;
  let bestLen = Infinity;
  let bestStart = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    have.set(c, (have.get(c) ?? 0) + 1);
    if (need.has(c) && have.get(c) === need.get(c)) formed++;
    while (formed === required) {
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestStart = left;
      }
      const lc = s[left];
      have.set(lc, (have.get(lc) ?? 0) - 1);
      if (need.has(lc) && (have.get(lc) ?? 0) < (need.get(lc) ?? 0)) formed--;
      left++;
    }
  }
  return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
