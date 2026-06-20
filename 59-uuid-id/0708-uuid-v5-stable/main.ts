import { v5 } from 'uuid';

// UUIDv5 is name-based (SHA-1): deterministic from (namespace, name).
// Generating it TWICE for the same DNS name yields the SAME UUID.
const first = v5('example.com', v5.DNS);
const second = v5('example.com', v5.DNS);
console.log(String(first === second)); // true — UUIDv5 is stable
