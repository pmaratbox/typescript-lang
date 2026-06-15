import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { sum } from 'drizzle-orm';

const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name'),
  age: integer('age'),
});

const client = createClient({ url: ':memory:' });
const db = drizzle(client);

await client.execute('create table users(id integer primary key, name text, age integer)');

await db.insert(users).values([
  { id: 1, name: 'alice', age: 30 },
  { id: 2, name: 'bob', age: 25 },
  { id: 3, name: 'carol', age: 35 },
]);

const [row] = await db.select({ total: sum(users.age) }).from(users);
console.log(row.total);
