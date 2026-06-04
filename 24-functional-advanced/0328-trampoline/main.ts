type Thunk<T> = { done: true; value: T } | { done: false; next: () => Thunk<T> };

const done = <T>(value: T): Thunk<T> => ({ done: true, value });
const more = <T>(next: () => Thunk<T>): Thunk<T> => ({ done: false, next });

function trampoline<T>(start: Thunk<T>): T {
  let t = start;
  while (!t.done) t = t.next();
  return t.value;
}

function sumTo(n: number, acc: number): Thunk<number> {
  return n === 0 ? done(acc) : more(() => sumTo(n - 1, acc + n));
}

console.log(trampoline(sumTo(100, 0)));
