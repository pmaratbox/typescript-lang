const next: Record<string, string> = {
  A: "B",
  B: "C",
  C: "A",
};

let state = "A";
const visited: string[] = [];
for (let i = 0; i < 3; i++) {
  state = next[state];
  visited.push(state);
}

console.log(visited.join(" "));
