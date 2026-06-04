type Light = "red" | "green" | "yellow";

const next: Record<Light, Light> = {
  red: "green",
  green: "yellow",
  yellow: "red",
};

let state: Light = "red";
const visited: Light[] = [];
for (let i = 0; i < 4; i++) {
  state = next[state];
  visited.push(state);
}

console.log(visited.join(" "));
