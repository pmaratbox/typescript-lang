interface Greeter {
  greet(): string;
}

// Provide a default implementation via an abstract base class.
abstract class DefaultGreeter implements Greeter {
  greet(): string {
    return "hi";
  }
}

class PlainGreeter extends DefaultGreeter {}

class LoudGreeter extends DefaultGreeter {
  override greet(): string {
    return "hey";
  }
}

const plain = new PlainGreeter();
const loud = new LoudGreeter();
console.log(`${plain.greet()} ${loud.greet()}`);
