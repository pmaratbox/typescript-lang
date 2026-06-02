const pairs: [string, string][] = [["listen", "silent"], ["hello", "world"]];
for (const [a, b] of pairs) {
  const ana = [...a].sort().join("") === [...b].sort().join("");
  console.log(`${a}/${b}: ${ana ? "yes" : "no"}`);
}
