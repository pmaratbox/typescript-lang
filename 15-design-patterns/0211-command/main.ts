interface Command {
  execute(): void;
  undo(): void;
}

class Counter {
  value = 0;
}

class AddCommand implements Command {
  constructor(
    private counter: Counter,
    private amount: number,
  ) {}
  execute(): void {
    this.counter.value += this.amount;
  }
  undo(): void {
    this.counter.value -= this.amount;
  }
}

const counter = new Counter();
const cmd: Command = new AddCommand(counter, 5);
cmd.execute();
const afterExecute = counter.value;
cmd.undo();
const afterUndo = counter.value;
console.log(`${afterExecute} ${afterUndo}`);
