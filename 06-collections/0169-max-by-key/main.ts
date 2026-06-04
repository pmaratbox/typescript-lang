const words: string[] = ["a", "bbb", "cc"];
const longest = words.reduce((best, w) => (w.length > best.length ? w : best));
console.log(longest);
