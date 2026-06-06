type Handler<T> = (payload: T) => void;

class EventEmitter {
  private topics = new Map<string, Handler<any>[]>();

  on<T>(topic: string, handler: Handler<T>): void {
    const handlers = this.topics.get(topic) ?? [];
    handlers.push(handler);
    this.topics.set(topic, handlers);
  }

  emit<T>(topic: string, payload: T): void {
    for (const handler of this.topics.get(topic) ?? []) {
      handler(payload);
    }
  }

  off<T>(topic: string, handler: Handler<T>): void {
    const handlers = this.topics.get(topic);
    if (!handlers) return;
    const index = handlers.indexOf(handler);
    if (index !== -1) handlers.splice(index, 1);
  }
}

const bus = new EventEmitter();

const h: Handler<string> = (payload) => console.log(`hi ${payload}`);
const g: Handler<string> = (payload) => console.log(`bye ${payload}`);

bus.on("greet", h);
bus.on("bye", g);

bus.emit("greet", "ada");
bus.emit("bye", "ada");

bus.off("greet", h);
bus.emit("greet", "x");
