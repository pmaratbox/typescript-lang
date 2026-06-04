abstract class Handler {
  private next: Handler | null = null;
  setNext(handler: Handler): Handler {
    this.next = handler;
    return handler;
  }
  handle(level: number): void {
    if (this.canHandle(level)) {
      this.process(level);
    } else if (this.next !== null) {
      this.next.handle(level);
    }
  }
  protected abstract canHandle(level: number): boolean;
  protected abstract process(level: number): void;
}

class LevelHandler extends Handler {
  constructor(private level: number) {
    super();
  }
  protected canHandle(level: number): boolean {
    return level === this.level;
  }
  protected process(level: number): void {
    console.log(`handled by ${level}`);
  }
}

const h1 = new LevelHandler(1);
h1.setNext(new LevelHandler(2)).setNext(new LevelHandler(3));
h1.handle(2);
