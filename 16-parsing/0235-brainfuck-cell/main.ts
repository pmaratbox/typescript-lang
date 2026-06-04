function runBf(program: string): number {
  let cell = 0;
  for (const op of program) {
    if (op === "+") cell++;
    else if (op === "-") cell--;
  }
  return cell;
}

console.log(runBf("+++"));
