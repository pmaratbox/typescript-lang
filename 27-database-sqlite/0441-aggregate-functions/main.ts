import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table t(amount integer)');
const insert = db.prepare('insert into t(amount) values (?)');
for (const amount of [10, 20, 30, 40, 50]) {
  insert.run(amount);
}

const row = db
  .prepare(
    'select count(*) as n, sum(amount) as s, min(amount) as lo, max(amount) as hi from t',
  )
  .get() as { n: number; s: number; lo: number; hi: number };

console.log(row.n);
console.log(row.s);
console.log(row.lo);
console.log(row.hi);

db.close();
