const labels: string[] = [1, 2, 3, 4].map((n: number): string =>
  n % 2 === 0 ? "even" : "odd"
);
console.log(labels.join(" "));
