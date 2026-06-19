import { createContainer, asFunction, InjectionMode } from 'awilix';

interface Widget {
  value(): string;
}

// Factory provider: a plain function that constructs the object,
// rather than autowiring a class. awilix calls it to build `widget`.
function makeWidget(): Widget {
  return {
    value() {
      return 'built';
    },
  };
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({
  widget: asFunction(makeWidget),
});

console.log(c.resolve<Widget>('widget').value());
