import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`type Query { hello: String }`);

const rootValue = { hello: () => 'world' };

const res = await graphql({ schema, source: '{ hello }', rootValue });

console.log((res.data as { hello: string }).hello);
