import * as R from 'ramda';

// Chunk [1,2,3,4,5,6] into size-2 pieces using Ramda's R.splitEvery,
// join each chunk with ',' and the chunks with '|'.
const chunks = R.splitEvery(2, [1, 2, 3, 4, 5, 6]);
console.log(chunks.map((c) => c.join(",")).join("|"));
