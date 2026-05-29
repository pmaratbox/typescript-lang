const present: number | null = 42;
const absent: number | null = null;

console.log(`present: ${present ?? -1}`);
console.log(`absent: ${absent ?? -1}`);
