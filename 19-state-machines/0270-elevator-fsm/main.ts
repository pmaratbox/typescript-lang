const targets = [2, 0];

let floor = 0;
const stops: number[] = [floor];
for (const target of targets) {
  while (floor !== target) {
    floor += floor < target ? 1 : -1;
    stops.push(floor);
  }
}

console.log(stops.join(" "));
