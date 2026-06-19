import { createContainer, asClass, InjectionMode } from 'awilix';

class Repo {
  data() {
    return 'data';
  }
}

class Service {
  repo: Repo;
  constructor({ repo }: { repo: Repo }) {
    this.repo = repo;
  }
  run() {
    return this.repo.data();
  }
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({
  repo: asClass(Repo),
  service: asClass(Service),
});

console.log(c.resolve<Service>('service').run());
