const queue: number[] = [];
queue.push(1);
queue.push(2);
queue.push(3);

const out: number[] = [];
while (queue.length > 0) {
  out.push(queue.shift()!);
}
console.log(out.join(" "));
