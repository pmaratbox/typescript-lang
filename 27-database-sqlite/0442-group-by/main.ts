import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
db.exec('create table sales(category text, amount integer)');

const insert = db.prepare('insert into sales(category, amount) values (?, ?)');
for (const [category, amount] of [
  ['a', 10],
  ['b', 20],
  ['a', 30],
  ['b', 5],
  ['a', 2],
] as [string, number][]) {
  insert.run(category, amount);
}

const rows = db
  .prepare('select category, sum(amount) as total from sales group by category order by category')
  .all() as { category: string; total: number }[];

for (const row of rows) {
  console.log(`${row.category} ${row.total}`);
}

db.close();
