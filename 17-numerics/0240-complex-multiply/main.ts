interface Complex {
  re: number;
  im: number;
}

function multiply(a: Complex, b: Complex): Complex {
  return {
    re: a.re * b.re - a.im * b.im,
    im: a.re * b.im + a.im * b.re,
  };
}

const result = multiply({ re: 1, im: 2 }, { re: 3, im: 4 });
console.log(`${result.re} ${result.im}`);
