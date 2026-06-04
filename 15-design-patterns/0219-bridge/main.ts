interface Color {
  name(): string;
}

class Red implements Color {
  name(): string {
    return "red";
  }
}

abstract class Shape {
  constructor(protected color: Color) {}
  abstract describe(): string;
}

class Circle extends Shape {
  describe(): string {
    return `${this.color.name()} circle`;
  }
}

const shape: Shape = new Circle(new Red());
console.log(shape.describe());
