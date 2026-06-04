function prefixFunction(s: string): number[] {
  const pi = new Array<number>(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    let j = pi[i - 1];
    while (j > 0 && s[i] !== s[j]) j = pi[j - 1];
    if (s[i] === s[j]) j++;
    pi[i] = j;
  }
  return pi;
}

function kmpSearch(text: string, pattern: string): number[] {
  const pi = prefixFunction(pattern);
  const matches: number[] = [];
  let j = 0;
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) j = pi[j - 1];
    if (text[i] === pattern[j]) j++;
    if (j === pattern.length) {
      matches.push(i - j + 1);
      j = pi[j - 1];
    }
  }
  return matches;
}

console.log(kmpSearch("ababab", "ab").join(" "));
