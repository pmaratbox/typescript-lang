function isLeap(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const years: number[] = [2000, 1900, 2024];
console.log(years.map((y) => (isLeap(y) ? "yes" : "no")).join(" "));
