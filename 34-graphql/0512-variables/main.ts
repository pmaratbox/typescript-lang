import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type Item { id: Int }
  type Query { item(id: Int!): Item }
`);

const res = await graphql({
  schema,
  source: 'query($id: Int!) { item(id: $id) { id } }',
  variableValues: { id: 42 },
  rootValue: {
    item: ({ id }: { id: number }) => ({ id }),
  },
});

console.log((res.data as { item: { id: number } }).item.id);
