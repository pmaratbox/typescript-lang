import { DateTime } from 'luxon';

// Parse a FIXED ISO date in UTC (never the current time).
const dt = DateTime.fromISO('2026-06-15', { zone: 'utc' });

// Extract components via the library's accessors.
console.log(dt.year);
console.log(dt.month);
console.log(dt.day);
