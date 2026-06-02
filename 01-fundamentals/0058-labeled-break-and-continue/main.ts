outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j > i) continue outer;
    if (i * j === 4) {
      console.log(`stop at ${i},${j}`);
      break outer;
    }
    console.log(`${i},${j}`);
  }
}
