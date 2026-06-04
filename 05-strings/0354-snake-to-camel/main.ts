const snake = "hello_world";
const [first, ...rest] = snake.split("_");
const camel = first + rest.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
console.log(camel);
