class Point {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  toString(): string {
    return `Point(x=${this.x}, y=${this.y})`;
  }
}

const p = new Point(1, 2);
console.log(p.toString());
