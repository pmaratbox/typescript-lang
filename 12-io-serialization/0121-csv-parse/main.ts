const csv = "alice,30\nbob,25";
const pairs = csv.split("\n").map((row) => {
  const [name, value] = row.split(",");
  return `${name}=${value}`;
});
console.log(pairs.join(" "));
