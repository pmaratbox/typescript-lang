enum Color {
    RED,
    GREEN,
    BLUE,
}

const names = Object.values(Color).filter(
    (v): v is string => typeof v === "string",
);

console.log(names.join(" "));
