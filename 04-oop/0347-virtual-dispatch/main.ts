interface Shape {
  describe(): string;
}

class Circle implements Shape {
  describe(): string {
    return "circle";
  }
}

class Square implements Shape {
  describe(): string {
    return "square";
  }
}

class Triangle implements Shape {
  describe(): string {
    return "triangle";
  }
}

const shapes: Shape[] = [new Circle(), new Square(), new Triangle()];
console.log(shapes.map((s) => s.describe()).join(" "));
