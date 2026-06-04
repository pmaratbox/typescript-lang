const LEVELS = { INFO: 1, WARN: 2, ERROR: 3 } as const;
type Level = keyof typeof LEVELS;

const threshold: Level = "WARN";

function log(level: Level, msg: string): void {
  if (LEVELS[level] >= LEVELS[threshold]) {
    console.log(`${level}: ${msg}`);
  }
}

log("INFO", "i");
log("WARN", "w");
log("ERROR", "e");
