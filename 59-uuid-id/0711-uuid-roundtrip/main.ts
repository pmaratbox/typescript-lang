import { parse, stringify } from 'uuid';

// Round-trip: parse an UPPERCASE UUID into its 16 raw bytes, then stringify
// back. The `uuid` library always emits the canonical lowercase form, so the
// uppercase input is normalized on the way out.
const input = '550E8400-E29B-41D4-A716-446655440000';
const bytes = parse(input);
console.log(stringify(bytes));
