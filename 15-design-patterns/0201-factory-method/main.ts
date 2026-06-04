interface Shape {
  kind(): string;
}

class Circle implements Shape {
  kind(): string {
    return "circle";
  }
}

class Square implements Shape {
  kind(): string {
    return "square";
  }
}

function createShape(name: string): Shape {
  switch (name) {
    case "circle":
      return new Circle();
    case "square":
      return new Square();
    default:
      throw new Error(`unknown shape: ${name}`);
  }
}

const a = createShape("circle");
const b = createShape("square");
console.log(`${a.kind()} ${b.kind()}`);
