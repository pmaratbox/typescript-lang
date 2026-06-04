class Sub1 {
  init(): void {}
}
class Sub2 {
  init(): void {}
}
class Sub3 {
  init(): void {}
}

class Facade {
  private sub1 = new Sub1();
  private sub2 = new Sub2();
  private sub3 = new Sub3();

  start(): string {
    this.sub1.init();
    this.sub2.init();
    this.sub3.init();
    return "ready";
  }
}

console.log(new Facade().start());
