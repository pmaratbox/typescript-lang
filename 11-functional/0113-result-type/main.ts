type Result<T> =
  | { kind: "ok"; value: T }
  | { kind: "err"; msg: string };

const ok = <T>(value: T): Result<T> => ({ kind: "ok", value });
const err = <T>(msg: string): Result<T> => ({ kind: "err", msg });

const safeDiv = (a: number, b: number): Result<number> =>
  b === 0 ? err("divide by zero") : ok(a / b);

const show = (r: Result<number>): string =>
  r.kind === "ok" ? `ok: ${r.value}` : `err: ${r.msg}`;

console.log(show(safeDiv(10, 2)));
console.log(show(safeDiv(1, 0)));
