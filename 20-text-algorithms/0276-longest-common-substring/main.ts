function longestCommonSubstring(a: string, b: string): string {
  const dp: number[][] = Array.from({ length: a.length + 1 }, () =>
    new Array<number>(b.length + 1).fill(0),
  );
  let best = 0;
  let end = 0;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > best) {
          best = dp[i][j];
          end = i;
        }
      }
    }
  }
  return a.slice(end - best, end);
}

console.log(longestCommonSubstring("abcde", "xbcdy"));
