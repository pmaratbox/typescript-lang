for (let i: number = 1; i <= 3; i++) {
  const row: number[] = [];
  for (let j: number = 1; j <= 3; j++) {
    row.push(i * j);
  }
  console.log(row.join(" "));
}
