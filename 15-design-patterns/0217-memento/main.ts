class Memento {
  constructor(readonly state: number) {}
}

class Originator {
  state = 0;
  save(): Memento {
    return new Memento(this.state);
  }
  restore(memento: Memento): void {
    this.state = memento.state;
  }
}

const originator = new Originator();
originator.state = 1;
const saved = originator.save();
originator.state = 2;
const current = originator.state;
originator.restore(saved);
const restored = originator.state;
console.log(`${current} ${restored}`);
