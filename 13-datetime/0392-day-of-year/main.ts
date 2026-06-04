function isLeap(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function dayOfYear(year: number, month: number, day: number): number {
  const monthDays: number[] = [31, isLeap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let total = day;
  for (let m = 0; m < month - 1; m++) {
    total += monthDays[m];
  }
  return total;
}

console.log(dayOfYear(2000, 3, 1));
