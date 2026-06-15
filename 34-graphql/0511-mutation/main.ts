import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type User { name: String }
  type Query { _empty: String }
  type Mutation { addUser(name: String!): User }
`);

const rootValue = {
  addUser: ({ name }: { name: string }) => ({ name }),
};

const res = await graphql({
  schema,
  source: 'mutation { addUser(name: "bob") { name } }',
  rootValue,
});

console.log((res.data as { addUser: { name: string } }).addUser.name);
