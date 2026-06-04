type Matrix2 = [[number, number], [number, number]];

function det(m: Matrix2): number {
  return m[0][0] * m[1][1] - m[0][1] * m[1][0];
}

const m: Matrix2 = [
  [1, 2],
  [3, 4],
];
console.log(det(m));
