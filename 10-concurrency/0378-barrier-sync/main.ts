// Three real worker_threads each "arrive" at a barrier by atomically
// incrementing a shared count, then block on Atomics.wait until all 3 have
// arrived. The last arriver flips the gate and Atomics.notify wakes the rest.
import { Worker } from "worker_threads";

const PARTIES = 3;
const sab = new SharedArrayBuffer(8); // [0] = arrived count, [1] = gate generation
const shared = new Int32Array(sab);

const workerSrc = `
  const { workerData, parentPort } = require("worker_threads");
  const s = new Int32Array(workerData.sab);
  const parties = workerData.parties;
  const arrived = Atomics.add(s, 0, 1) + 1; // this thread's arrival ordinal
  if (arrived === parties) {
    Atomics.store(s, 1, 1);   // open the gate
    Atomics.notify(s, 1);     // wake everyone waiting on the barrier
  } else {
    while (Atomics.load(s, 1) === 0) Atomics.wait(s, 1, 0);
  }
  parentPort.postMessage(arrived);
`;

let done = 0;
for (let t = 0; t < PARTIES; t++) {
  const w = new Worker(workerSrc, { eval: true, workerData: { sab, parties: PARTIES } });
  w.on("exit", () => {
    if (++done === PARTIES) console.log(`all reached: ${Atomics.load(shared, 0)}`);
  });
}
