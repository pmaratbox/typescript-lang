import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
db.exec('create table scores(value integer)');

const insert = db.prepare('insert into scores(value) values (?)');
for (const value of [50, 90, 70, 30, 100, 20]) {
  insert.run(value);
}

const rows = db
  .prepare('select value from scores order by value desc limit 3')
  .all() as { value: number }[];

for (const row of rows) {
  console.log(row.value);
}

db.close();
