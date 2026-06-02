abstract class Shape {
  abstract area(): number;
  describe(): string {
    return `area: ${this.area()}`;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }
  area(): number {
    return this.side * this.side;
  }
}

console.log(new Square(3).describe());
