// Real worker_threads share a counter in a SharedArrayBuffer. Each increment is
// performed with a compare-and-swap retry loop: read the value, compute +1, and
// only commit via Atomics.compareExchange if the value is unchanged; otherwise
// retry. Ten threads do 10 increments each => 100, with no lost updates.
import { Worker } from "worker_threads";

const sab = new SharedArrayBuffer(4); // [0] = shared counter
const shared = new Int32Array(sab);

const workerSrc = `
  const { workerData } = require("worker_threads");
  const s = new Int32Array(workerData);
  for (let i = 0; i < 10; i++) {
    let cur, next;
    do {
      cur = Atomics.load(s, 0);
      next = cur + 1;
    } while (Atomics.compareExchange(s, 0, cur, next) !== cur); // CAS retry
  }
`;

let remaining = 10;
for (let t = 0; t < 10; t++) {
  const w = new Worker(workerSrc, { eval: true, workerData: sab });
  w.on("exit", () => {
    if (--remaining === 0) console.log(Atomics.load(shared, 0));
  });
}
