import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { asc, eq } from 'drizzle-orm';

const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name'),
});

const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  userId: integer('user_id'),
  title: text('title'),
});

const client = createClient({ url: ':memory:' });
const db = drizzle(client);

await client.execute('create table users(id integer primary key, name text)');
await client.execute('create table posts(id integer primary key, user_id integer, title text)');

await db.insert(users).values([
  { id: 1, name: 'alice' },
  { id: 2, name: 'bob' },
]);

await db.insert(posts).values([
  { id: 1, userId: 1, title: 'hello' },
  { id: 2, userId: 1, title: 'world' },
  { id: 3, userId: 2, title: 'hi' },
]);

const rows = await db
  .select({ name: users.name, title: posts.title })
  .from(posts)
  .innerJoin(users, eq(posts.userId, users.id))
  .orderBy(asc(users.name), asc(posts.title));

for (const r of rows) console.log(`${r.name} ${r.title}`);
