function pascal(rows: number): number[][] {
  const triangle: number[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: number[] = [1];
    for (let c = 1; c <= r; c++) {
      const prev = triangle[r - 1];
      row.push((prev[c - 1] ?? 0) + (prev[c] ?? 0));
    }
    triangle.push(row);
  }
  return triangle;
}

for (const row of pascal(4)) {
  console.log(row.join(" "));
}
