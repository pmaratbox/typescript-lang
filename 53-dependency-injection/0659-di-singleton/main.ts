import { createContainer, asClass, Lifetime, InjectionMode } from 'awilix';

class Repo {
  data() {
    return "data";
  }
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({ repo: asClass(Repo, { lifetime: Lifetime.SINGLETON }) });

const a = c.resolve<Repo>("repo");
const b = c.resolve<Repo>("repo");
console.log(a === b);
