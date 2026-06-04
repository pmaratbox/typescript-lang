interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {}

  area(): number {
    return this.width * this.height;
  }
}

class Triangle implements Shape {
  constructor(
    private readonly base: number,
    private readonly height: number,
  ) {}

  area(): number {
    return (this.base * this.height) / 2;
  }
}

const shapes: Shape[] = [new Rectangle(2, 3), new Triangle(4, 4)];
const total = shapes.reduce((sum, shape) => sum + shape.area(), 0);
console.log(`total area: ${total}`);
