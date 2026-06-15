import { DateTime } from 'luxon';

// Parse a FIXED ISO date in UTC (never the current time), then read its ISO
// weekday number via Luxon's `.weekday` accessor (Monday=1 .. Sunday=7).
// The value is computed by the library, not hardcoded.
const date = DateTime.fromISO('2026-06-15', { zone: 'utc' });
console.log(date.weekday);
