import { v5 } from 'uuid';

// UUIDv5 is name-based (SHA-1): deterministic from (namespace, name).
// A different name yields a different UUID — here "test.com" in the DNS namespace.
const id = v5('test.com', v5.DNS);
console.log(id);
