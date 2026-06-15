import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
db.exec('create table products(id integer, sku text, price integer)');

const insert = db.prepare('insert into products(id, sku, price) values (?, ?, ?)');
for (const [id, sku, price] of [
  [1, 'A', 100],
  [2, 'B', 200],
  [3, 'C', 300],
] as [number, string, number][]) {
  insert.run(id, sku, price);
}

db.exec('create index idx_sku on products(sku)');

const row = db
  .prepare('select price from products where sku = ?')
  .get('B') as { price: number };

console.log(row.price);

db.close();
