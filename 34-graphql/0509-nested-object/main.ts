import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type Address { city: String }
  type User { address: Address }
  type Query { user: User }
`);

const rootValue = {
  user: () => ({ address: { city: 'oslo' } }),
};

const res = await graphql({
  schema,
  source: '{ user { address { city } } }',
  rootValue,
});

const data = res.data as { user: { address: { city: string } } };
console.log(data.user.address.city);
