const gray = (n: number): number => n ^ (n >> 1);

const codes: number[] = [0, 1, 2, 3].map(gray);
console.log(codes.join(" "));
