function addMinutes(hh: number, mm: number, delta: number): string {
  const total = (hh * 60 + mm + delta) % (24 * 60);
  const h = Math.floor(total / 60);
  const m = total % 60;
  const pad = (n: number): string => n.toString().padStart(2, "0");
  return `${pad(h)}:${pad(m)}`;
}

console.log(addMinutes(10, 45, 90));
