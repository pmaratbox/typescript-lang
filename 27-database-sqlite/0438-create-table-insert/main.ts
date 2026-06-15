import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table users(id integer, name text)');

const insert = db.prepare('insert into users(id, name) values (?, ?)');
insert.run(1, 'alice');
insert.run(2, 'bob');
insert.run(3, 'carol');

const rows = db.prepare('select name from users order by id').all() as { name: string }[];
for (const row of rows) {
  console.log(row.name);
}
