import { v5 } from 'uuid';

// UUIDv5 is name-based (SHA-1): deterministic from (namespace, name).
// Generate one in the DNS namespace for the name "example.com".
const id = v5('example.com', v5.DNS);
console.log(id);
