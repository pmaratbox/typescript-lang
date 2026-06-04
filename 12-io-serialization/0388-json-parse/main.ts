const obj: Record<string, number> = JSON.parse('{"x":1,"y":2}');
const parts = Object.entries(obj).map(([k, v]) => `${k}=${v}`);
console.log(parts.join(" "));
