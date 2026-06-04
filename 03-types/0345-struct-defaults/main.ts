interface Point {
  x: number;
  y: number;
}

function makePoint(over: Partial<Point> = {}): Point {
  return { x: 0, y: 0, ...over };
}

const a = makePoint();
const b = makePoint({ x: 5 });

console.log(`${a.x} ${a.y}`);
console.log(`${b.x} ${b.y}`);
