import { version } from 'uuid';

// Every UUID encodes its version in a fixed nibble. The uuid library's
// `version` parses a UUID string and returns that version number.
const id = '550e8400-e29b-41d4-a716-446655440000';
console.log(version(id));
