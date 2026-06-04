class Config {
  private static instance: Config | null = null;

  private constructor() {}

  static getInstance(): Config {
    if (Config.instance === null) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

const a = Config.getInstance();
const b = Config.getInstance();
console.log(`same: ${a === b ? "yes" : "no"}`);
