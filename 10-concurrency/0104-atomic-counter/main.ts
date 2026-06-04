// Real OS threads (worker_threads) sharing one SharedArrayBuffer. Each thread
// does 100 lock-free Atomics.add; atomics guarantee no increments are lost.
import { Worker } from "worker_threads";

const sab = new SharedArrayBuffer(4);
const counter = new Int32Array(sab);

const workerSrc = `
  const { workerData } = require("worker_threads");
  const counter = new Int32Array(workerData);
  for (let i = 0; i < 100; i++) Atomics.add(counter, 0, 1);
`;

let remaining = 10;
for (let t = 0; t < 10; t++) {
  const w = new Worker(workerSrc, { eval: true, workerData: sab });
  w.on("exit", () => {
    if (--remaining === 0) console.log(Atomics.load(counter, 0));
  });
}
