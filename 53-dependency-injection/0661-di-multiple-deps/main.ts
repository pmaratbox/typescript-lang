import { createContainer, asClass, InjectionMode } from 'awilix';

class A {
  x() {
    return 'a';
  }
}

class B {
  y() {
    return 'b';
  }
}

class Service {
  a: A;
  b: B;
  constructor({ a, b }: { a: A; b: B }) {
    this.a = a;
    this.b = b;
  }
  run() {
    return this.a.x() + this.b.y();
  }
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({
  a: asClass(A),
  b: asClass(B),
  service: asClass(Service),
});

console.log(c.resolve<Service>('service').run());
