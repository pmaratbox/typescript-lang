const matrix = [[1, 2, 3], [4, 5, 6]];
const transposed = matrix[0].map((_, j) => matrix.map((row) => row[j]));

for (const row of transposed) {
  console.log(row.join(" "));
}
