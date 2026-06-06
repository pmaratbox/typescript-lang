// Fine-grained reactivity: a writable signal and a derived computed.

type Subscriber = () => void;

function signal<T>(initial: T): { (): T; set(value: T): void } {
  let value = initial;
  const subscribers: Subscriber[] = [];

  const read = (() => {
    const current = activeEffect;
    if (current && !subscribers.includes(current)) {
      subscribers.push(current);
    }
    return value;
  }) as { (): T; set(value: T): void };

  read.set = (next: T): void => {
    value = next;
    for (const sub of [...subscribers]) sub();
  };

  return read;
}

let activeEffect: Subscriber | null = null;

function computed<T>(fn: () => T): () => T {
  let cache: T;
  let dirty = true;

  const recompute: Subscriber = () => {
    dirty = true;
  };

  return (): T => {
    if (dirty) {
      const prev = activeEffect;
      activeEffect = recompute;
      cache = fn();
      activeEffect = prev;
      dirty = false;
    }
    return cache;
  };
}

const a = signal(2);
const b = signal(3);
const sum = computed(() => a() + b());

console.log(sum()); // 5
a.set(10);
console.log(sum()); // 13
