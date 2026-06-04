const inner = new Error("inner");
const outer = new Error("outer", { cause: inner });

const innerMessage = (outer.cause as Error).message;
console.log(`${outer.message}: ${innerMessage}`);
