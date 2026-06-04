const duplicatechars: string = "aabbcc";
const seen = new Set<string>();
const result: string[] = [];
for (const ch of duplicatechars) {
  if (!seen.has(ch)) {
    seen.add(ch);
    result.push(ch);
  }
}
console.log(result.join(""));
