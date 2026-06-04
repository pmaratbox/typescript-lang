type State = "locked" | "unlocked";
type Event = "coin" | "push";

const transition = (state: State, event: Event): State => {
  if (state === "locked" && event === "coin") return "unlocked";
  if (state === "unlocked" && event === "push") return "locked";
  return state;
};

let state: State = "locked";
const events: Event[] = ["coin", "push", "push"];
const visited: State[] = [];
for (const event of events) {
  state = transition(state, event);
  visited.push(state);
}

console.log(visited.join(" "));
