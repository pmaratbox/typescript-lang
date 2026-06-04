function zeller(year: number, month: number, day: number): number {
  // Treat Jan and Feb as months 13 and 14 of the previous year.
  if (month < 3) {
    month += 12;
    year -= 1;
  }
  const k = year % 100;
  const j = Math.floor(year / 100);
  // Zeller's congruence: h = 0 -> Saturday, 1 -> Sunday, ...
  const h =
    (day +
      Math.floor((13 * (month + 1)) / 5) +
      k +
      Math.floor(k / 4) +
      Math.floor(j / 4) +
      5 * j) %
    7;
  return h;
}

const names: string[] = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

console.log(names[zeller(2000, 1, 1)]);
