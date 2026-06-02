const n = 10;
const isPrime: boolean[] = new Array(n + 1).fill(true);
isPrime[0] = isPrime[1] = false;
for (let i = 2; i * i <= n; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
}

const primes: number[] = [];
for (let i = 2; i <= n; i++) {
  if (isPrime[i]) primes.push(i);
}
console.log(primes.join(" "));
