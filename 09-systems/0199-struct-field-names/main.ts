interface Point {
    x: number;
    y: number;
}

const p: Point = { x: 1, y: 2 };

const fields = Object.keys(p);
console.log(fields.join(" "));
