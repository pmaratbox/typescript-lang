// TypeScript — pino via tsx. Run: npx tsx main.ts   (group package.json present)
import pino from 'pino';
let captured = "";
const stream = { write: (s: string) => { captured += s; } };
const log = pino({ base: null, timestamp: false, level: "info" }, stream);
log.warn("low disk");
const LVL: Record<number, string> = { 10: "trace", 20: "debug", 30: "info", 40: "warn", 50: "error", 60: "fatal" };
const INTERNAL = new Set(["level", "msg", "time"]);
for (const line of captured.trim().split("\n").filter(Boolean)) {
  const d = JSON.parse(line);
  const fields = Object.keys(d).filter(k => !INTERNAL.has(k)).sort().map(k => `|${k}=${d[k]}`).join("");
  console.log(`${LVL[d.level]}|${d.msg}${fields}`);
}
