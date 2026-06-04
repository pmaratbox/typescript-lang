// A pool of 2 real worker threads squares the tasks 1..4. The main thread
// dispatches a task to each idle worker and collects results (sorted, since
// completion order is not deterministic).
import { Worker } from "worker_threads";

const workerSrc = `
  const { parentPort } = require("worker_threads");
  parentPort.on("message", (n) => parentPort.postMessage(n * n));
`;

const tasks = [1, 2, 3, 4];
const results: number[] = [];
let next = 0;
const pool: Worker[] = [];

function dispatch(w: Worker): void {
  if (next < tasks.length) w.postMessage(tasks[next++]);
  else w.terminate();
}

for (let i = 0; i < 2; i++) {
  const w = new Worker(workerSrc, { eval: true });
  w.on("message", (sq: number) => {
    results.push(sq);
    if (results.length === tasks.length) {
      results.sort((a, b) => a - b);
      console.log(results.join(" "));
      pool.forEach((x) => x.terminate());
    } else {
      dispatch(w);
    }
  });
  pool.push(w);
}
pool.forEach(dispatch);
