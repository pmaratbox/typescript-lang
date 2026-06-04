class Mediator {
  private colleagues = new Map<string, Colleague>();
  register(colleague: Colleague): void {
    this.colleagues.set(colleague.name, colleague);
  }
  send(to: string, message: string): void {
    this.colleagues.get(to)?.receive(message);
  }
}

class Colleague {
  constructor(
    public name: string,
    private mediator: Mediator,
  ) {
    mediator.register(this);
  }
  send(to: string, message: string): void {
    this.mediator.send(to, message);
  }
  receive(message: string): void {
    console.log(`${this.name} got: ${message}`);
  }
}

const mediator = new Mediator();
const a = new Colleague("A", mediator);
new Colleague("B", mediator);
a.send("B", "hi");
