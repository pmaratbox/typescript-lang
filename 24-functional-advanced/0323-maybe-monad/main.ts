type Maybe<T> = { tag: "some"; value: T } | { tag: "none" };

const some = <T>(value: T): Maybe<T> => ({ tag: "some", value });
const none: Maybe<never> = { tag: "none" };

function bind<T, U>(m: Maybe<T>, f: (x: T) => Maybe<U>): Maybe<U> {
  return m.tag === "some" ? f(m.value) : none;
}

function getOr<T>(m: Maybe<T>, fallback: string): T | string {
  return m.tag === "some" ? m.value : fallback;
}

const present = bind(bind(some(2), (x) => some(x + 3)), (x) => some(x * 2));
const absent = bind(bind(none as Maybe<number>, (x) => some(x + 3)), (x) => some(x * 2));

console.log(`${getOr(present, "none")} ${getOr(absent, "none")}`);
