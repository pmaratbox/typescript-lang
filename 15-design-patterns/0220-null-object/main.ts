interface Logger {
  log(message: string): void;
  count(): number;
}

class NullLogger implements Logger {
  log(_message: string): void {}
  count(): number {
    return 0;
  }
}

class RealLogger implements Logger {
  private logged = 0;
  log(_message: string): void {
    this.logged++;
  }
  count(): number {
    return this.logged;
  }
}

const nullLogger: Logger = new NullLogger();
const realLogger: Logger = new RealLogger();
nullLogger.log("ignored");
realLogger.log("recorded");
console.log(realLogger.count());
