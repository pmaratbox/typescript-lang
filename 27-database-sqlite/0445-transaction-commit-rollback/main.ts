import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');

db.exec('create table t(n integer)');

const insert = db.prepare('insert into t(n) values (?)');

// First transaction: insert 1 and 2, then commit.
db.exec('begin');
insert.run(1);
insert.run(2);
db.exec('commit');

// Second transaction: insert 3, then roll back.
db.exec('begin');
insert.run(3);
db.exec('rollback');

for (const row of db.prepare('select n from t order by n').all() as {
  n: number;
}[]) {
  console.log(row.n);
}

db.close();
