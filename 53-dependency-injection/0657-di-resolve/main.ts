import { createContainer, asClass, InjectionMode } from 'awilix';

class Greeter {
  greet(): string {
    return 'hello';
  }
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({ greeter: asClass(Greeter) });

const greeter = c.resolve<Greeter>('greeter');
console.log(greeter.greet());
