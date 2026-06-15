import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`type Query { numbers: [Int] }`);

const res = await graphql({
  schema,
  source: '{ numbers }',
  rootValue: { numbers: () => [1, 2, 3] },
});

const numbers = (res.data as { numbers: number[] }).numbers;
for (const n of numbers) {
  console.log(n);
}
