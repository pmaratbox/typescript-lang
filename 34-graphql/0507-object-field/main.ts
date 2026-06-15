import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type User { name: String }
  type Query { user: User }
`);

const root = {
  user: () => ({ name: 'alice' }),
};

const res = await graphql({ schema, source: '{ user { name } }', rootValue: root });

const data = res.data as { user: { name: string } };
console.log(data.user.name);
