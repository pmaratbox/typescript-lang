type Expr =
  | { tag: "Num"; value: number }
  | { tag: "Add"; left: Expr; right: Expr };

function evalExpr(e: Expr): number {
  switch (e.tag) {
    case "Num":
      return e.value;
    case "Add":
      return evalExpr(e.left) + evalExpr(e.right);
  }
}

const expr: Expr = {
  tag: "Add",
  left: { tag: "Num", value: 1 },
  right: { tag: "Num", value: 2 },
};

console.log(evalExpr(expr));
