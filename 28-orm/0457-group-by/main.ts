import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { asc, sql } from 'drizzle-orm';

const products = sqliteTable('products', {
  id: integer('id').primaryKey(),
  category: text('category'),
  price: integer('price'),
});

const client = createClient({ url: ':memory:' });
const db = drizzle(client);

await client.execute('create table products(id integer primary key, category text, price integer)');

await db.insert(products).values([
  { id: 1, category: 'a', price: 10 },
  { id: 2, category: 'b', price: 20 },
  { id: 3, category: 'a', price: 30 },
]);

const rows = await db
  .select({
    category: products.category,
    total: sql<number>`sum(${products.price})`,
  })
  .from(products)
  .groupBy(products.category)
  .orderBy(asc(products.category));

for (const r of rows) console.log(`${r.category} ${r.total}`);
