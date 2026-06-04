type Constructor<T = {}> = new (...args: any[]) => T;

function WithA<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    a(): string {
      return "a";
    }
  };
}

function WithB<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    b(): string {
      return "b";
    }
  };
}

class Empty {}

class Composed extends WithB(WithA(Empty)) {}

const c = new Composed();
console.log(`${c.a()} ${c.b()}`);
