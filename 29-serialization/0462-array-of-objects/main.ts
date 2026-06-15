import { z } from 'zod';

const Person = z.object({ age: z.number(), name: z.string() });
const People = z.array(Person);

const people = People.parse([
  { age: 30, name: 'alice' },
  { age: 25, name: 'bob' },
]);

console.log(JSON.stringify(people));
