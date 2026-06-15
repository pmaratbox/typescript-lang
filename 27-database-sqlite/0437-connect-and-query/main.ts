import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
const row = db.prepare('select 42 as v').get() as { v: number };
console.log(row.v);
db.close();
