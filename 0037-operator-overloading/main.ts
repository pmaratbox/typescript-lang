class Point {
  constructor(public x: number, public y: number) {}

  add(other: Point): Point {
    return new Point(this.x + other.x, this.y + other.y);
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}

console.log(new Point(1, 2).add(new Point(3, 4)).toString());
