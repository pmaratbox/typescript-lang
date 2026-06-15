import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table t(n integer)');

const insert = db.prepare('insert into t(n) values (?)');

// Insert 1000 rows (1..1000) using a prepared statement in one transaction.
db.exec('begin');
for (let n = 1; n <= 1000; n++) {
  insert.run(n);
}
db.exec('commit');

const row = db.prepare('select count(*) as c from t').get() as { c: number };
console.log(row.c);

db.close();
