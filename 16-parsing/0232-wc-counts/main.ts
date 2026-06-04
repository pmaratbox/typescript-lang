function wc(text: string): [number, number, number] {
  const words = text.split(/\s+/).filter((w) => w.length > 0).length;
  const lines = text.split("\n").length;
  const chars = text.length;
  return [words, lines, chars];
}

const [w, l, c] = wc("a b\nc");
console.log(`${w} ${l} ${c}`);
