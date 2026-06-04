const divisibleBy3 = (bits: string): boolean => {
  let state = 0;
  for (const ch of bits) {
    const b = ch === "1" ? 1 : 0;
    state = (state * 2 + b) % 3;
  }
  return state === 0;
};

const results = ["110", "100"].map((s) => (divisibleBy3(s) ? "yes" : "no"));
console.log(results.join(" "));
