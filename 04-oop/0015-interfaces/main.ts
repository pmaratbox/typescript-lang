interface Shape {
  name(): string;
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  name(): string {
    return "rectangle";
  }
  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(private side: number) {}
  name(): string {
    return "square";
  }
  area(): number {
    return this.side * this.side;
  }
}

const shapes: Shape[] = [new Rectangle(3, 4), new Square(5)];
for (const s of shapes) {
  console.log(`${s.name()} area: ${s.area()}`);
}
