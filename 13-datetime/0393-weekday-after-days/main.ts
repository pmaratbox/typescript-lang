const names: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const start = 6; // Saturday
const result = (start + 3) % 7;

console.log(names[result]);
