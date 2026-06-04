const commonprefix: string[] = ["flower", "flow", "flight"];

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    const ch = first[i];
    for (const s of strs) {
      if (i >= s.length || s[i] !== ch) {
        return first.slice(0, i);
      }
    }
  }
  return first;
}

console.log(longestCommonPrefix(commonprefix));
