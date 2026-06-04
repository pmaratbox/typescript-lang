// Real OS threads (worker_threads) share one SharedArrayBuffer holding a lock
// word and a counter. A spinlock built from Atomics.compareExchange acts as a
// mutex around a non-atomic read-modify-write, so no increments are lost.
import { Worker } from "worker_threads";

const sab = new SharedArrayBuffer(8); // [0] = lock, [1] = counter
const shared = new Int32Array(sab);

const workerSrc = `
  const { workerData } = require("worker_threads");
  const s = new Int32Array(workerData);
  function lock()   { while (Atomics.compareExchange(s, 0, 0, 1) !== 0) Atomics.wait(s, 0, 1); }
  function unlock() { Atomics.store(s, 0, 0); Atomics.notify(s, 0, 1); }
  for (let i = 0; i < 100; i++) {
    lock();
    s[1] = s[1] + 1; // critical section: non-atomic RMW guarded by the mutex
    unlock();
  }
`;

let remaining = 10;
for (let t = 0; t < 10; t++) {
  const w = new Worker(workerSrc, { eval: true, workerData: sab });
  w.on("exit", () => {
    if (--remaining === 0) console.log(shared[1]);
  });
}
