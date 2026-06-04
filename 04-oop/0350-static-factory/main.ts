class Color {
  private constructor(
    readonly r: number,
    readonly g: number,
    readonly b: number,
  ) {}

  static fromHex(hex: string): Color {
    const h = hex.replace(/^#/, "");
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return new Color(r, g, b);
  }
}

const c = Color.fromHex("#ff0000");
console.log(`${c.r} ${c.g} ${c.b}`);
