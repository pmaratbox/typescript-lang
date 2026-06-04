const zipWith = <A, B, C>(f: (a: A, b: B) => C, xs: A[], ys: B[]): C[] =>
  xs.map((x, i) => f(x, ys[i]));

const result = zipWith((a: number, b: number) => a + b, [1, 2, 3], [4, 5, 6]);

console.log(result.join(" "));
