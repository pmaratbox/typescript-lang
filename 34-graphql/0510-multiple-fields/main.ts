import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type User {
    name: String
    age: Int
  }
  type Query {
    user: User
  }
`);

const rootValue = {
  user: () => ({ name: 'alice', age: 30 }),
};

const res = await graphql({ schema, source: '{ user { name age } }', rootValue });

const user = (res.data as { user: { name: string; age: number } }).user;
console.log(user.name);
console.log(user.age);
