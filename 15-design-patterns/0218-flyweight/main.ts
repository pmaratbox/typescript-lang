class Glyph {
  constructor(readonly char: string) {}
}

class GlyphFactory {
  private cache = new Map<string, Glyph>();
  created = 0;
  get(char: string): Glyph {
    let glyph = this.cache.get(char);
    if (glyph === undefined) {
      glyph = new Glyph(char);
      this.cache.set(char, glyph);
      this.created++;
    }
    return glyph;
  }
}

const factory = new GlyphFactory();
for (const char of ["a", "b", "a"]) {
  factory.get(char);
}
console.log(factory.created);
