class Point {
  constructor(
    private readonly x: number,
    private readonly y: number,
  ) {}

  toString(): string {
    return `Point(${this.x}, ${this.y})`;
  }
}

const p = new Point(1, 2);
console.log(`${p}`);
