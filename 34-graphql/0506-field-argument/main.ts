import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`type Query { greet(name: String!): String }`);

const res = await graphql({
  schema,
  source: '{ greet(name: "alice") }',
  rootValue: {
    greet: ({ name }: { name: string }) => 'hello ' + name,
  },
});

console.log((res.data as { greet: string }).greet);
