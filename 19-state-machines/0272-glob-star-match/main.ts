const match = (glob: string, text: string): boolean => {
  let g = 0;
  let t = 0;
  let star = -1;
  let mark = 0;
  while (t < text.length) {
    if (g < glob.length && (glob[g] === text[t] || glob[g] === "?")) {
      g++;
      t++;
    } else if (g < glob.length && glob[g] === "*") {
      star = g;
      mark = t;
      g++;
    } else if (star !== -1) {
      g = star + 1;
      mark++;
      t = mark;
    } else {
      return false;
    }
  }
  while (g < glob.length && glob[g] === "*") g++;
  return g === glob.length;
};

const results = [["a*b", "aaab"], ["a*b", "aac"]].map(([p, s]) =>
  match(p, s) ? "yes" : "no"
);
console.log(results.join(" "));
