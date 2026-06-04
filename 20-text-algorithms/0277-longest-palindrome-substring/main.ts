function longestPalindrome(s: string): string {
  let best = "";
  const expand = (l: number, r: number): void => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    const found = s.slice(l + 1, r);
    if (found.length > best.length) best = found;
  };
  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }
  return best;
}

console.log(longestPalindrome("babad"));
