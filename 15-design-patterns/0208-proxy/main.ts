interface Subject {
  request(): string;
}

class RealSubject implements Subject {
  request(): string {
    return "loaded";
  }
}

class VirtualProxy implements Subject {
  private real: RealSubject | null = null;
  request(): string {
    if (this.real === null) {
      this.real = new RealSubject();
    }
    return this.real.request();
  }
}

const proxy: Subject = new VirtualProxy();
console.log(proxy.request());
