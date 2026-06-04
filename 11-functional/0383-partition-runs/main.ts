function partitionRuns(xs: number[]): number[][] {
  const runs: number[][] = [];
  for (const x of xs) {
    const last = runs[runs.length - 1];
    if (last && last[0] === x) {
      last.push(x);
    } else {
      runs.push([x]);
    }
  }
  return runs;
}

const input = [1, 1, 2, 3, 3, 3];
const runs = partitionRuns(input);
console.log(runs.map((run) => run.join(" ")).join("|"));
