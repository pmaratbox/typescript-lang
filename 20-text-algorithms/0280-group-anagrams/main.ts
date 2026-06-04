function groupAnagrams(words: string[]): number {
  const groups = new Map<string, string[]>();
  for (const word of words) {
    const key = word.split("").sort().join("");
    const bucket = groups.get(key) ?? [];
    bucket.push(word);
    groups.set(key, bucket);
  }
  return groups.size;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat"]));
