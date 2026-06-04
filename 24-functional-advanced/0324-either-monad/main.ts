type Either<L, R> = { tag: "left"; left: L } | { tag: "right"; right: R };

const left = <L>(left: L): Either<L, never> => ({ tag: "left", left });
const right = <R>(right: R): Either<never, R> => ({ tag: "right", right });

function bind<L, R, U>(e: Either<L, R>, f: (x: R) => Either<L, U>): Either<L, U> {
  return e.tag === "right" ? f(e.right) : e;
}

function safeDiv(a: number, b: number): Either<string, number> {
  return b === 0 ? left("err") : right(a / b);
}

const ok = bind(safeDiv(8, 2), (x) => safeDiv(x, 2));
const bad = bind(safeDiv(8, 0), (x) => safeDiv(x, 2));

const show = (e: Either<string, number>): string => (e.tag === "right" ? String(e.right) : e.left);

console.log(`${show(ok)} ${show(bad)}`);
