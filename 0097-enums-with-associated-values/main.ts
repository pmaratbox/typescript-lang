type Shape =
  | { type: "rect"; w: number; h: number }
  | { type: "square"; s: number };

function area(shape: Shape): number {
  if (shape.type === "rect") return shape.w * shape.h;
  return shape.s * shape.s;
}

const shapes: Shape[] = [
  { type: "rect", w: 2, h: 3 },
  { type: "square", s: 4 },
];
for (const shape of shapes) {
  console.log(area(shape));
}
