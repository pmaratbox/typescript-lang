const row = "00100";
const cells = [...row].map((c) => Number(c));

const next = cells.map((_, i) => {
  const left = i - 1 >= 0 ? cells[i - 1] : 0;
  const right = i + 1 < cells.length ? cells[i + 1] : 0;
  return left ^ right;
});

console.log(next.join(""));
