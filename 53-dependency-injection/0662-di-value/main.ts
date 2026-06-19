import { createContainer, asClass, asValue, InjectionMode } from 'awilix';

class Service {
  config: string;
  constructor({ config }: { config: string }) {
    this.config = config;
  }
  value(): string {
    return this.config;
  }
}

const c = createContainer({ injectionMode: InjectionMode.PROXY });
c.register({
  config: asValue('v1'),
  service: asClass(Service),
});

const service = c.resolve<Service>('service');
console.log(service.value());
