import { createContainer, asClass, InjectionMode } from 'awilix';

interface Animal {
  sound(): string;
}

class Dog implements Animal {
  sound(): string {
    return 'woof';
  }
}

const container = createContainer({ injectionMode: InjectionMode.PROXY });

// Bind the Animal abstraction to the Dog implementation.
container.register({ animal: asClass(Dog) });

// Resolve by the interface name and call the method.
const animal = container.resolve<Animal>('animal');
console.log(animal.sound());
