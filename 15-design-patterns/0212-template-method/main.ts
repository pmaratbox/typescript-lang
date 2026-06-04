abstract class Algorithm {
  protected abstract step(): string;
  run(): string {
    return ["start", this.step(), "end"].join(" ");
  }
}

class WorkAlgorithm extends Algorithm {
  protected step(): string {
    return "work";
  }
}

console.log(new WorkAlgorithm().run());
