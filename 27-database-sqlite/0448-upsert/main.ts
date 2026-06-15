import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table inv(item text primary key, qty integer)');

db.prepare('insert into inv(item, qty) values (?, ?)').run('apple', 5);

const upsert = db.prepare(
  'insert into inv(item, qty) values (?, ?) on conflict(item) do update set qty = qty + excluded.qty',
);
upsert.run('apple', 5);
upsert.run('banana', 3);

const rows = db.prepare('select item, qty from inv order by item').all() as {
  item: string;
  qty: number;
}[];
for (const row of rows) {
  console.log(`${row.item} ${row.qty}`);
}
