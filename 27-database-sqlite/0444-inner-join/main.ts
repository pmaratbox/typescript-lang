import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
db.exec('create table users(id integer, name text)');
db.exec('create table orders(user_id integer, item text)');

const insertUser = db.prepare('insert into users(id, name) values (?, ?)');
for (const [id, name] of [
  [1, 'alice'],
  [2, 'bob'],
] as [number, string][]) {
  insertUser.run(id, name);
}

const insertOrder = db.prepare('insert into orders(user_id, item) values (?, ?)');
for (const [userId, item] of [
  [1, 'book'],
  [2, 'pen'],
  [1, 'lamp'],
] as [number, string][]) {
  insertOrder.run(userId, item);
}

const rows = db
  .prepare(
    'select u.name as name, o.item as item from orders o join users u on u.id = o.user_id order by u.name, o.item',
  )
  .all() as { name: string; item: string }[];

for (const row of rows) {
  console.log(`${row.name} ${row.item}`);
}

db.close();
